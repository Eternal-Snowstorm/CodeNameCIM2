# MB2 Java 注册完整文档
> 适用: Minecraft 1.20.1 / Forge / Multiblocked2 1.20.1-1.0.39
> 本文所有类名与方法签名均经 javap 反编译验证。依赖:
> ```gradle
> dependencies { implementation fg.deobf("com.lowdragmc.multiblocked2:Multiblocked2:1.20.1-1.0.39") }
> ```

---

## 1. 注册管线与时机

MB2 在 `FMLCommonSetupEvent.enqueueWork` 里按固定顺序执行注册:

```
unfreeze MACHINE_DEFINITIONS / RECIPE_TYPES
 ├─ ① post MBDRegistryEvent.Machine / MBDRegistryEvent$MBDRecipeType   ← 本文全部注册入口 (mod bus)
 ├─ ② 扫描 ldlib/assets/mbd2/{machine,multiblock,recipe_type}/*.sm|.mb|.rt
 ├─ ③ KubeJS 事件 (MBDRegistryEvents.machine / .recipeType)
 └─ freeze
```

Java 侧用静态 `@SubscribeEvent` 订阅即可 (事件是 mod bus 事件):

```java
@Mod.EventBusSubscriber(modid = "cmi", bus = Mod.EventBusSubscriber.Bus.MOD)
public final class MB2Registration {
    @SubscribeEvent
    public static void registerMachines(MBDRegistryEvent.Machine event) { ... }
    @SubscribeEvent
    public static void registerRecipeTypes(MBDRegistryEvent.MBDRecipeType event) { ... }
}
```

---

## 2. 注册机器定义

### 2.1 方式 A: 直接加载 NBT (.sm / .mb) —— 与编辑器导出的文件 100% 兼容

```java
@SubscribeEvent
public static void registerMachines(MBDRegistryEvent.Machine event) {
    // 从 mod 的 resources 读 NBT: 文件位于 src/main/resources/assets/cmi/mbd2/...
    // registerFromResource(modClass, 机器类型名, 资源路径(相对 /assets/))
    event.registerFromResource(MB2Registration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/energy_input.sm");
    event.registerFromResource(MB2Registration.class, "multiblock",    "cmi/mbd2/multiblock/electrolyzer.mb");

    // 从磁盘任意位置读 NBT (热重载友好, 与 MB2 的编辑器项目文件同构)
    event.registerFromFile("single_machine", new File("config/mbd2_machines/foo.sm"));
}
```

**机器类型名** (来自 `MBDMachineDefinitionTypes` 的 @LDLRegister name):

| 类型名 | 对应类 | 说明 |
|---|---|---|
| `single_machine` | `MBDMachineDefinition` | 单方块机器/部件 |
| `multiblock` | `MultiblockMachineDefinition` | 多方块机器 |
| `create_machine` | `CreateKineticMachineDefinition` | 动力机器 (需 Create) |

NBT 加载内部就是 `NbtIo.read → loadProductiveTag(file, tag, tasks) → register`,
与 MB2 自己扫描 `ldlib/assets/mbd2` 走完全相同的反序列化, UI/渲染器/状态机/事件图全部保留。

### 2.2 方式 B: 纯代码 Builder —— 单方块机器完整示例

```java
import com.lowdragmc.mbd2.common.event.MBDRegistryEvent;
import com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition;
import com.lowdragmc.mbd2.common.machine.definition.config.*;
import com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleCreativeTab;
import com.lowdragmc.mbd2.api.block.RotationState;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.phys.shapes.Shapes;

@SubscribeEvent
public static void registerMachines(MBDRegistryEvent.Machine event) {
    event.register(createElectrolyzer());
}

private static MBDMachineDefinition createElectrolyzer() {
    var id = new ResourceLocation("cmi", "electrolyzer");

    // ---- 状态机: 至少一个根状态, 每个状态带模型/碰撞箱/光照/音效 ----
    MachineState base = MachineState.builder()
            .name("base")
            .modelRenderer(new ResourceLocation("cmi", "block/machine/electrolyzer/off")) // 等价 NBT "_type":"json_model"
            .shape(Shapes.block())                     // 碰撞箱 (整方块)
            .lightLevel(0)                             // 发光等级
            .renderingBox(new AABB(0, 0, 0, 1, 1, 1))  // 渲染盒 (光追/剔除用)
            .build();
    MachineState working = MachineState.builder()
            .name("working")
            .modelRenderer(new ResourceLocation("cmi", "block/machine/electrolyzer/on"))
            .shape(Shapes.block())
            .build();

    // ---- 方块属性 (全部可选, 不设走默认) ----
    ConfigBlockProperties block = ConfigBlockProperties.builder()
            .destroyTime(3f)
            .explosionResistance(6f)
            .rotationState(RotationState.NON_Y_AXIS)  // ALL / NONE / Y_AXIS / NON_Y_AXIS
            .emissive(false)
            .hasCollision(true)
            .build();

    // ---- 物品属性 ----
    ConfigItemProperties item = ConfigItemProperties.builder()
            .maxStackSize(64)
            .isGui3d(true)
            .creativeTab(new ToggleCreativeTab(new ResourceLocation("cmi", "machines")))
            .build();

    // ---- 机器设置 + 特性 (见第 4 节) ----
    ConfigMachineSettings settings = ConfigMachineSettings.builder()
            .machineLevel(1)
            .hasUI(true)
            .dropMachineItem(true)
            .traitDefinitions(List.of(
                    itemSlot("input", IO.IN, 1),
                    itemSlot("output", IO.OUT, 1),
                    fluidTank("fluid_in", IO.IN, 16000),
                    energyStorage("energy", 1_000_000, 100_000)))
            .build();

    // ---- 配方逻辑 ----
    ConfigRecipeLogicSettings logic = ConfigRecipeLogicSettings.builder()
            .enable(true)
            .recipeType(new ResourceLocation("cmi", "electrolyzer")) // 指向第 5 节注册的配方类型
            .recipeDampingValue(2)
            .consumeInputsAfterWorking(false)
            .alwaysSearchRecipe(false)
            .build();

    return MBDMachineDefinition.builder()
            .id(id)
            .rootState(base)
            .blockProperties(block)
            .itemProperties(item)
            .machineSettings(() -> settings)   // 工厂 = Supplier<ConfigMachineSettings>, 每次机器实例化时调用
            .recipeLogicSettings(logic)
            .partSettings(() -> ConfigPartSettings.builder().enable(false).build())
            .build();
}
```

### 2.3 部件机器 (输入/输出总线等)

部件与单方块机器同构, 区别只有 `partSettings.enable(true)`:

```java
private static MBDMachineDefinition createInputBus() {
    return MBDMachineDefinition.builder()
            .id(new ResourceLocation("cmi", "electrolyzer_input_bus"))
            .rootState(MachineState.builder().name("base")
                    .modelRenderer(new ResourceLocation("cmi", "block/machine/io/energy_input"))
                    .shape(Shapes.block()).build())
            .machineSettings(() -> ConfigMachineSettings.builder()
                    .hasUI(false)
                    .traitDefinitions(List.of(itemSlot("input", IO.IN, 1)))
                    .build())
            .recipeLogicSettings(ConfigRecipeLogicSettings.builder()
                    .enable(false)  // 部件通常不跑配方, 能力代理给多方块控制器
                    .recipeType(new ResourceLocation("mbd2", "dummy"))
                    .build())
            .partSettings(() -> ConfigPartSettings.builder()
                    .enable(true)                    // ← 部件开关
                    .canShare(true)
                    .proxyControllerCapabilities(List.of()) // 可代理给控制器的能力 (见 ConfigPartSettings$ProxyCapability)
                    .build())
            .build();
}
```

### 2.4 多方块机器完整示例

```java
import com.lowdragmc.mbd2.common.machine.definition.MultiblockMachineDefinition;
import com.lowdragmc.mbd2.api.pattern.*;
import com.lowdragmc.mbd2.api.pattern.util.RelativeDirection;

private static MultiblockMachineDefinition createReinforcedCokeOven() {
    var id = new ResourceLocation("cmi", "reinforced_coke_oven");

    MultiblockMachineDefinition def = MultiblockMachineDefinition.builder()
            .id(id)
            .rootState(MachineState.builder().name("base")
                    .modelRenderer(new ResourceLocation("cmi", "block/machine/reinforced_coke_oven/off"))
                    .shape(Shapes.block()).build())
            .blockProperties(ConfigBlockProperties.builder()
                    .destroyTime(4f).rotationState(RotationState.NONE).build())
            .itemProperties(ConfigItemProperties.builder().maxStackSize(64).build())
            .machineSettings(() -> ConfigMachineSettings.builder()
                    .hasUI(true)
                    .traitDefinitions(List.of(itemSlot("input", IO.IN, 1),
                                              itemSlot("output", IO.OUT, 1),
                                              fluidTank("creosote", IO.OUT, 16000)))
                    .build())
            .recipeLogicSettings(ConfigRecipeLogicSettings.builder()
                    .enable(true)
                    .recipeType(new ResourceLocation("cmi", "reinforced_coke_oven"))
                    .build())
            .multiblockSettings(() -> ConfigMultiblockSettings.builder()
                    .showUIOnlyFormed(true)         // 只在成型后可开 UI
                    .showUIWhenClickStructure(true) // 点击未成型结构时显示结构预览
                    .build())
            .build();

    // ---- 结构定义 (在 build() 之后挂到定义上) ----
    BlockPattern pattern = FactoryBlockPattern.start()
            // 默认轴向 (LEFT, UP, FRONT); 每层一个 aisle() 调用, 层序自底向上
            .aisle("SSS", "SSS", "SSS")
            .aisle("SAS", "SAS", "SAS")
            .aisle("SSS", "SSS", "SSS")
            .where('S', Predicates.blocks(Blocks.STONE_BRICKS))   // 外壳
            .where('A', Predicates.air())                         // 内部中空
            .build();
    def.blockPatternFactory(machine -> pattern);

    // ---- (可选) JEI/预览用的样例结构 ----
    // def.shapeInfoFactory(def0 -> new MultiblockShapeInfo[]{ ... BlockInfo[][][] ... });
    return def;
}
```

Pattern 谓词 (`Predicates`) 可用组合:
```java
Predicates.blocks(block...)          // 指定方块 (可带状态)
Predicates.states(blockState...)     // 指定方块状态
Predicates.fluids(fluid...)          // 流体
Predicates.air() / Predicates.any()  // 空气 / 任意
Predicates.controller(pred)          // 标记控制器槽位 (自动为控制方块)
Predicates.custom(statePred, preview) // 自定义匹配 + 预览
// TraceabilityPredicate 链式修饰:
pred.setMinLayerLimited(n).setMaxGlobalLimited(n).setIO(IO.IN)
    .setNBT(tag).setSlotName("name").disableRenderFormed().or(other)
```

### 2.5 配置类速查 (全部为 builder 风格, 不设的字段取默认)

| 类 | builder 方法 |
|---|---|
| `ConfigBlockProperties` | `destroyTime(f)` `explosionResistance(f)` `rotationState(RotationState)` `useAO(b)` `hasCollision(b)` `canOcclude(b)` `ignitedByLava(b)` `isAir(b)` `isSuffocating(b)` `emissive(b)` `friction(f)` `speedFactor(f)` `jumpFactor(f)` `transparent(b)` `forceSolid(b)` `replaceable(b)` `noParticleOnBreak(b)` `canBeWaterlogged(b)` `collisionShapeFullBlock(b)` `blockSound(...)` `renderTypes(...)` |
| `ConfigItemProperties` | `maxStackSize(i)` `isGui3d(b)` `useBlockLight(b)` `rarity(Rarity)` `itemTooltips(List<Component>)` `creativeTab(ToggleCreativeTab)` `renderer(ToggleRenderer)` |
| `ConfigMachineSettings` | `machineLevel(i)` `hasUI(b)` `dropMachineItem(b)` `signalConnection(SignalConnection)` `traitDefinition(TraitDefinition)` `traitDefinitions(Collection)` |
| `ConfigRecipeLogicSettings` | `enable(b)` `recipeType(ResourceLocation)` `recipeDampingValue(i)` `consumeInputsAfterWorking(b)` `alwaysSearchRecipe(b)` `alwaysModifyRecipe(b)` `recipeModifiers(RecipeModifiers)` |
| `ConfigPartSettings` | `enable(b)` `canShare(b)` `recipeModifiers(...)` `proxyControllerCapabilities(List)` |
| `ConfigMultiblockSettings` | `showUIOnlyFormed(b)` `showUIWhenClickStructure(b)` `catalyst(ToggleCatalyst)` |

### 2.6 状态机细节

```java
MachineState.builder()
    .name("base")                                   // 状态名, 逻辑引用用
    .modelRenderer(modelLocation)                   // JSON 方块模型渲染器
    .geckolibRenderer(model, texture, animation)    // GeckoLib 渲染器 (需 geckolib)
    .renderer(customIRenderer)                      // 任意 LDLib IRenderer
    .shape(VoxelShape)                              // 碰撞箱
    .lightLevel(int)                                // 0-15 发光
    .renderingBox(AABB)                             // 渲染边界盒
    .child(MachineState)                            // 子状态 (工作/等待 等层次)
    .build();

// 快捷: 生成带默认 working/waiting/suspend 状态的状态机
// StateMachine.createSingleDefault(() -> MachineState.builder(), renderer)
// StateMachine.createMultiblockDefault(...)
```
机器状态可随时切换: `MBDMachine.setState("working")` / `getState("working")`。

---

## 3. 机器特性 (TraitDefinition)

### 3.1 继承链与通用字段

```
TraitDefinition                     name, priority; createTrait(machine); allowMultiple()
└─ RecipeCapabilityTraitDefinition  recipeHandlerIO, isDistinct, slotNames
   └─ SimpleCapabilityTraitDefinition  capabilityIO, guiIO   (物品/流体/能量等容器 trait)
```

通用 setter: `setName(String)` `setPriority(int)` `setRecipeHandlerIO(IO)` `setGuiIO(IO)` `setDistinct(boolean)` `setSlotNames(String[])`。
`CapabilityIO` (getCapabilityIO() 返回实例后逐个 set): `setInternal / setFrontIO / setBackIO / setLeftIO / setRightIO / setTopIO / setBottomIO(IO)`。
`IO` 枚举: `com.lowdragmc.mbd2.api.capability.recipe.IO` 的 `NONE / IN / OUT / BOTH`。

### 3.2 内置 trait 与 NBT `_type` 对应

| NBT `_type` | Java 类 | 独有 setter |
|---|---|---|
| `item_slot` | `ItemSlotCapabilityTraitDefinition` | `setSlotSize(i)` `setSlotLimit(i)` + 过滤 `getItemFilterSettings()` (setEnable/setWhitelist/setMatchNBT/setFilterItems/setFilterTags) + 自动搬运 `getAutoInput()/getAutoOutput()` (AutoWorldIO: setEnable/setRange(AABB)/setInterval/setSpeed) + `getAutoIO()` (ToggleAutoIO) + `getItemRendererSettings()` |
| `fluid_tank` | `FluidTankCapabilityTraitDefinition` | `setTankSize(i)` `setCapacity(i)` `setAllowSameFluids(b)` + `getFluidFilterSettings()` (setFilterFluids/setFilterTags) + autoIO/autoInput/autoOutput + fancyRenderer |
| `forge_energy_storage` | `ForgeEnergyCapabilityTraitDefinition` | `setCapacity(i)` `setMaxReceive(i)` `setMaxExtract(i)` + autoIO |
| `gas` / `infuse` / `pigment` / `slurry` | `ChemicalTankCapabilityTraitDefinition.Gas/Infuse/Pigment/Slurry` (需 Mekanism, 用 `MBD2.isMekanismLoaded()` 守卫) | `setTankSize(i)` `setCapacity(l)` + 过滤/自动搬运 |

其他集成 trait (按需守卫加载): `EntityHandlerTraitDefinition` (实体输入/输出),
`MEInterfaceTraitDefinition` (AE2), `BotaniaManaCapabilityTraitDefinition`,
`PNCPressureAirHandlerTraitDefinition`, `PNCHeatExchangerTraitDefinition`,
`MekHeatCapabilityTraitDefinition`, `GTMEnergyCapabilityTraitDefinition`,
`EmbersEmberCapabilityTraitDefinition`, `AuraHandlerTraitDefinition`。

### 3.3 完整 trait 工厂示例

```java
private static TraitDefinition itemSlot(String name, IO recipeIO, int size) {
    ItemSlotCapabilityTraitDefinition t = new ItemSlotCapabilityTraitDefinition();
    t.setName(name);
    t.setPriority(0);
    t.setRecipeHandlerIO(recipeIO);   // 配方视角: IN=配方输入槽, OUT=配方输出槽
    t.setGuiIO(recipeIO);             // GUI 中槽位归属
    t.setSlotSize(size);
    t.setSlotLimit(64);
    t.getCapabilityIO().setInternal(IO.BOTH);
    t.getCapabilityIO().setFrontIO(recipeIO);   // 其余五个面同理
    t.getAutoInput().setEnable(false);          // 世界级自动搬运
    t.getAutoOutput().setEnable(false);
    return t;
}
```

### 3.4 自定义 trait 类型

```java
@SubscribeEvent
public static void registerTraitTypes(MBDRegistryEvent.TraitType event) {
    event.register(MyCustomTraitDefinition.class);   // 继承 TraitDefinition 并实现 createTrait
}
```

---

## 4. 配方类型

```java
@SubscribeEvent
public static void registerRecipeTypes(MBDRegistryEvent.MBDRecipeType event) {
    // 方式 A: 从 NBT (.rt) 加载 (含编辑器做好的 JEI/燃料 UI 布局)
    event.registerFromResource(MB2Registration.class, "cmi/mbd2/recipe_type/electrolyzer.rt");
    event.registerFromFile(new File("config/mbd2_recipe_types/foo.rt"));

    // 方式 B: 纯代码
    var rl = new ResourceLocation("cmi", "coke_oven");
    MBDRecipeType type = new MBDRecipeType(rl);      // 可选代理: new MBDRecipeType(rl, RecipeType.SMELTING)
    type.setXEIVisible(true);
    type.setRequireFuelForWorking(false);
    type.setIcon(new ResourceTexture("cmi:textures/gui/jei/coke_oven.png"));
    type.setFuelIcon(...);
    MBDRegistries.RECIPE_TYPES.register(rl, type);   // ← 与 KubeJS createRecipeType 同一注册表
}
```
`MBDRecipeType` 主 API: `setRecipeBuilder / getRecipeBuilder / setUiSize(Size) / setFuelUISize(Size) /
setProxyRecipeXEIVisible / getBuiltinRecipes / recipeBuilder(...) / searchRecipe(...) / searchFuelRecipe(...)`。

---

## 5. 配方

```java
// 5.1 内置配方 (直接进 MBDRecipeType.builtinRecipes, 无 json 文件)
type.recipeBuilder(new ResourceLocation("cmi", "electrolyze_water"))
        .duration(200)                       // tick
        .inputFluids(FluidStack.create(Fluids.WATER, 1000))
        .inputFE(120_000)                    // 每配方消耗 FE (需机器有 FE trait)
        .outputFluids(FluidStack.create(hydrogen, 1000), FluidStack.create(oxygen, 500))
        .addData("temp", 100)                // 自定义数据 (事件里可读)
        .saveAsBuiltinRecipe();

// 5.2 datagen 输出 json (注册到原版配方系统, 数据包可覆写)
type.recipeBuilder(rl)
        .duration(100)
        .inputItems(Ingredient.of(Items.IRON_INGOT))
        .outputItems(new ItemStack(Items.GOLD_INGOT))
        .save(consumer);                     // FinishedRecipe 写入 datagen

// 5.3 或直接 new builder
MBDRecipeBuilder.of(rl, type)
        .duration(100)
        .inputItems(Items.COBBLESTONE)
        .saveAsBuiltinRecipe();
```

`MBDRecipeBuilder` 方法速查:
输入/输出: `inputItems / outputItems / notConsumable / inputFluids / outputFluids /
inputFE(int) / outputFE(int) / inputMana / inputAura / inputEmber(double) / inputPNCPressure / inputPNCAir / inputPNCHeat / inputHeat /
inputEntities / outputEntities` (含 `*Durability` 损耗变体, 以及 `inputs(capability, Object...)` 通用形式)
控制: `duration(i)` `perTick(b)` `isFuel(b)` `isXEIHidden(b)` `priority(i)` `chance(f)` `tierChanceBoost(f)` `slotName(s)` `uiName(s)` `addData(k,v)`
条件: `dimension(rl)` `biome(rl)` `rain(min,max)` `thunder(min,max)` `posY(min,max)` `blastFurnaceTemp(i)` `explosivesAmount(i)` `solderMultiplier(i)` `fusionStartEU(l)` 等

---

## 6. 机器事件 (Java 订阅)

机器事件类是 `com.lowdragmc.mbd2.common.machine.definition.config.event.*` (如
`MachineTickEvent` `MachineOnRecipeWorkingEvent` `MachineStructureFormedEvent`)。
**注意**: 它们虽然是 Forge Event 类, 但**不 post 到 FORGE 总线** —— MB2 内部先走机器定义的
事件图 (编辑器里的 eventGraphs), 再转发给 KubeJS 事件组。因此 Java 订阅要走 KubeJS 的
`EventHandler.listenJava` (CMI Core 的 `CokeOvenWorking` 即此模式):

```java
import com.lowdragmc.mbd2.integration.kubejs.events.MBDServerEvents;
import com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents.MachineEventJS;
import com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeWorkingEvent;
import dev.latvian.mods.kubejs.script.ScriptType;

public static void init() {
    // 事件名常量全部在 MBDServerEvents 上
    MBDServerEvents.ON_RECIPE_WORKING.listenJava(ScriptType.SERVER, CmiMB2Events.class,
            e -> onRecipeWorking(((MachineEventJS<MachineOnRecipeWorkingEvent>) e).getEvent()));
}
private static void onRecipeWorking(MachineOnRecipeWorkingEvent e) {
    MBDMachine machine = e.getMachine();          // 触发机器
    if (machine.getRecipeType().getRegistryName().equals(new ResourceLocation("cmi", "reinforced_coke_oven"))) { ... }
}
```

`MBDServerEvents` 全部机器事件常量: `AFTER_RECIPE_WORKING / BEFORE_RECIPE_WORKING / DROPS /
NEIGHBOR_CHANGED / ON_LOAD / ON_RECIPE_WORKING / ON_RECIPE_WAITING / OPEN_UI / PLACED /
FUEL_RECIPE_MODIFY / FUEL_BURNING_FINISH / BEFORE_RECIPE_MODIFY / AFTER_RECIPE_MODIFY /
RECIPE_STATUS_CHANGED / REMOVED / RIGHT_CLICK / STATE_CHANGED / STRUCTURE_FORMED /
STRUCTURE_INVALID / TICK / USE_CATALYST / MACHINE_UI / MACHINE_ON_CONSUME_INPUTS_AFTER_WORKING /
MACHINE_ON_RECIPE_FINISH`。
事件对象通用入口: `getMachine()` → `MBDMachine` (getPos/getLevel/getFrontFacing/getState/
getRecipeType/getDefinition/机器存储等); 多数子类还有专属字段 (如 `MachineOnRecipeWorkingEvent`
的配方进度, `MachineRightClickEvent` 的 player/hand, `MachineStateChangedEvent` 的新旧状态)。

---

## 7. 自定义扩展点

```java
// 自定义机器定义类型 (对应新的 .sm 类型)
@SubscribeEvent public static void machineDefTypes(MBDRegistryEvent.MachineDefinitionType e) {
    e.register(MyMachineDefinition.class, MyMachineDefinition::createDefault);
}
// 自定义配方能力 (如法力/热量等, 供 trait 与配方 content 使用)
@SubscribeEvent public static void recipeCaps(MBDRegistryEvent.RecipeCapability e) { ... }
// 自定义配方条件 (生物群系/维度等)
@SubscribeEvent public static void recipeConditions(MBDRegistryEvent.RecipeCondition e) { ... }
```

---

## 8. 与 KubeJS / 磁盘 NBT 共存 (混合注册)

- 三条来源写入**同一个** `MBDRegistries.MACHINE_DEFINITIONS` / `RECIPE_TYPES`, 顺序:
  Java 事件 → `ldlib/assets/mbd2` 磁盘文件 → KubeJS 脚本。
- `MBDRegistry.register` 对同 id **直接覆盖** (后来者胜)。迁移一台机器时,
  先删 `ldlib/assets/mbd2` 里的旧 .sm/.mb 再改 Java 注册, 避免被磁盘文件盖回来。
- 配方类型同理, 同 id 后注册覆盖; 机器引用配方类型只认 id, 三种来源的配方类型可以互相引用。
- 机器事件无论机器来自哪种注册方式, 都会进同一事件管线 (事件图 → KubeJS), Java 侧用
  第 6 节的 `listenJava` 统一订阅。
- 分工建议: 结构/UI 复杂的机器用编辑器 NBT (registerFromResource 加载), 需要编译期
  保障与逻辑强绑定的机器用纯 Java Builder, 配方与轻量事件逻辑留给 KubeJS。

---

## 附录 A: 完整参考文件 (可整体复制到 CMI Core)

以下是一个可直接放入 `dev.celestiacraft.cmi.mbd2` 包的完整注册类, 涵盖本文所有章节的 API:

```java
package dev.celestiacraft.cmi.mbd2;

import com.lowdragmc.mbd2.api.block.RotationState;
import com.lowdragmc.mbd2.api.capability.recipe.IO;
import com.lowdragmc.mbd2.api.pattern.BlockPattern;
import com.lowdragmc.mbd2.api.pattern.FactoryBlockPattern;
import com.lowdragmc.mbd2.api.pattern.Predicates;
import com.lowdragmc.mbd2.api.recipe.MBDRecipeType;
import com.lowdragmc.mbd2.api.registry.MBDRegistries;
import com.lowdragmc.mbd2.common.event.MBDRegistryEvent;
import com.lowdragmc.mbd2.common.machine.definition.MBDMachineDefinition;
import com.lowdragmc.mbd2.common.machine.definition.MultiblockMachineDefinition;
import com.lowdragmc.mbd2.common.machine.definition.config.*;
import com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleCreativeTab;
import com.lowdragmc.mbd2.common.trait.TraitDefinition;
import com.lowdragmc.mbd2.common.trait.fluid.FluidTankCapabilityTraitDefinition;
import com.lowdragmc.mbd2.common.trait.forgeenergy.ForgeEnergyCapabilityTraitDefinition;
import com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTraitDefinition;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;

import java.util.List;

/**
 * MB2 Java 注册参考实现 (MB2 1.20.1-1.0.39)。
 *
 * 注册时机: MB2 在 FMLCommonSetupEvent.enqueueWork 中依次执行
 *   unfreeze -> post MBDRegistryEvent.Machine -> 扫描 ldlib/assets/mbd2/*.sm|*.mb
 *   -> KubeJS MBDRegistryEvents.machine -> freeze
 * 因此这里用 mod bus 静态订阅即可, 与磁盘 NBT / KubeJS 注册完全共存。
 */
@Mod.EventBusSubscriber(modid = "cmi", bus = Mod.EventBusSubscriber.Bus.MOD)
public final class MB2MachineRegistration {

    private MB2MachineRegistration() {
    }

    // =======================================================================
    // 方式一: 把现有 ldlib/assets/mbd2 的 NBT 直接作为 mod 资源注册 (零行为变化)
    // 文件位置: src/main/resources/assets/cmi/mbd2/machine/electrolyzer/energy_input.sm ...
    // =======================================================================
    @SubscribeEvent
    public static void registerMachinesFromResources(MBDRegistryEvent.Machine event) {
        // 单方块 / 部件
        event.registerFromResource(MB2MachineRegistration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/energy_input.sm");
        event.registerFromResource(MB2MachineRegistration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/item_input.sm");
        event.registerFromResource(MB2MachineRegistration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/fluid_input.sm");
        event.registerFromResource(MB2MachineRegistration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/gas_input.sm");
        event.registerFromResource(MB2MachineRegistration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/item_output.sm");
        event.registerFromResource(MB2MachineRegistration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/fluid_output.sm");
        event.registerFromResource(MB2MachineRegistration.class, "single_machine", "cmi/mbd2/machine/electrolyzer/gas_output.sm");

        // 多方块
        event.registerFromResource(MB2MachineRegistration.class, "multiblock", "cmi/mbd2/multiblock/electrolyzer.mb");
        event.registerFromResource(MB2MachineRegistration.class, "multiblock", "cmi/mbd2/multiblock/reinforced_coke_oven.mb");
    }

    @SubscribeEvent
    public static void registerRecipeTypesFromResources(MBDRegistryEvent.MBDRecipeType event) {
        event.registerFromResource(MB2MachineRegistration.class, "cmi/mbd2/recipe_type/electrolyzer.rt");
        event.registerFromResource(MB2MachineRegistration.class, "cmi/mbd2/recipe_type/reinforced_coke_oven.rt");
    }

    // =======================================================================
    // 方式二: 纯 Java Builder 注册 (新机器推荐)
    // =======================================================================
    @SubscribeEvent
    public static void registerMachinesFromCode(MBDRegistryEvent.Machine event) {
        event.register(createTestMachine());
        event.register(createTestMultiblock());
    }

    /** 单方块示例: 一台带 物品输入/物品输出/流体输入/FE 输入 的机器 */
    private static MBDMachineDefinition createTestMachine() {
        var id = new ResourceLocation("cmi", "test_machine");
        var renderer = new ResourceLocation("cmi", "block/machine/test_machine/off");

        MachineState rootState = MachineState.builder()
                .name("base")
                .modelRenderer(renderer)                       // 等价 NBT renderer._type = "json_model"
                .shape(Shapes.block())                         // 整方块碰撞箱
                .build();

        ConfigBlockProperties blockProps = ConfigBlockProperties.builder()
                .destroyTime(3f)
                .explosionResistance(6f)
                .rotationState(RotationState.NON_Y_AXIS)       // 横置机器
                .build();

        ConfigItemProperties itemProps = ConfigItemProperties.builder()
                .maxStackSize(64)
                .creativeTab(new ToggleCreativeTab(new ResourceLocation("cmi", "machines")))
                .build();

        ConfigRecipeLogicSettings logic = ConfigRecipeLogicSettings.builder()
                .enable(true)
                .recipeType(new ResourceLocation("cmi", "test_recipe_type"))
                .build();

        // ---- 机器特性 (traitDefinitions), 对应 NBT machineSettings.traitDefinitions ----
        ConfigMachineSettings settings = ConfigMachineSettings.builder()
                .machineLevel(1)
                .hasUI(true)
                .dropMachineItem(true)
                .traitDefinitions(List.of(
                        itemSlot("input_item", IO.IN, 1),
                        itemSlot("output_item", IO.OUT, 1),
                        fluidTank("input_fluid", IO.IN, 16000),
                        energyStorage("input_energy", 1_000_000, 100_000)
                ))
                .build();

        return MBDMachineDefinition.builder()
                .id(id)
                .rootState(rootState)
                .blockProperties(blockProps)
                .itemProperties(itemProps)
                .machineSettings(() -> settings)
                .recipeLogicSettings(logic)
                .partSettings(() -> ConfigPartSettings.builder().enable(false).build()) // 部件机器才 enable(true)
                .build();
    }

    /** 多方块示例: 3x3x3 钢壳 + 中空, 外壳可替换为输入/输出总线方块 */
    private static MultiblockMachineDefinition createTestMultiblock() {
        var id = new ResourceLocation("cmi", "test_multiblock");

        MachineState rootState = MachineState.builder()
                .name("base")
                .modelRenderer(new ResourceLocation("cmi", "block/machine/test_multiblock/off"))
                .shape(Shapes.block())
                .build();

        ConfigMachineSettings settings = ConfigMachineSettings.builder()
                .hasUI(true)
                .traitDefinitions(List.of(itemSlot("input_item", IO.IN, 1), itemSlot("output_item", IO.OUT, 1)))
                .build();

        MultiblockMachineDefinition def = MultiblockMachineDefinition.builder()
                .id(id)
                .rootState(rootState)
                .blockProperties(ConfigBlockProperties.builder().destroyTime(5f).rotationState(RotationState.NONE).build())
                .itemProperties(ConfigItemProperties.builder().maxStackSize(64).build())
                .machineSettings(() -> settings)
                .recipeLogicSettings(ConfigRecipeLogicSettings.builder()
                        .enable(true)
                        .recipeType(new ResourceLocation("cmi", "test_recipe_type"))
                        .build())
                .multiblockSettings(() -> ConfigMultiblockSettings.builder()
                        .showUIOnlyFormed(true)
                        .build())
                .build();

        // 结构: 每层一个 aisle() 调用 (默认轴向 LEFT/UP/FRONT), 控制器槽在中心
        BlockPattern pattern = FactoryBlockPattern.start()
                .aisle("CCC", "CCC", "CCC")
                .aisle("CAC", "CAC", "CAC")
                .aisle("CCC", "CCC", "CCC")
                .where('C', Predicates.blocks(Blocks.IRON_BLOCK))  // 外壳
                .where('A', Predicates.air())                       // 内部中空
                .build();
        def.blockPatternFactory(machine -> pattern);
        return def;
    }

    // =======================================================================
    // 方式三 (共存): 纯 Java 注册配方类型 + 内置配方; KubeJS 同样可继续注册
    // =======================================================================
    @SubscribeEvent
    public static void registerRecipeTypesFromCode(MBDRegistryEvent.MBDRecipeType event) {
        var rl = new ResourceLocation("cmi", "test_recipe_type");
        MBDRecipeType type = new MBDRecipeType(rl);
        type.setXEIVisible(true);
        MBDRegistries.RECIPE_TYPES.register(rl, type);   // 与 KubeJS createRecipeType 的字节码一致

        // 内置配方 (saveAsBuiltinRecipe 直接进类型的内置配方表)
        type.recipeBuilder(new ResourceLocation("cmi", "test_smelt"))
                .duration(100)
                .inputItems(Items.IRON_INGOT)
                .outputItems(new ItemStack(Items.GOLD_INGOT))
                .saveAsBuiltinRecipe();
    }

    // =======================================================================
    // Trait 工厂 (等价 NBT traitDefinitions 里的 _type: item_slot / fluid_tank / forge_energy_storage)
    // =======================================================================
    private static TraitDefinition itemSlot(String name, IO recipeIO, int size) {
        ItemSlotCapabilityTraitDefinition slot = new ItemSlotCapabilityTraitDefinition();
        slot.setName(name);
        slot.setPriority(0);
        slot.setRecipeHandlerIO(recipeIO);
        slot.setGuiIO(recipeIO);
        slot.setSlotSize(size);
        slot.setSlotLimit(64);
        slot.getCapabilityIO().setInternal(IO.BOTH);      // 六个面 + 内部
        slot.getCapabilityIO().setFrontIO(recipeIO);
        slot.getCapabilityIO().setBackIO(recipeIO);
        slot.getCapabilityIO().setLeftIO(recipeIO);
        slot.getCapabilityIO().setRightIO(recipeIO);
        slot.getCapabilityIO().setTopIO(recipeIO);
        slot.getCapabilityIO().setBottomIO(recipeIO);
        slot.getAutoInput().setEnable(false);              // AutoWorldIO: setRange/setInterval/setSpeed
        slot.getAutoOutput().setEnable(false);
        return slot;
    }

    private static TraitDefinition fluidTank(String name, IO recipeIO, int capacity) {
        FluidTankCapabilityTraitDefinition tank = new FluidTankCapabilityTraitDefinition();
        tank.setName(name);
        tank.setPriority(1);
        tank.setRecipeHandlerIO(recipeIO);
        tank.setGuiIO(recipeIO);
        tank.setTankSize(1);
        tank.setCapacity(capacity);
        tank.getCapabilityIO().setInternal(IO.BOTH);
        tank.getCapabilityIO().setFrontIO(recipeIO);
        tank.getCapabilityIO().setBackIO(recipeIO);
        tank.getCapabilityIO().setLeftIO(recipeIO);
        tank.getCapabilityIO().setRightIO(recipeIO);
        tank.getCapabilityIO().setTopIO(recipeIO);
        tank.getCapabilityIO().setBottomIO(recipeIO);
        return tank;
    }

    private static TraitDefinition energyStorage(String name, int capacity, int maxTransfer) {
        ForgeEnergyCapabilityTraitDefinition energy = new ForgeEnergyCapabilityTraitDefinition();
        energy.setName(name);
        energy.setPriority(2);
        energy.setRecipeHandlerIO(IO.IN);
        energy.setGuiIO(IO.IN);
        energy.setCapacity(capacity);
        energy.setMaxReceive(maxTransfer);
        energy.setMaxExtract(maxTransfer);
        energy.getCapabilityIO().setInternal(IO.IN);
        energy.getCapabilityIO().setFrontIO(IO.IN);
        energy.getCapabilityIO().setBackIO(IO.IN);
        energy.getCapabilityIO().setLeftIO(IO.IN);
        energy.getCapabilityIO().setRightIO(IO.IN);
        energy.getCapabilityIO().setTopIO(IO.IN);
        energy.getCapabilityIO().setBottomIO(IO.IN);
        return energy;
    }
}
```

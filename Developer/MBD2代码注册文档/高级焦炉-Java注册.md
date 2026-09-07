# 高级焦炉 (reinforced_coke_oven) — Java 注册
> 本文件按 `ldlib/assets/mbd2` 中高级焦炉的真实 NBT 定义逐字段还原, 与现有机器行为一致。
> 依赖 MB2 1.20.1-1.0.39; 多方块主体 + 配方类型用纯代码, 两个总线部件保留 NBT 注册 (原因见第 4 节)。

## 0. 从 NBT 还原的关键参数 (核对用)

| 项 | 值 |
|---|---|
| id | `cmi:reinforced_coke_oven` |
| 结构 | 5x5x5 (`layer_axis=Y`, 字符 0-6) |
| 谓词 | 0=scorched_bricks 外壳 / 1=any / 2=input_bus|output_bus|seared_bricks / 3=seared_bricks 内衬 / 4=scorched_bricks_slab 顶板 / 5=ad_astra:vent 烟囱 / 6=控制器槽 |
| 状态树 | base(off,0) → formed → working(on,15,blastfurnace音效) → waiting(off,0); formed → suspend |
| 配方类型 | `cmi:reinforced_coke_oven`, 代理 `immersiveengineering:coke_oven` |
| 配方修饰 | 时长 x0.5, 最大并行 x4 (maxParallel 有 API 缺口, 见第 4 节) |
| 特性 | item 输入槽 x1 (全方向 IN) / item 输出槽 x1 (全方向 OUT) / 流体输出槽 x1 (32000 mB, 全方向 OUT) |
| 部件 | input_bus / output_bus: `common_input`/`common_output` 模型, partSettings.enable, trait 名过滤代理 |
| 方块属性 | destroyTime=3, explosionResistance=6, rotationState=NON_Y_AXIS, cutout 渲染 |
| 物品 | maxStackSize=64, creativeTab=`cmi:machines`, isGui3d |
| 多方块设置 | showUIOnlyFormed=1, showUIWhenClickStructure=1 |

---

## 1. 配方类型 (代理 IE 焦炉, 无需自建配方即可用全部 IE 焦炉配方)

```java
@SubscribeEvent
public static void registerRecipeTypes(MBDRegistryEvent.MBDRecipeType event) {
    var rl = new ResourceLocation("cmi", "reinforced_coke_oven");

    // 代理 IE 焦炉配方类型: 运行时查表, 避免编译期依赖 IE
    RecipeType<?> ieCokeOven = ForgeRegistries.RECIPE_TYPES.getValue(
            new ResourceLocation("immersiveengineering", "coke_oven"));

    MBDRecipeType type = new MBDRecipeType(rl, ieCokeOven);
    type.setXEIVisible(true);
    type.setProxyRecipeXEIVisible(true);          // NBT: isProxyRecipeXEIVisible=1
    type.setRequireFuelForWorking(false);         // NBT: requireFuelForWorking=0
    type.setIcon(new ResourceTexture("cmi:textures/gui/jei/reinforced_coke_oven/fillbararea.png"));
    // 燃料 UI/进度条等精细布局来自编辑器 NBT, 纯代码只有基础 UI

    MBDRegistries.RECIPE_TYPES.register(rl, type);
}
```

---

## 2. 多方块主体 (纯代码, 含完整 5x5x5 结构与状态机)

```java
import com.lowdragmc.mbd2.api.block.RotationState;
import com.lowdragmc.mbd2.api.capability.recipe.IO;
import com.lowdragmc.mbd2.api.pattern.*;
import com.lowdragmc.mbd2.common.event.MBDRegistryEvent;
import com.lowdragmc.mbd2.common.machine.definition.MultiblockMachineDefinition;
import com.lowdragmc.mbd2.common.machine.definition.config.*;
import com.lowdragmc.mbd2.common.machine.definition.config.toggle.ToggleCreativeTab;
import com.lowdragmc.mbd2.common.trait.TraitDefinition;
import com.lowdragmc.mbd2.common.trait.fluid.FluidTankCapabilityTraitDefinition;
import com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTraitDefinition;
import com.lowdragmc.lowdraglib.gui.texture.ResourceTexture;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.crafting.RecipeType;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.phys.shapes.Shapes;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.registries.ForgeRegistries;

import java.util.List;

@Mod.EventBusSubscriber(modid = "cmi", bus = Mod.EventBusSubscriber.Bus.MOD)
public final class ReinforcedCokeOvenRegistration {

    @SubscribeEvent
    public static void registerMachines(MBDRegistryEvent.Machine event) {
        event.register(createReinforcedCokeOven());

        // 两个总线部件: 保留 NBT 注册 (ldlib/assets/mbd2/machine/reinforced_coke_oven/*.sm 会自动加载),
        // 或把 .sm 拷贝进 resources 后用这两行 (原因见第 4 节):
        // event.registerFromResource(ReinforcedCokeOvenRegistration.class, "single_machine",
        //         "cmi/mbd2/machine/reinforced_coke_oven/input.sm");
        // event.registerFromResource(ReinforcedCokeOvenRegistration.class, "single_machine",
        //         "cmi/mbd2/machine/reinforced_coke_oven/output.sm");
    }

    public static MultiblockMachineDefinition createReinforcedCokeOven() {
        var id = new ResourceLocation("cmi", "reinforced_coke_oven");

        // ---------- 状态机 (与 NBT 状态树一致) ----------
        MachineState waiting = MachineState.builder()
                .name("waiting")
                .modelRenderer(new ResourceLocation("cmi", "block/machine/reinforced_coke_oven/off"))
                .shape(Shapes.block()).lightLevel(0)
                .build();

        MachineState suspend = MachineState.builder()
                .name("suspend")
                .shape(Shapes.block())   // 无渲染器 -> 继承父状态 (off 模型)
                .build();

        MachineState working = MachineState.builder()
                .name("working")
                .modelRenderer(new ResourceLocation("cmi", "block/machine/reinforced_coke_oven/on"))
                .shape(Shapes.block()).lightLevel(15)
                .children(List.of(waiting))
                .build();
        working.machineSound().setEnable(true);
        working.machineSound().setSound(new ResourceLocation("minecraft", "block.blastfurnace.fire_crackle"));
        working.machineSound().setLoop(true);
        working.machineSound().setDelay(0);
        working.machineSound().setVolume(1f);

        MachineState formed = MachineState.builder()
                .name("formed")
                .shape(Shapes.block())
                .children(List.of(working, suspend))
                .build();

        MachineState base = MachineState.builder()
                .name("base")
                .modelRenderer(new ResourceLocation("cmi", "block/machine/reinforced_coke_oven/off"))
                .shape(Shapes.block()).lightLevel(0)
                .children(List.of(formed))
                .build();

        // ---------- 方块/物品属性 (与 NBT 一致) ----------
        ConfigBlockProperties blockProps = ConfigBlockProperties.builder()
                .destroyTime(3f)
                .explosionResistance(6f)
                .rotationState(RotationState.NON_Y_AXIS)
                .hasCollision(true)
                .useAO(true)
                .build();

        ConfigItemProperties itemProps = ConfigItemProperties.builder()
                .maxStackSize(64)
                .isGui3d(true)
                .useBlockLight(true)
                .creativeTab(new ToggleCreativeTab(new ResourceLocation("cmi", "machines")))
                .build();

        // ---------- 机器设置: 三个特性 ----------
        ConfigMachineSettings settings = ConfigMachineSettings.builder()
                .hasUI(true)
                .dropMachineItem(true)
                .traitDefinitions(List.of(
                        itemSlot("reinforced_coke_oven_input_item_slot", IO.IN, IO.IN),
                        itemSlot("reinforced_coke_oven_output_item_slot", IO.OUT, IO.OUT),
                        fluidTankOut()))
                .build();

        // ---------- 配方逻辑: 0.5x 时长 + 4x 并行 ----------
        var modifiers = new RecipeModifier.RecipeModifiers();
        var mod = new RecipeModifier();
        mod.durationModifier.setMultiplier(0.5);     // NBT: durationModifier multiplier=0.5
        // 注意: maxParallel=4 在 1.0.39 无公开 setter (private 字段), 见第 4 节兜底
        modifiers.recipeModifiers.add(mod);

        ConfigRecipeLogicSettings logic = ConfigRecipeLogicSettings.builder()
                .enable(true)
                .recipeType(new ResourceLocation("cmi", "reinforced_coke_oven"))
                .recipeDampingValue(2)                 // NBT: recipeDampingValue=2
                .consumeInputsAfterWorking(true)       // NBT: consumeInputsAfterWorking=1
                .alwaysSearchRecipe(false)
                .recipeModifiers(modifiers)
                .build();

        // ---------- 多方块设置 ----------
        ConfigMultiblockSettings mbSettings = ConfigMultiblockSettings.builder()
                .showUIOnlyFormed(true)                // NBT: showUIOnlyFormed=1
                .showUIWhenClickStructure(true)        // NBT: showUIWhenClickStructure=1
                .build();

        MultiblockMachineDefinition def = MultiblockMachineDefinition.builder()
                .id(id)
                .rootState(base)
                .blockProperties(blockProps)
                .itemProperties(itemProps)
                .machineSettings(() -> settings)
                .recipeLogicSettings(logic)
                .multiblockSettings(() -> mbSettings)
                .build();

        // ---------- 5x5x5 结构 (字符与 NBT pattern 一致) ----------
        BlockPattern pattern = createPattern();
        def.blockPatternFactory(machine -> pattern);
        return def;
    }

    private static BlockPattern createPattern() {
        Block scorched   = block("tconstruct:scorched_bricks");
        Block seared     = block("tconstruct:seared_bricks");
        Block slab       = block("tconstruct:scorched_bricks_slab");
        Block vent       = block("ad_astra:vent");
        Block inputBus   = block("cmi:reinforced_coke_oven_input_bus");
        Block outputBus  = block("cmi:reinforced_coke_oven_output_bus");

        // 每层一个 aisle() 调用 (y=0 底 → y=4 顶), 层内每行 = z, 行内字符 = x
        return FactoryBlockPattern.start()
                .aisle("00000", "12221", "10001", "13331", "14441")   // y=0: 总线槽层
                .aisle("00000", "31112", "05550", "31113", "44444")   // y=1: 烟囱层
                .aisle("00000", "61112", "05550", "31113", "44444")   // y=2: 控制器层
                .aisle("00000", "31112", "05550", "31113", "44444")   // y=3: 烟囱层
                .aisle("00000", "12221", "10001", "13331", "14441")   // y=4: 顶板层
                .where('0', Predicates.blocks(scorched))               // 外壳
                .where('1', Predicates.any())
                .where('2', Predicates.blocks(inputBus)
                        .or(Predicates.blocks(outputBus))
                        .or(Predicates.blocks(seared)))                // IO 槽 (可被内衬替代)
                .where('3', Predicates.blocks(seared))                 // 内衬
                .where('4', Predicates.blocks(slab))                   // 顶板
                .where('5', Predicates.blocks(vent))                   // 烟囱
                .where('6', Predicates.controller(Predicates.any()))   // 控制器槽
                .build();
    }

    private static Block block(String id) {
        return ForgeRegistries.BLOCKS.getValue(new ResourceLocation(id));
    }

    // ---------- 特性工厂 ----------
    private static TraitDefinition itemSlot(String name, IO recipeIO, IO sideIO) {
        ItemSlotCapabilityTraitDefinition t = new ItemSlotCapabilityTraitDefinition();
        t.setName(name);
        t.setPriority(0);
        t.setRecipeHandlerIO(recipeIO);
        t.setGuiIO(recipeIO);
        t.setSlotSize(1);
        t.setSlotLimit(64);
        t.getCapabilityIO().setInternal(sideIO);
        t.getCapabilityIO().setFrontIO(sideIO);
        t.getCapabilityIO().setBackIO(sideIO);
        t.getCapabilityIO().setLeftIO(sideIO);
        t.getCapabilityIO().setRightIO(sideIO);
        t.getCapabilityIO().setTopIO(sideIO);
        t.getCapabilityIO().setBottomIO(sideIO);
        t.getAutoInput().setEnable(false);
        t.getAutoOutput().setEnable(false);
        return t;
    }

    private static TraitDefinition fluidTankOut() {
        FluidTankCapabilityTraitDefinition t = new FluidTankCapabilityTraitDefinition();
        t.setName("reinforced_coke_oven_output_fluid_tank");
        t.setPriority(0);
        t.setRecipeHandlerIO(IO.OUT);
        t.setGuiIO(IO.OUT);
        t.setTankSize(1);
        t.setCapacity(32000);                    // NBT: capacity=32000
        t.setAllowSameFluids(true);
        t.getCapabilityIO().setInternal(IO.OUT);
        t.getCapabilityIO().setFrontIO(IO.OUT);
        t.getCapabilityIO().setBackIO(IO.OUT);
        t.getCapabilityIO().setLeftIO(IO.OUT);
        t.getCapabilityIO().setRightIO(IO.OUT);
        t.getCapabilityIO().setTopIO(IO.OUT);
        t.getCapabilityIO().setBottomIO(IO.OUT);
        t.getAutoInput().setEnable(false);
        t.getAutoOutput().setEnable(false);
        return t;
    }
}
```

---

## 3. 机器事件 (Java 订阅, CMI Core 已有同类实践)

```java
// 高级焦炉工作时的冒烟逻辑已存在于 CMI Core: dev.celestiacraft.cmi.event.mbd2.CokeOvenWorking
// 注册方式 (KubeJS EventHandler.listenJava, 机器事件不 post 到 FORGE 总线):
import com.lowdragmc.mbd2.integration.kubejs.events.MBDServerEvents;
import com.lowdragmc.mbd2.integration.kubejs.events.MBDMachineEvents.MachineEventJS;
import com.lowdragmc.mbd2.common.machine.definition.config.event.MachineOnRecipeWorkingEvent;
import dev.latvian.mods.kubejs.script.ScriptType;

public static void init() {
    MBDServerEvents.ON_RECIPE_WORKING.listenJava(ScriptType.SERVER, ReinforcedCokeOvenRegistration.class,
            e -> CokeOvenWorking.onCokeOvenWorking(((MachineEventJS<MachineOnRecipeWorkingEvent>) e).getEvent()));
}
```

如需内置配方 (默认走 IE 代理则不需要):

```java
// 注册在 registerRecipeTypes 里, 拿 type 后:
type.recipeBuilder(new ResourceLocation("cmi", "coal_to_coke"))
        .duration(3600)
        .inputItems(Items.COAL)
        .outputItems(new ItemStack(Items.COAL_BLOCK, 2))
        .saveAsBuiltinRecipe();
```

---

## 4. 纯代码 API 缺口与 NBT 兜底 (1.0.39)

| 缺口 | 说明 | 兜底 |
|---|---|---|
| `RecipeModifier.maxParallel` (4x 并行) | private 字段无 setter, 纯代码只能是默认 1x | 整机走 NBT 注册 (见下) 或反射 setAccessible |
| `ConfigPartSettings$ProxyCapability.traitNameFilter` | 无 setter, 总线无法声明代理哪个控制器 trait | 总线部件保持 .sm NBT 注册 (MB2 自动扫描 ldlib/assets/mbd2/machine/reinforced_coke_oven/*.sm) |
| 编辑器 UI 布局 / 燃料 UI | WidgetGroup 布局只存在于 NBT | 配方类型 UI 走 .rt NBT |

**需要 100% 还原时的一行兜底** (把 .mb/.sm/.rt 拷进 resources/assets/cmi/mbd2/ 后):

```java
event.registerFromResource(ReinforcedCokeOvenRegistration.class, "multiblock",
        "cmi/mbd2/multiblock/reinforced_coke_oven.mb");
```
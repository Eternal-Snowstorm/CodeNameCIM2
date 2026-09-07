# MB2 KubeJS 注册完整文档
> 适用: Minecraft 1.20.1 / Forge / Multiblocked2 1.20.1-1.0.39 / KubeJS 6
> 本文所有事件名与方法名均经 jar 字节码与 kubejs/probe 生成的 .d.ts 验证。
> MB2 的 KubeJS 集成是"裸反射"暴露 Java 类 (MBDKubeJSPlugin 只对配方 Ingredient 做了包装),
> 所以 JS 侧 API = Java API 的同名方法; 本文给出 JS 语法的完整对照。

---

## 1. 事件总览与注册时序

| 事件 (startup) | 用途 |
|---|---|
| `MBDRegistryEvents.machine(handler)` | 注册/删除机器定义 (单方块与多方块) |
| `MBDRegistryEvents.recipeType(handler)` | 注册/删除配方类型 |

| 事件 (server) | 用途 |
|---|---|
| `MBDMachineEvents.*` | 机器运行时事件 (tick/工作/成型/右键等, 见第 5 节) |

| 事件 (client) | 用途 |
|---|---|
| `MBDMachineEvents.onClientTick / onCustomDataUpdate / onCustomKeyframe` | 客户端机器事件 |
| `MBDMachineEvents.onRecipeUI / onFuelRecipeUI` | 客户端配方 UI 绘制事件 |

时序 (注册谁先谁后, 直接影响同名冲突):

```
FMLCommonSetup
 ├─ ① Java mod 订阅的 MBDRegistryEvent.Machine / MBDRecipeType
 ├─ ② 扫描 ldlib/assets/mbd2/{machine,multiblock,recipe_type} 磁盘 NBT
 ├─ ③ MBDRegistryEvents.machine / .recipeType   ← KubeJS (本文)
 └─ 注册表冻结
```

KubeJS 是**最后**注册的, 同 id 会覆盖前两者 (详见第 8 节)。

---

## 2. 注册机器

### 2.1 入口

```js
MBDRegistryEvents.machine(event => {
    const builder = event.create(类型, "命名空间:机器id")
    // ... 配置 builder ...
    // 无需手动 build: 事件结束后 MB2 自动 build 并注册
})

// 其他事件方法:
event.getMachine("命名空间:id")     // 获取已注册定义 (前两阶段注册的也能拿到)
event.removeMachine("命名空间:id")  // 删除定义
```

**类型参数可用值** (KubeJS 专用命名, 与 Java 侧的 `single_machine`/`multiblock` 不同!):

| KubeJS 类型 | 含义 | 对应 Java 定义类 |
|---|---|---|
| `single` | 单方块机器/部件 | `MBDMachineDefinition` |
| `multiblock` | 多方块机器 | `MultiblockMachineDefinition` |
| `kinetic` | 动力机器 (仅 Create 加载时) | `CreateKineticMachineDefinition` |

类型不存在时 `create` 直接抛 `IllegalArgumentException`。

### 2.2 Builder 方法清单 (与 Java Builder 同名)

| 方法 | 参数 | 说明 |
|---|---|---|
| `.id(rl)` | 字符串 | create 时已自动设置 |
| `.rootState(state)` | MachineState 对象 | 根状态 (见 2.4) |
| `.blockProperties(props)` | ConfigBlockProperties 对象 | 方块属性 |
| `.itemProperties(props)` | ConfigItemProperties 对象 | 物品属性 |
| `.machineSettings(factory)` | **无参工厂函数** | 机器设置+特性 (见 2.5, 这是最大的坑) |
| `.recipeLogicSettings(logic)` | ConfigRecipeLogicSettings 对象 | 配方逻辑 |
| `.partSettings(factory)` | 无参工厂函数 | 部件设置 (同上) |
| `.multiblockSettings(factory)` | 无参工厂函数 | 仅多方块 builder 有 |
| `.build()` | - | 构建定义 (事件自动调用) |

### 2.3 ⚠️ 签名陷阱: Builder 参数分两类, 都不是带参回调 (为什么你的参数是 any)

MB2 没有为机器 Builder 做 KubeJS 包装, JS 拿到的是原生 Java Builder。它的参数分两类,
**两类都不接受带参回调**, 所以任何 `(xxx) => {...}` 的写法里 `xxx` 都会显示 any:

**第一类: 直接传对象** (rootState / blockProperties / itemProperties / recipeLogicSettings)

probejs 实际声明:

```ts
rootState(arg0: MachineState_): Builder
blockProperties(arg0: ConfigBlockProperties_): Builder
itemProperties(arg0: ConfigItemProperties_): Builder
recipeLogicSettings(arg0: ConfigRecipeLogicSettings_): Builder
```

- 期望类型是**对象**, 不是函数。你写 `.rootState((state) => {...})` 时,
  `state` 没有类型来源 → **any**; 运行时函数不是 MachineState, 直接类型错误。
- 正确写法: 先构造对象再传入 ——
  `.rootState($MachineState.builder().name("base").modelRenderer(...).build())` (见 2.4/2.5)。

**第二类: 无参工厂函数** (machineSettings / partSettings / multiblockSettings)

```ts
machineSettings(arg0: ConfigMachineSettingsFactory | (() => ConfigMachineSettings)): Builder
```

- 期望类型是 **无参** 函数 (Java `Supplier<ConfigMachineSettings>`),
  不是 `Consumer<ConfigMachineSettingsBuilder>`。
- 你写 `.machineSettings((setting) => {...})` 时, `setting` 在期望签名中不存在 →
  TS 无法推断 → **any**; 运行时 KubeJS 以 0 个参数调用你的函数 →
  `setting === undefined`, 函数体里任何 `setting.xxx()` 都会抛 TypeError。
- 函数**必须 return** 一个 `ConfigMachineSettings` 实例 (否则该工厂返回 null,
  机器退回默认设置, 你的配置全部丢失)。
- 想要 `settings => settings.hasUI(true)` 的糖不存在 (那需要模组做 Consumer 包装, MB2 没做)。

一句话: **除了 machineSettings/partSettings/multiblockSettings 是"无参函数+必须 return 对象",
其余全部是"先 new 好对象再传进去"**。

### 2.4 构造配置对象 (Java.loadClass 反射)

JS 侧没有工厂糖, 全部用 `Java.loadClass` 调 Java builder:

```js
// 便捷: 缓存类引用
let $MachineState = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.MachineState")
let $ConfigBlockProperties = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties")
let $ConfigItemProperties = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties")
let $ConfigMachineSettings = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings")
let $ConfigRecipeLogicSettings = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings")
let $ConfigPartSettings = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings")
let $RotationState = Java.loadClass("com.lowdragmc.mbd2.api.block.RotationState")
```

`Java.loadClass(X).builder()` 调用静态方法返回 builder, 链式调用同名方法 (方法名与
Java 文档的配置类速查表完全一致), 最后 `.build()` 得对象。

### 2.5 完整示例: JS 注册一台带特性的单方块机器

```js
MBDRegistryEvents.machine(event => {
    event.create("single", "cmi:kjs_test_machine")

        // 根状态: 模型 + 碰撞箱
        .rootState(
            $MachineState.builder()
                .name("base")
                .modelRenderer("cmi:block/machine/kjs_test/off")
                .shape(Shapes.block())
                .build()
        )

        .blockProperties(
            $ConfigBlockProperties.builder()
                .destroyTime(3)
                .explosionResistance(6)
                .rotationState($RotationState.NON_Y_AXIS)
                .build()
        )

        .itemProperties(
            $ConfigItemProperties.builder()
                .maxStackSize(64)
                .build()
        )

        // 机器设置 + 特性: 无参工厂, 必须 return!
        .machineSettings(() => {
            const b = $ConfigMachineSettings.builder()
            b.hasUI(true)
            b.machineLevel(1)

            // 特性: new Java 类 + setter (与 Java 文档第 4 节同 API)
            const slotC = Java.loadClass("com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTraitDefinition")
            const slot = new slotC()
            slot.setName("input")
            slot.setRecipeHandlerIO(Java.loadClass("com.lowdragmc.mbd2.api.capability.recipe.IO").IN)
            slot.setGuiIO(Java.loadClass("com.lowdragmc.mbd2.api.capability.recipe.IO").IN)
            slot.setSlotSize(1)
            slot.setSlotLimit(64)
            b.traitDefinition(slot)

            return b.build()   // ← 必须 return
        })

        .recipeLogicSettings(
            $ConfigRecipeLogicSettings.builder()
                .enable(true)
                .recipeType("cmi:kjs_test_recipe_type")
                .build()
        )

        .partSettings(() => $ConfigPartSettings.builder().enable(false).build())
})
```

### 2.6 多方块

```js
event.create("multiblock", "cmi:kjs_multiblock")
    .rootState(...)
    .multiblockSettings(() => MultiSetC.builder().showUIOnlyFormed(true).build())
    // 注意: 结构 pattern (FactoryBlockPattern) 在 JS 侧无法像 Java 那样便捷构建 ——
    // Builder 没有 pattern 方法, 结构只能通过 NBT (.mb) 携带。
    // 多方块结构强烈建议用编辑器做好 .mb 后由 Java/磁盘注册 (见第 8 节)。
```

---

## 3. 注册配方类型

```js
MBDRegistryEvents.recipeType(event => {
    const type = event.createRecipeType("cmi:kjs_test_recipe_type")
    type.setXEIVisible(true)
    type.setRequireFuelForWorking(false)
    // type.setIcon(...) / setFuelIcon(...)  (IGuiTexture, 可用 Java.loadClass 构造)

    // 事件方法: event.getRecipeType(rl) / event.removeRecipeType(rl)
})
```

---

## 4. 配方

### 4.1 方式 A: 启动事件里挂内置配方 (Java builder 反射)

```js
MBDRegistryEvents.recipeType(event => {
    const type = event.createRecipeType("cmi:kjs_test_recipe_type")

    // MBDRecipeType.recipeBuilder(id) -> MBDRecipeBuilder, 链式同名方法
    const builder = type.recipeBuilder("cmi:kjs_smelt")
    builder.duration(100)
    builder.inputItems("minecraft:iron_ingot")
    builder.outputItems("2x minecraft:gold_ingot")   // KubeJS 物品字符串语法
    builder.saveAsBuiltinRecipe()                     // 直接进内置配方表
})
```

`MBDRecipeBuilder` 在 JS 里可用方法 (与 Java 文档第 5 节同):
`duration(i)` `perTick(b)` `isFuel(b)` `isXEIHidden(b)` `priority(i)` `chance(f)`
`tierChanceBoost(f)` `slotName(s)` `uiName(s)` `addData(k,v)`
`inputItems/outputItems/notConsumable(...)` `inputFluids/outputFluids(FluidIngredientJS...)`
`inputFE(i)/outputFE(i)` `inputMana/outputMana` `inputAura/outputAura` `inputEmber/outputEmber(double)`
`inputPNCPressure/outputPNCPressure(float)` `inputPNCAir/outputPNCAir(int)` `inputPNCHeat/outputPNCHeat(double)`
`inputHeat/outputHeat(double)` `inputEntities/outputEntities(EntityIngredientJS...)`
条件: `biomeCondition(rl)` `dimensionCondition(rl)` `posYCondition(min,max)` `rainCondition(min,max)`
`thunderCondition(min,max)` `mekHeatCondition(...)` `pncPressureCondition(...)` `pncTemperatureCondition(...)` 等

### 4.2 方式 B: ServerEvents.recipes + JSON

MB2 为每个已注册配方类型注册了 RecipeSchema, 可用 `event.custom(...)`。
JSON key (经 MBDRecipeSerializer 字节码验证):

```js
ServerEvents.recipes(event => {
    event.custom({
        type: "cmi:kjs_test_recipe_type",   // ← 配方类型 id 就是 type
        duration: 200,
        inputs: {
            item: [ { ingredient: { item: "minecraft:iron_ingot" }, count: 1 } ],
            // 其他能力名: fluid / forge_energy / gas / mana / aura / ember / heat ...
        },
        outputs: {
            item: [ { item: "minecraft:gold_ingot", count: 2 } ]
        },
        data: {},                            // 自定义 NBT 数据
        recipeConditions: [],                // 配方条件
        isFuel: false,
        isXEIHidden: false,
        priority: 0
    })
})
```
(content 的精确序列化格式以 `MBDRecipeSerializer` 为准, 字段名已列全; 复杂内容建议用 4.1 的面向对象写法)

---

## 5. 机器事件 (MBDMachineEvents)

```js
MBDMachineEvents.onTick(event => {
    const machine = event.getEvent().getMachine()   // MBDMachine (Java 对象, 反射调用)
    machine.getPos()  // 等
})
```

全部事件名 (server):

| 事件 | 触发时机 | 事件对象 |
|---|---|---|
| `onTick` | 机器每 tick | `MachineTickEvent` |
| `onRecipeWorking` | 配方工作阶段每 tick | `MachineOnRecipeWorkingEvent` |
| `onRecipeWaiting` | 等待输入阶段 | `MachineOnRecipeWaitingEvent` |
| `onRecipeStatusChanged` | 配方状态切换 | `MachineRecipeStatusChangedEvent` |
| `onBeforeRecipeWorking` / `onAfterRecipeWorking` | 配方开始前/结束后 | 对应事件 |
| `onRecipeFinish` | 配方完成 (输出前) | `MachineOnRecipeFinishEvent` |
| `onConsumeInputsAfterWorking` | 工作后消耗输入时 | 对应事件 |
| `onFuelRecipeModify` / `onFuelBurningFinish` | 燃料配方修改/燃料耗尽 | 对应事件 |
| `onBeforeRecipeModify` / `onAfterRecipeModify` | 配方修饰器前后 | `MachineRecipeModifyEvent.Before/After` |
| `onStructureFormed` / `onStructureInvalid` | 多方块成型/失效 | 对应事件 |
| `onRightClick` | 玩家右键 | `MachineRightClickEvent` (player/hand 可取消) |
| `onOpenUI` | 打开 UI | `MachineOpenUIEvent` |
| `onPlaced` / `onRemoved` | 放置/移除 | 对应事件 |
| `onDrops` | 掉落物计算 | `MachineDropsEvent` |
| `onNeighborChanged` | 邻居更新 | `MachineNeighborChangedEvent` |
| `onStateChanged` | 机器状态切换 | `$MachineStatehangedEvent` (新/旧状态) |
| `onUseCatalyst` | 使用多方块催化剂 | `MachineUseCatalystEvent` |
| `onLoad` | 加载 | `MachineOnLoadEvent` |

客户端: `onClientTick` `onCustomDataUpdate` `onCustomKeyframe` `onRecipeUI` `onFuelRecipeUI`

事件对象入口: `event.getEvent().getMachine()` 或 `event.event.machine` 拿到 `MBDMachine`
(MachineEventJS 只有 getEvent()/event 字段, 原始事件上才有 getMachine()/machine 字段)。
取消: 支持取消的事件对象上调 `.cancel()` (等价 Java setCanceled)。

---

## 6. 类型提示 (probejs)

- 类型来自 `kubejs/probe/generated/*.d.ts` (重新生成: 游戏内 /probejs dump 或 probejs 命令)。
- `MBDRegistryEvents` 已收录: `machine(handler: (event: MBDMachineRegistryEventJS) => void)` 等。
- Builder 方法全部有声明, 但工厂参数显示为
  `ConfigMachineSettingsFactory | (() => ConfigMachineSettings)` —— **无参**。
  回调里想拿 builder 参数必然 any (见 2.3)。
- 事件 handler 参数有完整声明: `(event: Internal.MachineTickEventJS) => void`,
  机器本体经 `event.getEvent().getMachine()` / `event.event.machine` 取得。

---

## 7. 常见错误

1. `event.create("machine", id)` → 抛异常: KubeJS 类型名是 `single`/`multiblock`/`kinetic`。
2. `.machineSettings(settings => {...})` 里用 settings → TypeError: 回调无参, 且必须 return 配置对象。
3. `.machineSettings(...)` 忘 return → 配置静默丢失, 机器用默认设置。
4. 多方块想在 JS 里写结构 → 无 API, 走 .mb NBT。
5. 注册的机器在游戏里找不到 → 检查 id 是否被第 8 节的规则覆盖。

---

## 8. 与 Java / 磁盘 NBT 共存 (混合注册)

- 三条来源写**同一个**注册表 `MBDRegistries.MACHINE_DEFINITIONS` / `RECIPE_TYPES`,
  顺序固定: Java → `ldlib/assets/mbd2` 磁盘 NBT → KubeJS。
- **KubeJS 最后注册, 同 id 覆盖一切** (`MBDRegistry.register` 直接覆盖)。
  想用 KubeJS 热改一台 Java 注册的机器, 用相同 id 重新 `event.create` 即可 (临时覆盖, 不推荐生产用);
  反之 Java/磁盘 NBT 的同名定义会盖不掉 KubeJS 的 (除非删 JS 脚本)。
- 机器事件与注册来源无关: 任何来源的机器运行时都进同一事件管线 (机器事件图 → MBDMachineEvents),
  JS 的 `MBDMachineEvents.onTick` 对 Java 注册的机器同样生效。
- 配方类型跨来源可互相引用: KubeJS 注册的机器 `recipeLogicSettings().recipeType("cmi:xxx")`
  指向 Java/磁盘 NBT 注册的配方类型, 反之亦然。
- 分工建议: 结构/UI 复杂的机器用编辑器 NBT (ldlib/assets/mbd2 或 Java registerFromResource),
  需要快速迭代的配方与事件逻辑用 KubeJS, 纯代码强类型机器用 Java (见《MB2-Java注册文档.md》)。

---

## 附录 B: 完整 JS 示例 (startup_scripts 可直接使用)

```js
// startup_scripts/mbd2_machine.js
// 注意: 类型名是 "single"/"multiblock"/"kinetic" (不是 "single_machine")
// 参数分两类: 对象类直接 new 好传入; 工厂类 (machineSettings/partSettings/multiblockSettings)
// 用无参箭头函数且必须 return 配置对象。

// ---- 类引用缓存 ----
const $MachineState = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.MachineState")
const $ConfigBlockProperties  = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties")
const $ConfigItemProperties   = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties")
const $ConfigMachineSettings  = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings")
const $ConfigRecipeLogicSettings       = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings")
const $ConfigPartSettings     = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings")
const $RotationState    = Java.loadClass("com.lowdragmc.mbd2.api.block.RotationState")
const IOC          = Java.loadClass("com.lowdragmc.mbd2.api.capability.recipe.IO")
const SlotTraitC   = Java.loadClass("com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTraitDefinition")
const FluidTraitC  = Java.loadClass("com.lowdragmc.mbd2.common.trait.fluid.FluidTankCapabilityTraitDefinition")

// ---- 机器注册 ----
MBDRegistryEvents.machine(event => {
    event.create("single", "cmi:kjs_test_machine")

        // rootState 是对象参数: 先 build 再传 (不要写 lambda!)
        .rootState(
            $MachineState.builder()
                .name("base")
                .modelRenderer("cmi:block/machine/kjs_test/off")
                .shape(Shapes.block())
                .build()
        )

        .blockProperties(
            $ConfigBlockProperties.builder()
                .destroyTime(3)
                .explosionResistance(6)
                .rotationState($RotationState.NON_Y_AXIS)
                .build()
        )

        .itemProperties(
            $ConfigItemProperties.builder().maxStackSize(64).build()
        )

        // machineSettings 是无参工厂: 箭头函数不带参数, 末尾必须 return
        .machineSettings(() => {
            const b = $ConfigMachineSettings.builder()
            b.hasUI(true)
            b.machineLevel(1)

            const slot = new SlotTraitC()
            slot.setName("input")
            slot.setPriority(0)
            slot.setRecipeHandlerIO(IOC.IN)
            slot.setGuiIO(IOC.IN)
            slot.setSlotSize(1)
            slot.setSlotLimit(64)
            slot.getCapabilityIO().setInternal(IOC.BOTH)
            b.traitDefinition(slot)

            const tank = new FluidTraitC()
            tank.setName("fluid_in")
            tank.setPriority(1)
            tank.setRecipeHandlerIO(IOC.IN)
            tank.setGuiIO(IOC.IN)
            tank.setTankSize(1)
            tank.setCapacity(16000)
            b.traitDefinition(tank)

            return b.build()   // <- 必须 return, 否则配置全部丢失
        })

        .recipeLogicSettings(
            $ConfigRecipeLogicSettings.builder()
                .enable(true)
                .recipeType("cmi:kjs_test_recipe_type")
                .build()
        )

        .partSettings(() => $ConfigPartSettings.builder().enable(false).build())
})

// ---- 配方类型 + 内置配方 ----
MBDRegistryEvents.recipeType(event => {
    const type = event.createRecipeType("cmi:kjs_test_recipe_type")
    type.setXEIVisible(true)

    const builder = type.recipeBuilder("cmi:kjs_smelt")
    builder.duration(100)
    builder.inputItems("minecraft:iron_ingot")
    builder.outputItems("2x minecraft:gold_ingot")
    builder.saveAsBuiltinRecipe()
})

// ---- 机器事件 ----
MBDMachineEvents.onRecipeWorking(event => {
    // event.getEvent().getMachine() 是 MBDMachine
    Utils.server.tell(event.getEvent().getMachine().getPos() + " is working")
})
```
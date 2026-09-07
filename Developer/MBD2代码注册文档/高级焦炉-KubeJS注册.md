# 高级焦炉 (reinforced_coke_oven) — KubeJS 注册
> 本文件按 `ldlib/assets/mbd2` 中高级焦炉的真实 NBT 定义逐字段还原。
> 依赖 MB2 1.20.1-1.0.39 / KubeJS 6。文件放 `kubejs/startup_scripts/` 即可。

## 0. 为什么这份 JS 不用 `event.create(...)`

- `event.create("multiblock", id)` 返回的 Builder **没有** `blockPatternFactory` 等方法 (结构只能由 NBT 携带)。
- 事件结束后 `afterPosted` 会对每个 create 的 builder **无条件** `register(id, builder.build())` —— 即使你先手动 build 挂好结构, 也会被这个无结构的版本覆盖。
- 所以这里改用 `Java.loadClass` **直连 Java API**: 自己拿 Builder → build → 挂结构 → 手动 `MACHINE_DEFINITIONS.register`。注册表此时已 unfreeze, 手动注册完全合法; 因为不调 `event.create`, `afterPosted` 无 builder 可覆盖。

## 1. 从 NBT 还原的关键参数 (核对用)

| 项       | 值                                                                                    |
| -------- | ------------------------------------------------------------------------------------- |
| id       | `cmi:reinforced_coke_oven`                                                            |
| 结构     | 5x5x5, 字符 0-6: 0=scorched_bricks / 1=any / 2=总线                                   | seared / 3=seared 内衬 / 4=slab 顶板 / 5=vent 烟囱 / 6=控制器 |
| 状态树   | base(off) → formed → working(on,15,blastfurnace音效) → waiting(off); formed → suspend |
| 配方类型 | 代理 `immersiveengineering:coke_oven`                                                 |
| 配方修饰 | 时长 x0.5, 最大并行 x4 (maxParallel 无 JS/Java setter, 见第 5 节)                     |
| 特性     | item 输入 x1 / item 输出 x1 / 流体输出 32000mB                                        |

---

## 2. 完整注册脚本

```js
// startup_scripts/reinforced_coke_oven.js

// ---- 类引用 ----
let $MachineState = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.MachineState")
let $ConfigBlockProperties = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties")
let $ConfigItemProperties = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties")
let $ConfigMachineSettings = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings")
let $ConfigRecipeLogicSettings = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings")
let $ConfigMultiblockSettings = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigMultiblockSettings")
let $MultiblockMachineDefinition = Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.MultiblockMachineDefinition")
let $RotationState = Java.loadClass("com.lowdragmc.mbd2.api.block.RotationState")
let $IO = Java.loadClass("com.lowdragmc.mbd2.api.capability.recipe.IO")
let $ItemSlotCapabilityTraitDefinition = Java.loadClass("com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTraitDefinition")
let $FluidTankCapabilityTraitDefinition = Java.loadClass("com.lowdragmc.mbd2.common.trait.fluid.FluidTankCapabilityTraitDefinition")
let $FactoryBlockPattern = Java.loadClass("com.lowdragmc.mbd2.api.pattern.FactoryBlockPattern")
let $Predicates = Java.loadClass("com.lowdragmc.mbd2.api.pattern.$Predicates")
let $Shapes = Java.loadClass("net.minecraft.woResourceLocationd.phys.shapes.Shapes")
let $MBDRegistries = Java.loadClass("com.lowdragmc.mbd2.api.registry.$MBDRegistries")
let mbdRegistries = $MBDRegistries.getField("MACHINE_DEFINITIONS").get(null)

// ---- trait 工厂 ----
function itemSlot(name, io) {
    const t = new $ItemSlotCapabilityTraitDefinition()
    t.setName(name); t.setPriority(0)
    t.setRecipeHandlerIO(io); t.setGuiIO(io)
    t.setSlotSize(1); t.setSlotLimit(64)
    t.getCapabilityIO().setInternal(io)
    t.getCapabilityIO().setFrontIO(io); t.getCapabilityIO().setBackIO(io)
    t.getCapabilityIO().setLeftIO(io);  t.getCapabilityIO().setRightIO(io)
    t.getCapabilityIO().setTopIO(io);   t.getCapabilityIO().setBottomIO(io)
    t.getAutoInput().setEnable(false);  t.getAutoOutput().setEnable(false)
    return t
}
function fluidTankOut() {
    const t = new $FluidTankCapabilityTraitDefinition()
    t.setName("reinforced_coke_oven_output_fluid_tank"); t.setPriority(0)
    t.setRecipeHandlerIO($IO.OUT); t.setGuiIO($IO.OUT)
    t.setTankSize(1); t.setCapacity(32000); t.setAllowSameFluids(true)
    t.getCapabilityIO().setInternal($IO.OUT)
    t.getCapabilityIO().setFrontIO($IO.OUT); t.getCapabilityIO().setBackIO($IO.OUT)
    t.getCapabilityIO().setLeftIO($IO.OUT);  t.getCapabilityIO().setRightIO($IO.OUT)
    t.getCapabilityIO().setTopIO($IO.OUT);   t.getCapabilityIO().setBottomIO($IO.OUT)
    t.getAutoInput().setEnable(false);  t.getAutoOutput().setEnable(false)
    return t
}

// ---- 机器注册 ----
MBDRegistryEvents.machine(event => {
    const id = new ResourceLocation("cmi", "reinforced_coke_oven")

    // ---------- 状态机 (与 NBT 状态树一致) ----------
    const waiting = $MachineState.builder().name("waiting")
        .modelRenderer("cmi:block/machine/reinforced_coke_oven/off")
        .shape($Shapes.block()).lightLevel(0).build()
    const suspend = $MachineState.builder().name("suspend")
        .shape($Shapes.block()).build()                    // 无渲染器 -> 继承父状态
    const working = $MachineState.builder().name("working")
        .modelRenderer("cmi:block/machine/reinforced_coke_oven/on")
        .shape($Shapes.block()).lightLevel(15)
        .children(Java.loadClass("java.util.Arrays").asList(waiting)).build()
    working.machineSound().setEnable(true)
    working.machineSound().setSound(new ResourceLocation("minecraft", "block.blastfurnace.fire_crackle"))
    working.machineSound().setLoop(true)
    working.machineSound().setDelay(0)
    working.machineSound().setVolume(1)
    const formed = $MachineState.builder().name("formed")
        .shape($Shapes.block())
        .children(Java.loadClass("java.util.Arrays").asList(working, suspend)).build()
    const base = $MachineState.builder().name("base")
        .modelRenderer("cmi:block/machine/reinforced_coke_oven/off")
        .shape($Shapes.block()).lightLevel(0)
        .children(Java.loadClass("java.util.Arrays").asList(formed)).build()

    // ---------- 方块/物品属性 ----------
    const blockProps = $ConfigBlockProperties.builder()
        .destroyTime(3).explosionResistance(6)
        .rotationState($RotationState.NON_Y_AXIS)
        .hasCollision(true).useAO(true).build()
    const itemProps = $ConfigItemProperties.builder()
        .maxStackSize(64).isGui3d(true).useBlockLight(true).build()

    // ---------- 机器设置 (无参工厂, 必须 return!) ----------
    const settings = $ConfigMachineSettings.builder()
    settings.hasUI(true); settings.dropMachineItem(true)
    settings.traitDefinitions(Java.loadClass("java.util.Arrays").asList(
        itemSlot("reinforced_coke_oven_input_item_slot",  $IO.IN),
        itemSlot("reinforced_coke_oven_output_item_slot", $IO.OUT),
        fluidTankOut()
    ))
    const settingsObj = settings.build()

    // ---------- 配方逻辑 (0.5x 时长; maxParallel 缺口见第 5 节) ----------
    const mods = new (Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier$RecipeModifiers"))()
    const mod = new (Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.RecipeModifier"))()
    mod.durationModifier.setMultiplier(0.5)
    mods.recipeModifiers.add(mod)
    const logic = $ConfigRecipeLogicSettings.builder()
        .enable(true)
        .recipeType(new ResourceLocation("cmi", "reinforced_coke_oven"))
        .recipeDampingValue(2)
        .consumeInputsAfterWorking(true)
        .alwaysSearchRecipe(false)
        .recipeModifiers(mods)
        .build()

    // ---------- 多方块设置 ----------
    const mbSettings = $ConfigMultiblockSettings.builder()
        .showUIOnlyFormed(true).showUIWhenClickStructure(true).build()

    // ---------- build 定义 ----------
    const def = $MultiblockMachineDefinition.builder()
        .id(id)
        .rootState(base)
        .blockProperties(blockProps)
        .itemProperties(itemProps)
        .machineSettings(() => settingsObj)     // 工厂返回已构建对象
        .recipeLogicSettings(logic)
        .multiblockSettings(() => mbSettings)
        .build()

    // ---------- 5x5x5 结构 (字符与 NBT pattern 一致, 每层一个 aisle) ----------
    const B = (s) => Block.getBlock(s)   // KubeJS 全局 Block 绑定 -> Java Block
    const pattern = $FactoryBlockPattern.start()
        .aisle("00000", "12221", "10001", "13331", "14441")   // y=0
        .aisle("00000", "31112", "05550", "31113", "44444")   // y=1
        .aisle("00000", "61112", "05550", "31113", "44444")   // y=2 控制器
        .aisle("00000", "31112", "05550", "31113", "44444")   // y=3
        .aisle("00000", "12221", "10001", "13331", "14441")   // y=4
        .where("0", $Predicates.blocks(B("tconstruct:scorched_bricks")))
        .where("1", $Predicates.any())
        .where("2", $Predicates.blocks(B("cmi:reinforced_coke_oven_input_bus"))
                .or($Predicates.blocks(B("cmi:reinforced_coke_oven_output_bus")))
                .or($Predicates.blocks(B("tconstruct:seared_bricks"))))
        .where("3", $Predicates.blocks(B("tconstruct:seared_bricks")))
        .where("4", $Predicates.blocks(B("tconstruct:scorched_bricks_slab")))
        .where("5", $Predicates.blocks(B("ad_astra:vent")))
        .where("6", $Predicates.controller($Predicates.any()))
        .build()
    def.blockPatternFactory((machine) => pattern)   // Function 适配

    // ---------- 手动注册 (不用 event.create, 无 afterPosted 覆盖) ----------
    mbdRegistries.register(id, def)
})

// ---- 配方类型: 代理 IE 焦炉 ----
MBDRegistryEvents.recipeType(event => {
    const MRT = Java.loadClass("com.lowdragmc.mbd2.api.recipe.MBDRecipeType")
    const ResourceLocation = new ResourceLocation("cmi", "reinforced_coke_oven")
    const forgeRegs = Java.loadClass("net.minecraftforge.registries.ForgeRegistries")
    const ieType = forgeRegs.getField("RECIPE_TYPES").get(null)
        .getValue(new ResourceLocation("immersiveengineering", "coke_oven"))

    const type = new MRT(ResourceLocation, ieType)             // 构造器 (ResourceLocation, RecipeType...)
    type.setXEIVisible(true)
    type.setProxyRecipeXEIVisible(true)
    type.setRequireFuelForWorking(false)

    $MBDRegistries.getField("RECIPE_TYPES").get(null).register(ResourceLocation, type)
})

// ---- 机器事件 (与 CMI Core 的 CokeOvenWorking 同一事件) ----
MBDMachineEvents.onRecipeWorking(event => {
    // event.getEvent().getMachine() (或 event.event.machine) -> MBDMachine
    console.log(event.getEvent().getMachine().getPos() + " is working")
})
```

---

## 3. 两个总线部件 (input_bus / output_bus)

总线需要 `ProxyCapability.traitNameFilter` (声明代理控制器的哪个 trait), 该字段在 1.0.39
**没有 setter** (Java/JS 都无法设置), 所以总线保持 NBT 注册 —— 什么都不用做:
`ldlib/assets/mbd2/machine/reinforced_coke_oven/input.sm` 和 `output.sm` 会被 MB2 自动扫描加载
(第 ② 阶段, 早于本脚本执行)。

```js
// 若想改总线配置: 用 MB2 编辑器重存 .sm, 或把 .sm 拷到 CMI Core resources 由 Java
// registerFromResource 注册 (见《高级焦炉-Java注册.md》)
```

---

## 4. 为什么同样 5x5x5 结构在 JS 里比 Java 绕

`event.create("multiblock", id)` 的 Builder 无 `blockPatternFactory`、`MultiblockMachineDefinition`
的 builder 是 `public static` 所以可以 `Java.loadClass(...).builder()` 直接拿; 但注册表字段
`MACHINE_DEFINITIONS` 需要 `getField(...).get(null)` 反射读。这两点就是 JS 版绕路的全部原因。

---

## 5. 缺口与兜底 (1.0.39)

| 缺口                                   | 说明                                                                             |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| `RecipeModifier.maxParallel` (4x 并行) | private 无 setter, 本脚本只能还原 0.5x 时长; 需要 4x 并行时整机走 NBT (.mb) 注册 |
| 总线 `traitNameFilter`                 | 无 setter, 总线保留 .sm NBT (见第 3 节)                                          |
| 编辑器 UI/燃料 UI 布局                 | 只在 .rt NBT 中, 纯代码/JS 只有基础 UI                                           |

**100% 还原兜底**: 保持 `ldlib/assets/mbd2` 下的 .mb/.sm/.rt 不动 (MB2 自动加载), 本脚本只做增量
(事件、配方、或同 id 覆盖实验)。
```

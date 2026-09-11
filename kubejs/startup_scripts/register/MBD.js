/**
 * 注册类型只有
 * "single"
 * "multiblock"
 * "kinetic"
 * 
 * MBDMachineRegistryEventJS.BUILDERS.put("single", MBDMachineDefinition::builder);
 * MBDMachineRegistryEventJS.BUILDERS.put("multiblock", MultiblockMachineDefinition::builder);
 * 
 * need create
 * MBDMachineRegistryEventJS.BUILDERS.put("kinetic", CreateKineticMachineDefinition::builder);
 */
let $MachineState =
	Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.MachineState")
let $ConfigBlockProperties =
	Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigBlockProperties")
let $ConfigItemProperties =
	Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigItemProperties")
let $ConfigMachineSettings =
	Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigMachineSettings")
let $ConfigRecipeLogicSettings =
	Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigRecipeLogicSettings")
let $ConfigPartSettings =
	Java.loadClass("com.lowdragmc.mbd2.common.machine.definition.config.ConfigPartSettings")
let $RotationState =
	Java.loadClass("com.lowdragmc.mbd2.api.block.RotationState")
let $ItemSlotCapabilityTraitDefinition =
	Java.loadClass("com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTraitDefinition")
let $IO =
	Java.loadClass("com.lowdragmc.mbd2.api.capability.recipe.IO")

// MBDRegistryEvents.machine((event) => {
// 	let test = event.create("single", "cmi:kjs_test_machine")

// 	// 根状态: 模型 + 碰撞箱
// 	test.rootState($MachineState.builder()
// 		.name("base")
// 		.modelRenderer("cmi:block/radar")
// 		.shape(Shapes.block())
// 		.build())

// 	test.blockProperties($ConfigBlockProperties.builder()
// 		.destroyTime(3)
// 		.explosionResistance(6)
// 		.rotationState($RotationState.NON_Y_AXIS)
// 		.build())

// 	test.itemProperties($ConfigItemProperties.builder()
// 		.maxStackSize(64)
// 		.build())

// 	// 机器设置 + 特性: 无参工厂, 必须 return!
// 	test.machineSettings(() => {
// 		let builder = $ConfigMachineSettings.builder()

// 		builder.hasUI(true)
// 		builder.machineLevel(1)

// 		// 特性: new Java 类 + setter (与 Java 文档第 4 节同 API)
// 		let slot = new $ItemSlotCapabilityTraitDefinition()

// 		slot.setName("input")
// 		slot.setRecipeHandlerIO($IO.IN)
// 		slot.setGuiIO($IO.IN)
// 		slot.setSlotSize(1)
// 		slot.setSlotLimit(64)

// 		builder.traitDefinition(slot)

// 		return builder.build()
// 	})

// 	test.recipeLogicSettings($ConfigRecipeLogicSettings.builder()
// 		.enable(true)
// 		.recipeType)
// })
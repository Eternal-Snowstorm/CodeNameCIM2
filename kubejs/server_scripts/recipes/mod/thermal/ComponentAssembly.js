ServerEvents.recipes((event) => {
	let { thermal_extra } = event.getRecipes()

	/**
	 * 
	 * @param {(Internal.OutputFluid_|OutputItem_)[]} output 
	 * @param {(Internal.InputFluid_|InputItem_)[]} inputs 
	 * @returns 
	 */
	function addComponRecipe(output, inputs) {
		return thermal_extra.component_assembly(output, inputs)
			.energy(16000)
	}

	// 二极管
	addComponRecipe("4x thermal:laser_diode", [
		"#forge:wires/electrum",
		"#forge:plates/invar",
		"#forge:prisms/pure_quartz"
	])

	// 电子元件
	addComponRecipe("2x immersiveengineering:component_electronic", [
		"thermal:laser_diode",
		"#forge:treated_wood_slab",
		"#forge:gems/quartz",
		"#forge:wires/electrum"
	]).id("immersiveengineering:blueprint/component_electronic")

	// 锇砖瓦
	addComponRecipe("2x cmi:osmium_tile", [
		"#forge:plates/aluminum",
		"#forge:plates/osmium",
		Fluid.of("cmi:structural_plastic", 200)
	])

	// 钢制机壳
	addComponRecipe("2x mekanism:steel_casing", [
		"#forge:plates/stainless_steel",
		"#forge:plates/stainless_steel",
		"cmi:osmium_tile",
		"#forge:gears/chromeplated_steel"
	]).id("mekanism:steel_casing")

	// 通量线圈
	addComponRecipe("thermal:rf_coil", [
		"#forge:plates/gold",
		"#forge:dusts/redstone",
		"#forge:dusts/redstone"
	])

	// 萤石流明管道
	addComponRecipe("cmi:glowstone_lumen_tube", [
		"#forge:plates/cobalt",
		"#forge:dusts/glowstone",
		"#forge:dusts/glowstone"
	])

	// 机器框架
	addComponRecipe("thermal:machine_frame", [
		"#forge:plates/invar",
		"cmi:industrial_frame"
	])

	// 铁机壳
	addComponRecipe("cmi:iron_casing", [
		"#forge:plates/iron",
		"cmi:industrial_frame"
	])

	// 钢机壳
	addComponRecipe("cmi:steel_casing", [
		"#forge:plates/steel",
		"cmi:industrial_frame"
	])

	// 红石伺服器
	addComponRecipe("2x thermal:redstone_servo", [
		Fluid.of("immersiveengineering:redstone_acid", 200),
		"#forge:plates/iron"
	]).id("thermal_extra:machine/component_assembly/redstone_servo")

	// 并行升级 +4
	addComponRecipe("thermal_parallel:argument_parallel_2", [
		"thermal_parallel:argument_parallel",
		["#forge:ingots/cobalt", "#forge:plates/cobalt"],
		"immersiveengineering:component_electronic",
		"#forge:gears/rose_gold",
		"#forge:gears/rose_gold"
	])

	// 并行升级 +4 流体配方虽然麻烦, 但是相对应的造价更便宜
	addComponRecipe("thermal_parallel:argument_parallel_2", [
		"thermal_parallel:argument_parallel",
		"immersiveengineering:component_electronic",
		["#forge:ingots/cobalt", "#forge:plates/cobalt"],
		"#forge:dusts/redstone",
		Fluid.of("tconstruct:molten_rose_gold", 90)
	])
})
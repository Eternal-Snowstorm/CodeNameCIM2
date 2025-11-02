ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes

	// 基础控制电路
	addRecipe("4x mekanism:basic_control_circuit", [
		"#immersiveengineering:circuits/pcb",
		"immersiveengineering:component_electronic_adv",
		"ae2:logic_processor",
		"#forge:plates/polyolefin"
	])

	// 末影抽屉
	addRecipe("functionalstorage:ender_drawer", [
		"cmi:ender_mechanism",
		"#forge:gears/enderium",
		"#functionalstorage:drawer"
	])

	// 高级控制电路(半成品)
	addRecipe("cmi:incomplete_advanced_control_circuit", [
		"#forge:plates/platinum",
		"#forge:alloys/advanced",
		"ae2:calculation_processor",
		"alexscaves:polymer_plate"
	])

	// 精英控制电路(半成品)
	addRecipe("cmi:incomplete_elite_control_circuit", [
		"#forge:plates/osmium",
		"#forge:alloys/elite",
		"ae2:engineering_processor",
		"#forge:plates/hdpe"
	])

	function addRecipe(o, i) {
		return thermal_extra.component_assembly(o, i)
			.energy(8000)
	}
})
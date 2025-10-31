ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes

	// 基础控制电路
	thermal_extra.component_assembly("4x mekanism:basic_control_circuit", [
		"#immersiveengineering:circuits/pcb",
		"immersiveengineering:component_electronic_adv",
		"ae2:logic_processor",
		"#forge:plates/polyolefin"
	]).energy(8000)

	// 末影抽屉
	thermal_extra.component_assembly("functionalstorage:ender_drawer", [
		"cmi:ender_mechanism",
		"#forge:gears/enderium",
		"#functionalstorage:drawer"
	]).energy(8000)

	// 高级控制电路(半成品)
	thermal_extra.component_assembly("cmi:incomplete_advanced_control_circuit", [
		"#forge:plates/platinum",
		"#forge:alloys/advanced",
		"ae2:calculation_processor",
		"alexscaves:polymer_plate"
	]).energy(8000)
})
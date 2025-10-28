ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes

	// 基础控制电路
	thermal_extra.component_assembly("4x mekanism:basic_control_circuit", [
		"#immersiveengineering:circuits/pcb",
		"ae2:printed_silicon",
		"ae2:logic_processor",
		"#forge:plates/polyolefin"
	])
})
ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 灌注合金
	mekanism.metallurgic_infusing(
		"mekanism:alloy_infused",
		"#forge:ingots/signalum"
	).chemicalInput({ infuse_type: "mekanism:redstone", amount: 10 })

	// 高级控制电路
	mekanism.metallurgic_infusing(
		"#forge:circuits/advanced",
		"cmi:incomplete_advanced_control_circuit"
	).chemicalInput({ infuse_type: "mekanism:redstone", amount: 40 })
})
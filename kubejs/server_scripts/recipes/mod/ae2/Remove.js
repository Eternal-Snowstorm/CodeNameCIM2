ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"ae2:entropy/cool/water_ice",
		"ae2:blasting/sky_stone_block",
		"ae2:blasting/silicon_from_certus_quartz_dust",
		"ae2:smelting/silicon_from_certus_quartz_dust",
		"advanced_ae:logic_processor_chamber",
		"advanced_ae:calculation_processor_chamber",
		"advanced_ae:engineering_processor_chamber",
		"advanced_ae:quantum_processor_chamber",
		"advanced_ae:quantum_alloy_plate",
		"ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals",
		"ae2:inscriber/sky_stone_dust"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({
			id: id
		})
	})
})
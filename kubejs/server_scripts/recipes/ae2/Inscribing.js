ServerEvents.recipes((event) => {
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:ingots/etrium").toJson(),
			"top": Ingredient.of("ae2:engineering_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Ingredient.of("ae2:printed_engineering_processor").toJson()
	}).id("ae2:inscriber/engineering_processor_print")

	event.custom({
		"type": "expatternprovider:circuit_cutter",
		"fluid_input": {
			"amount": 100,
			"ingredient": {
				"fluid": "minecraft:water"
			}
		},
		"item_input": {
			"amount": 1,
			"ingredient": {
				"tag": "forge:storage_blocks/etrium"
			}
		},
		"output": Item.of("ae2:printed_engineering_processor", 9).toJson()
	}).id("expatternprovider:cutter/engineering")
})
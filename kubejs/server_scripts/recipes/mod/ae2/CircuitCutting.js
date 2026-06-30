ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.getRecipes()

	// 逻辑电路板
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
				"tag": "forge:storage_blocks/electrum"
			}
		},
		"output": Item.of(Print.LOGIC, 9).toJson()
	}).id("expatternprovider:cutter/logic")

	// 工程电路板
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
		"output": Item.of(Print.ENGINEERING, 9).toJson()
	}).id("expatternprovider:cutter/engineering")

	// 并发电路板
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
				"tag": "forge:storage_blocks/entro"
			}
		},
		"output": Item.of(Print.CONCURRENT, 9).toJson()
	})
})
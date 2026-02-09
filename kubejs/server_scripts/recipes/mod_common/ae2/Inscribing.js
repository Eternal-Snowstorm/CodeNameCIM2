ServerEvents.recipes((event) => {

	// 碳化硅板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("cmi:silicon_carbide").toJson(),
			"top": Ingredient.of("ae2:silicon_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("cmi:silicon_carbide_plate").toJson()
	})

	// 线刻硅板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("ae2:printed_silicon").toJson(),
			"top": Ingredient.of("cmi:redstone_wire").toJson()
		},
		"mode": "press",
		"result": Item.of("cmi:inscribed_silicon").toJson()
	})
})
ServerEvents.recipes((event) => {
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("cmi:silicon_carbide").toJson(),
			"top": Ingredient.of("ae2:silicon_press").toJson()
		},
		"mode": "inscribe",
		"result": Ingredient.of("cmi:silicon_carbide_plate").toJson()
	})

	
})
ServerEvents.recipes((event) => {
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("cmi:silicon_carbide").toJson(),
			"top": Ingredient.of("ae2:silicon_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("cmi:silicon_carbide_plate").toJson()
	})

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("immersiveengineering:wirecoil_redstone").toJson(),
			"middle": Ingredient.of("#forge:ingots/electrum").toJson(),
			"top": Ingredient.of("ae2:logic_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:printed_logic_processor").toJson()
	}).id("ae2:inscriber/logic_processor_print")

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("immersiveengineering:wirecoil_redstone").toJson(),
			"middle": Ingredient.of("#forge:gems/certus_quartz").toJson(),
			"top": Ingredient.of("ae2:calculation_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:printed_calculation_processor").toJson()
	}).id("ae2:inscriber/calculation_processor_print")

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("immersiveengineering:wirecoil_redstone").toJson(),
			"middle": Ingredient.of("#forge:ingots/etrium").toJson(),
			"top": Ingredient.of("ae2:engineering_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:printed_engineering_processor").toJson()
	}).id("ae2:inscriber/engineering_processor_print")

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("immersiveengineering:wirecoil_redstone").toJson(),
			"middle": Ingredient.of("#forge:ingots/quantum_alloy").toJson(),
			"top": Ingredient.of("advanced_ae:quantum_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("advanced_ae:printed_quantum_processor").toJson()
	}).id("advanced_ae:quantum_processor_print")

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("create:polished_rose_quartz").toJson(),
			"middle": Ingredient.of("ae2:printed_logic_processor").toJson(),
			"top": Ingredient.of("ae2:printed_silicon").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:logic_processor").toJson()
	})

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("ae2:silicon").toJson(),
			"middle": Ingredient.of("ae2:printed_calculation_processor").toJson(),
			"top": Ingredient.of("ae2:printed_silicon").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:calculation_processor").toJson()
	})

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("cmi:silicon_carbide").toJson(),
			"middle": Ingredient.of("ae2:printed_engineering_processor").toJson(),
			"top": Ingredient.of("ae2:printed_silicon").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:engineering_processor").toJson()
	})

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("cmi:single_crystal_silicon").toJson(),
			"middle": Ingredient.of("advanced_ae:printed_quantum_processor").toJson(),
			"top": Ingredient.of("ae2:printed_silicon").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("advanced_ae:quantum_processor").toJson()
	})
})
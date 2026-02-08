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

	// 逻辑电路板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:ingots/electrum").toJson(),
			"top": Ingredient.of("ae2:logic_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:printed_logic_processor").toJson()
	}).id("ae2:inscriber/logic_processor_print")

	// 运算电路板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:gems/certus_quartz").toJson(),
			"top": Ingredient.of("ae2:calculation_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:printed_calculation_processor").toJson()
	}).id("ae2:inscriber/calculation_processor_print")

	// 工程电路板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:ingots/etrium").toJson(),
			"top": Ingredient.of("ae2:engineering_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("ae2:printed_engineering_processor").toJson()
	}).id("ae2:inscriber/engineering_processor_print")

	// 量子电路板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:ingots/quantum_alloy").toJson(),
			"top": Ingredient.of("advanced_ae:quantum_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of("advanced_ae:printed_quantum_processor").toJson()
	}).id("advanced_ae:quantum_processor_print")

	// 逻辑处理器
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("#forge:ingots/hop_graphite").toJson(),
			"middle": Ingredient.of("ae2:printed_logic_processor").toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of("ae2:logic_processor").toJson()
	})

	// 计算处理器
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("ae2:silicon").toJson(),
			"middle": Ingredient.of("ae2:printed_calculation_processor").toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of("ae2:calculation_processor").toJson()
	})

	// 工程处理器
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("cmi:silicon_carbide").toJson(),
			"middle": Ingredient.of("ae2:printed_engineering_processor").toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of("ae2:engineering_processor").toJson()
	})

	// 量子处理器
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("cmi:single_crystal_silicon").toJson(),
			"middle": Ingredient.of("advanced_ae:printed_quantum_processor").toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of("advanced_ae:quantum_processor").toJson()
	})
})
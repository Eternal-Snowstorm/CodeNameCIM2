ServerEvents.recipes((event) => {
	let { create, vintageimprovements, createaddition } = event.getRecipes()

	let Incomplete = {
		CONTROL: "create_connected:incomplete_control_chip",
		LOGIC: "cmi:incomplete_logic_processor",
		CALCULATION: "cmi:incomplete_calculation_processor",
		ENGINEERING: "cmi:incomplete_engineering_processor",
		CONCURRENT: "cmi:incomplete_concurrent_processor",
		QUANTUM: "cmi:incomplete_quantum_processor"
	}

	let Print = {
		LOGIC: "ae2:printed_logic_processor",
		CALCULATION: "ae2:printed_calculation_processor",
		ENGINEERING: "ae2:printed_engineering_processor",
		CONCURRENT: "cmi:printed_concurrent_processor",
		QUANTUM: "advanced_ae:printed_quantum_processor"
	}

	let Processor = {
		CONTROL: "create_connected:control_chip",
		LOGIC: "ae2:logic_processor",
		CALCULATION: "ae2:calculation_processor",
		ENGINEERING: "ae2:engineering_processor",
		CONCURRENT: "cmi:concurrent_processor",
		QUANTUM: "advanced_ae:quantum_processor"
	}

	// 控制芯片
	create.sequenced_assembly(Processor.CONTROL, [
		"#forge:plates/copper"
	], [
		create.deploying(Incomplete.CONTROL, [
			Incomplete.CONTROL,
			"#forge:plates/redstone"
		]),
		create.deploying(Incomplete.CONTROL, [
			Incomplete.CONTROL,
			"ae2:printed_silicon"
		]),
		create.deploying(Incomplete.CONTROL, [
			Incomplete.CONTROL,
			"cmi:redstone_wire"
		]),
		vintageimprovements.laser_cutting(Incomplete.CONTROL, [
			Incomplete.CONTROL
		]).energy(4000).maxChargeRate(1000)
	]).transitionalItem(Incomplete.CONTROL)
		.loops(1)
		.id("create_connected:sequenced_assembly/control_chip")

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("#forge:plates/redstone").toJson(),
			"middle": Ingredient.of("#forge:plates/copper").toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of(Processor.CONTROL).toJson()
	})

	// 逻辑处理器
	create.sequenced_assembly(Processor.LOGIC, [
		"#forge:ingots/electrum"
	], [
		vintageimprovements.curving(Incomplete.LOGIC, [
			Incomplete.LOGIC
		]).itemAsHead("ae2:logic_processor_press"),
		create.deploying(Incomplete.LOGIC, [
			Incomplete.LOGIC,
			"create:polished_rose_quartz"
		]),
		create.deploying(Incomplete.LOGIC, [
			Incomplete.LOGIC,
			"ae2:printed_silicon"
		]),
		create.deploying(Incomplete.LOGIC, [
			Incomplete.LOGIC,
			"cmi:redstone_wire"
		]),
		vintageimprovements.laser_cutting(Incomplete.LOGIC, [
			Incomplete.LOGIC
		]).energy(4000).maxChargeRate(1000)
	]).transitionalItem(Incomplete.LOGIC)
		.loops(1)

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("create:polished_rose_quartz").toJson(),
			"middle": Ingredient.of(Print.LOGIC).toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of(Processor.LOGIC).toJson()
	}).id("ae2:inscriber/logic_processor")

	// 计算处理器
	create.sequenced_assembly(Processor.CALCULATION, [
		"#forge:gems/certus_quartz"
	], [
		vintageimprovements.curving(Incomplete.CALCULATION, [
			Incomplete.CALCULATION
		]).itemAsHead("ae2:calculation_processor_press"),
		create.deploying(Incomplete.CALCULATION, [
			Incomplete.CALCULATION,
			"#forge:ingots/hop_graphite"
		]),
		create.deploying(Incomplete.CALCULATION, [
			Incomplete.CALCULATION,
			"ae2:printed_silicon"
		]),
		create.deploying(Incomplete.CALCULATION, [
			Incomplete.CALCULATION,
			"cmi:redstone_wire"
		]),
		vintageimprovements.laser_cutting(Incomplete.CALCULATION, [
			Incomplete.CALCULATION
		]).energy(4000).maxChargeRate(1000)
	]).transitionalItem(Incomplete.CALCULATION)
		.loops(1)

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("#forge:ingots/hop_graphite").toJson(),
			"middle": Ingredient.of(Print.CALCULATION).toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of(Processor.CALCULATION).toJson()
	}).id("ae2:inscriber/calculation_processor")

	// 工程处理器
	create.sequenced_assembly(Processor.ENGINEERING, [
		"#forge:ingots/etrium"
	], [
		vintageimprovements.curving(Incomplete.ENGINEERING, [
			Incomplete.ENGINEERING
		]).itemAsHead("ae2:engineering_processor_press"),
		create.deploying(Incomplete.ENGINEERING, [
			Incomplete.ENGINEERING,
			"#forge:silicon"
		]),
		create.deploying(Incomplete.ENGINEERING, [
			Incomplete.ENGINEERING,
			"ae2:printed_silicon"
		]),
		create.deploying(Incomplete.ENGINEERING, [
			Incomplete.ENGINEERING,
			"cmi:redstone_wire"
		]),
		vintageimprovements.laser_cutting(Incomplete.ENGINEERING, [
			Incomplete.ENGINEERING
		]).energy(4000).maxChargeRate(1000)
	]).transitionalItem(Incomplete.ENGINEERING)
		.loops(1)

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("#forge:silicon").toJson(),
			"middle": Ingredient.of(Print.ENGINEERING).toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of(Processor.ENGINEERING).toJson()
	}).id("ae2:inscriber/engineering_processor")

	// 并发处理器
	create.sequenced_assembly(Processor.CONCURRENT, [
		"#forge:gems/entro"
	], [
		vintageimprovements.curving(Incomplete.CONCURRENT, [
			Incomplete.CONCURRENT
		]).itemAsHead("cmi:concurrent_processor_press"),
		create.deploying(Print.CONCURRENT, [
			Incomplete.CONCURRENT,
			"cmi:silicon_carbide"
		]),
		create.deploying(Print.CONCURRENT, [
			Incomplete.CONCURRENT,
			"ae2:printed_silicon"
		]),
		create.deploying(Print.CONCURRENT, [
			Incomplete.CONCURRENT,
			"cmi:redstone_wire"
		]),
		vintageimprovements.laser_cutting(Print.CONCURRENT,
			Incomplete.CONCURRENT
		).energy(4000).maxChargeRate(1000)
	]).transitionalItem(Print.CONCURRENT)
		.loops(1)

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("cmi:silicon_carbide").toJson(),
			"middle": Ingredient.of(Print.CONCURRENT).toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of(Processor.CONCURRENT).toJson()
	})


	// 量子处理器
	create.sequenced_assembly(Processor.QUANTUM, [
		"advanced_ae:quantum_alloy"
	], [
		vintageimprovements.curving(Incomplete.QUANTUM, [
			Incomplete.QUANTUM
		]).itemAsHead("advanced_ae:quantum_processor_press"),
		create.deploying(Print.QUANTUM, [
			Incomplete.QUANTUM,
			"cmi:single_crystal_silicon"
		]),
		create.deploying(Print.QUANTUM, [
			Incomplete.QUANTUM,
			"ae2:printed_silicon"
		]),
		create.deploying(Print.QUANTUM, [
			Incomplete.QUANTUM,
			"cmi:redstone_wire"
		]),
		vintageimprovements.laser_cutting(Print.QUANTUM,
			Incomplete.QUANTUM
		).energy(4000).maxChargeRate(1000)
	]).transitionalItem(Print.QUANTUM)
		.loops(1)

	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"bottom": Ingredient.of("cmi:single_crystal_silicon").toJson(),
			"middle": Ingredient.of(Print.QUANTUM).toJson(),
			"top": Ingredient.of("cmi:inscribed_silicon").toJson()
		},
		"mode": "press",
		"result": Item.of(Processor.QUANTUM).toJson()
	}).id("advanced_ae:quantum_processor")

	// 逻辑电路板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:ingots/electrum").toJson(),
			"top": Ingredient.of("ae2:logic_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of(Print.LOGIC).toJson()
	}).id("ae2:inscriber/logic_processor_print")

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
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:ingots/etrium").toJson(),
			"top": Ingredient.of("ae2:engineering_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of(Print.ENGINEERING).toJson()
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
		"output": Item.of(Print.ENGINEERING, 9).toJson()
	}).id("expatternprovider:cutter/engineering")

	// 并发电路板
	event.custom({
		"type": "ae2:inscriber",
		"ingredients": {
			"middle": Ingredient.of("#forge:gems/entro").toJson(),
			"top": Ingredient.of("cmi:concurrent_processor_press").toJson()
		},
		"mode": "inscribe",
		"result": Item.of(Print.CONCURRENT).toJson()
	})

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
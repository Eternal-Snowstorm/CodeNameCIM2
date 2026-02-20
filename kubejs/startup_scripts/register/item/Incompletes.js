StartupEvents.registry("item", (event) => {
	/**
	 * @param {string} name 注册ID
	 * @param {boolean} isSequencedAssembly 是否是序列物品
	 * @returns 
	 */
	function addItem(name, isSequencedAssembly) {
		if (isSequencedAssembly === undefined) {
			return event.create(`${global.namespace}:incomplete_${name}`, "create:sequenced_assembly")
		} else if (isSequencedAssembly) {
			return event.create(`${global.namespace}:incomplete_${name}`, "create:sequenced_assembly")
		} else {
			return event.create(`${global.namespace}:incomplete_${name}`)
		}
	}

	/**
	 * @param {string} name 注册ID
	 * @param {boolean} isSequencedAssembly 是否是序列物品
	 * @returns 
	 */
	function addIncompleteItem(name, isSequencedAssembly) {
		if (isSequencedAssembly === undefined) {
			return event.create(`${global.namespace}:incomplete_${name}`, "create:sequenced_assembly")
				.texture(`${global.namespace}:item/material/incomplete/${name}`)
		} else if (isSequencedAssembly) {
			return event.create(`${global.namespace}:incomplete_${name}`, "create:sequenced_assembly")
				.texture(`${global.namespace}:item/material/incomplete/${name}`)
		} else {
			return event.create(`${global.namespace}:incomplete_${name}`)
				.texture(`${global.namespace}:item/material/incomplete/${name}`)
		}
	}

	addIncompleteItem("advanced_control_circuit")
	addIncompleteItem("elite_control_circuit")
	addIncompleteItem("ultimate_control_circuit")
	addIncompleteItem("electron_tube")
	addIncompleteItem("upgrade_augment_1")
	addIncompleteItem("upgrade_augment_2")
	addIncompleteItem("upgrade_augment_3")
	addIncompleteItem("upgrade_augment_4")
	addIncompleteItem("upgrade_augment_5")
	addIncompleteItem("upgrade_augment_6")
	addIncompleteItem("upgrade_augment_7")
	addIncompleteItem("upgrade_augment_8")
	addIncompleteItem("aviation_cell")
	addIncompleteItem("gas_container")
	addIncompleteItem("nuke_cooler")
	addIncompleteItem("notor_gizmo")
	addIncompleteItem("motor_rotor")

	// 飞轮
	addItem("flywheel")
		.parentModel("create:block/flywheel/item")

	// 蒸汽引擎
	addItem("steam_engine")
		.parentModel("create:block/steam_engine/item")

	// 未完成构件零件
	addItem("mekanism_mechanism_part")
		.texture(`${global.namespace}:item/mechanism/part/mekanism`)
	addItem("quantum_mechanism_part")
		.texture(`${global.namespace}:item/mechanism/part/quantum`)
	addItem("space_mechanism_part")
		.texture(`${global.namespace}:item/mechanism/part/space`)

	// ae未完成处理器
	addItem("logic_processor")
		.texture("ae2:item/printed_logic_processor")

	addItem("calculation_processor")
		.texture("ae2:item/printed_calculation_processor")

	addItem("engineering_processor")
		.texture("ae2:item/printed_engineering_processor")

	addItem("quantum_processor")
		.texture("advanced_ae:item/printed_quantum_processor")

	// 扫描器(半成品)
	addItem("scanner")
		.texture("scannable:item/scanner")

	// 扫描模块(半成品)
	addItem("scanning_module")
		.texture("scannable:item/blank_module")

	// 火箭框架(半成品)
	for (let i = 1; i <= 4; i++) {
		addItem(`tier_${i.toString()}_rocket_frame`)
			.modelJson({
				"parent": `cmi:block/rocket/tier${i.toString()}/tier${i.toString()}`
			})
	}
})
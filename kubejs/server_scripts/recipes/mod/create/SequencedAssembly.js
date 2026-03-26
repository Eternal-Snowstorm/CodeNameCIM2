ServerEvents.recipes((event) => {
	let { create, vintageimprovements, cmi } = event.getRecipes()
	let Inc = {
		SCANNER: "cmi:incomplete_scanner",
		SCAMOD: "cmi:incomplete_scanning_module",
		ELETUBE: "cmi:incomplete_electron_tube",
		CAPACITOR: "ad_astra:etrionic_core",
		NUKE: "cmi:incomplete_nuke_cooler",
		GAS: "cmi:incomplete_gas_container",
		GIZMO: "cmi:incomplete_notor_gizmo",
		FLYWHEEL: "cmi:incomplete_flywheel",
		ROTOR: "cmi:incomplete_motor_rotor",
		THERMAL_AUG: "cmi:incomplete_thermal_mechanism_augment"
	}

	let Seq = {
		FLYWHEEL: seqItems("create:flywheel", "#create:shaft", "cmi:incomplete_flywheel")
	}

	/**
	 * 
	 * @param {OutputItem_} result 
	 * @param {InputItem_} ingredient 
	 * @param {InputItem_} transitionalItem 
	 * @returns 
	 */
	function seqItems(result, ingredient, transitionalItem) {
		return {
			RES: result,
			ING: ingredient,
			TRANS: transitionalItem
		}
	}

	/**
	 * 
	 * @param {{
	 *		RES: OutputItem_,
	 *		ING: InputItem_,
	 *  	TRANS: InputItem_
	 *  	}} item
	 * @returns 
	 */
	function SequencedAssemblyRecipe(item) {
		let { RES, ING, TRANS } = item

		this.result = RES
		this.transit = TRANS
		this.ingredient = ING
		this.$sequences = []
		this.loops = 1
		return this
	}
	SequencedAssemblyRecipe.prototype.cutting = function () {
		let sequence = create.cutting(this.transit, this.transit)

		this.$sequences.push(sequence)
		return this
	}
	SequencedAssemblyRecipe.prototype.pressing = function () {
		let sequence = create.pressing(this.transit, this.transit)

		this.$sequences.push(sequence)
		return this
	}
	SequencedAssemblyRecipe.prototype.grinding = function () {
		let sequence = cmi.grinding(this.transit, this.transit)

		this.$sequences.push(sequence)
		return this
	}
	SequencedAssemblyRecipe.prototype.vibrating = function () {
		let sequence = vintageimprovements.vibrating(this.transit, this.transit)

		this.$sequences.push(sequence)
		return this
	}
	SequencedAssemblyRecipe.prototype.pressurizing = function () {
		let sequence = vintageimprovements.pressurizing(this.transit, this.transit)

		this.$sequences.push(sequence)
		return this
	}
	SequencedAssemblyRecipe.prototype.vacuumizing = function () {
		let sequence = vintageimprovements.vacuumizing(this.transit, this.transit)

		this.$sequences.push(sequence)
		return this
	}
	/**
	 * 
	 * @param {Number} energy
	 * @returns 
	 */
	SequencedAssemblyRecipe.prototype.laser_cutting = function (energy) {
		let sequence = vintageimprovements.laser_cutting(this.transit, this.transit)
			.energy(energy).maxChargeRate(1000)

		this.$sequences.push(sequence)
		return this
	}
	/**
	 * 
	 * @param {InputItem_} input 
	 * @returns 
	 */
	SequencedAssemblyRecipe.prototype.deploying = function (input) {
		let sequence = create.deploying(this.transit, [this.transit, input])

		this.$sequences.push(sequence)
		return this
	}
	/**
	 * 
	 * @param {InputItem_} itemAsHead
	 * @returns 
	 */
	SequencedAssemblyRecipe.prototype.curving = function (itemAsHead) {
		let sequence = vintageimprovements.curving(this.transit, this.transit)
			.itemAsHead(itemAsHead)

		this.$sequences.push(sequence)
		return this
	}
	/**
	 * 
	 * @param {Fluid_} fluid
	 * @returns 
	 */
	SequencedAssemblyRecipe.prototype.filling = function (fluid) {
		let sequence = create.filling(this.transit, [this.transit, fluid])

		this.$sequences.push(sequence)
		return this
	}
	/**
	 * 
	 * @param {Number} loops 
	 */
	SequencedAssemblyRecipe.prototype.loop = function (loops) {
		this.loops = loops
		return this
	}
	SequencedAssemblyRecipe.prototype.build = function () {
		let sequences = this.$sequences
		let result = this.result
		let input = this.ingredient
		let loops = this.loops
		let transit = this.transit

		return create.sequenced_assembly(result,
			input,
			sequences
		).loops(loops)
			.transitionalItem(transit)
	}

	// 飞轮
	new SequencedAssemblyRecipe(Seq.FLYWHEEL)
		.deploying("#forge:plates/bronze")
		.loop(4)
		.build()

	// 扫描机兵零件
	create.sequenced_assembly([
		Item.of("alexscaves:notor_gizmo"),
		Item.of("2x alexscaves:notor_gizmo").withChance(0.5),
		Item.of("3x alexscaves:notor_gizmo").withChance(0.1),
	], [
		"#forge:plates/aluminum"
	], [
		create.deploying(Inc.GIZMO, [
			Inc.GIZMO,
			"alexscaves:notor_gizmo"
		]).keepHeldItem(),
		create.deploying(Inc.GIZMO, [
			Inc.GIZMO,
			"#forge:nuggets/azure_neodymium"
		]),
		create.deploying(Inc.GIZMO, [
			Inc.GIZMO,
			"#forge:nuggets/scarlet_neodymium"
		])
	]).loops(1).transitionalItem(Inc.GIZMO)

	create.sequenced_assembly([
		Item.of("alexscaves:notor_gizmo"),
		Item.of("2x alexscaves:notor_gizmo").withChance(0.5),
		Item.of("3x alexscaves:notor_gizmo").withChance(0.1),
	], [
		"#forge:plates/aluminum"
	], [
		create.deploying(Inc.GIZMO, [
			Inc.GIZMO,
			"alexscaves:notor_gizmo"
		]).keepHeldItem(),
		create.deploying(Inc.GIZMO, [
			Inc.GIZMO,
			"#forge:nuggets/scarlet_neodymium"
		]),
		create.deploying(Inc.GIZMO, [
			Inc.GIZMO,
			"#forge:nuggets/azure_neodymium"
		])
	]).loops(1).transitionalItem(Inc.GIZMO)


	// 扫描器
	create.sequenced_assembly("scannable:scanner", [
		"#forge:plates/iron"
	], [
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"immersiveengineering:survey_tools"
		]),
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"thermal:redstone_servo"
		]),
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"#forge:plates/electrum"
		]),
		create.deploying(Inc.SCANNER, [
			Inc.SCANNER,
			"cmi:smart_mechanism"
		])
	]).transitionalItem(Inc.SCANNER).loops(1)
		.id("scannable:scanner")

	// 空白扫描模块
	create.sequenced_assembly("scannable:blank_module", [
		"#forge:plates/plastic"
	], [
		create.deploying(Inc.SCAMOD, [
			Inc.SCAMOD,
			"#forge:plates/electrum"
		]),
		create.deploying(Inc.SCAMOD, [
			Inc.SCAMOD,
			"ae2:printed_silicon"
		]),
		create.pressing(Inc.SCAMOD, [
			Inc.SCAMOD
		]),
		vintageimprovements.laser_cutting(Inc.SCAMOD, [
			Inc.SCAMOD
		]).energy(1000).maxChargeRate(1000)
	]).transitionalItem(Inc.SCAMOD).loops(1)
		.id("scannable:blank_module")

	// 电子管
	create.sequenced_assembly([
		"create:electron_tube"
	], "#forge:plates/iron", [
		create.deploying(Inc.ELETUBE, [
			Inc.ELETUBE,
			"#forge:wires/copper"
		]),
		create.deploying(Inc.ELETUBE, [
			Inc.ELETUBE,
			"create:polished_rose_quartz"
		])
	]).transitionalItem(Inc.ELETUBE).loops(1)
		.id("create:crafting/materials/electron_tube")

	// // Ad电容器
	// create.sequenced_assembly("ad_astra:etrionic_capacitor", [
	// 	"#forge:plates/steel"
	// ], [
	// 	create.deploying(Inc.CAPACITOR, [
	// 		Inc.CAPACITOR,
	// 		"#forge:plates/etrium"
	// 	]),
	// 	create.deploying(Inc.CAPACITOR, [
	// 		Inc.CAPACITOR,
	// 		"cmi:simple_battery"
	// 	]),
	// 	create.deploying(Inc.CAPACITOR, [
	// 		Inc.CAPACITOR,
	// 		"#forge:wires/copper"
	// 	]),
	// 	create.pressing(Inc.CAPACITOR, [
	// 		Inc.CAPACITOR
	// 	])
	// ]).transitionalItem(Inc.CAPACITOR).loops(1)
	// 	.id("ad_astra:etrionic_capacitor")

	// 冷却设备
	create.sequenced_assembly("cmi:nuke_cooler", [
		"#forge:plates/stainless_steel"
	], [
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"alexscaves:polymer_plate"
		]),
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"#forge:plates/platinum"
		]),
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"mekanism:structural_glass"
		])
	]).loops(1).transitionalItem(Inc.NUKE)

	create.sequenced_assembly("cmi:nuke_cooler", [
		"alexscaves:charred_remnant"
	], [
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"alexscaves:polymer_plate"
		]),
		create.deploying(Inc.NUKE, [
			Inc.NUKE,
			"#forge:plates/platinum"
		])
	]).loops(1).transitionalItem(Inc.NUKE)

	// 高压气体容器
	create.sequenced_assembly("steampowered:pressurized_gas_container", [
		"#forge:plates/aluminum"
	], [
		create.deploying(Inc.GAS, [
			Inc.GAS,
			"#forge:glass_panes"
		]),
		vintageimprovements.laser_cutting(Inc.GAS,
			Inc.GAS
		).energy(1000).maxChargeRate(1000),
		create.deploying(Inc.GAS, [
			Inc.GAS,
			"thermal:cured_rubber"
		]),
		create.pressing(Inc.GAS, [
			Inc.GAS
		]),
		vintageimprovements.vacuumizing(Inc.GAS, [
			Inc.GAS
		])
	]).loops(1).transitionalItem(Inc.GAS)

	// 电动机转子
	create.sequenced_assembly("cmi:motor_rotor", [
		"#forge:rods/iron"
	], [
		create.cutting(Inc.ROTOR,
			Inc.ROTOR
		),
		create.deploying(Inc.ROTOR, [
			Inc.ROTOR,
			"#forge:plates/industrial_iron"
		]),
		create.deploying(Inc.ROTOR, [
			Inc.ROTOR,
			"#forge:wires/copper"
		])
	]).transitionalItem(Inc.ROTOR).loops(1)

	// 热力构件组件
	create.sequenced_assembly(Mechanism.THERMAL.AUG, [
		"#forge:gears/constantan"
	], [
		create.deploying(Inc.THERMAL_AUG, [
			Inc.THERMAL_AUG,
			"thermal:rf_coil"
		]),
		create.deploying(Inc.THERMAL_AUG, [
			Inc.THERMAL_AUG,
			"thermal:redstone_servo"
		]),
		create.deploying(Inc.THERMAL_AUG, [
			Inc.THERMAL_AUG,
			"#forge:plates/vanadium"
		]),
		create.cutting(Inc.THERMAL_AUG,
			Inc.THERMAL_AUG
		)
	]).transitionalItem(Inc.THERMAL_AUG).loops(1)
})
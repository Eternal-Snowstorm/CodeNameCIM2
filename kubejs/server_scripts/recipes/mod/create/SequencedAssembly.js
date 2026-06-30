ServerEvents.recipes((event) => {
	let { create, vintageimprovements, cmi } = event.getRecipes()

	/**
	 * 
	 * @param {OutputItem_} output 
	 * @param {InputItem_} input 
	 * @param {InputItem_} tran 
	 * @returns 
	 */
	function seqItems(output, input, tran) {
		return {
			RES: output,
			ING: input,
			TRANS: tran
		}
	}

	/**
	 * 
	 * @param {{
	 *		RES: OutputItem_,
	 *		ING: InputItem_,
	 *  	TRANS: InputItem_
	 *  }} item
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
	SequencedAssemblyRecipe.prototype.laserCutting = function (energy) {
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

	let Seq = {
		FLYWHEEL: seqItems("create:flywheel", "#create:shaft", "cmi:incomplete_flywheel"),
		GIZMO: seqItems("alexscaves:notor_gizmo", "#forge:plates/aluminum", "cmi:incomplete_notor_gizmo"),
		E_TUBE: seqItems("create:electron_tube", "#forge:plates/iron", "cmi:incomplete_electron_tube"),
		R_TUBE: seqItems("cmi:resonant_tube", "#forge:plates/brass", "cmi:incomplete_resonant_tube"),
		CAPACITOR: seqItems("ad_astra:etrionic_capacitor", "#forge:plates/steel", "ad_astra:etrionic_core"),
		COOLER: seqItems("cmi:nuke_cooler", "#forge:plates/stainless_steel", "cmi:incomplete_nuke_cooler"),
		NUKE: seqItems("cmi:nuke_cooler", "alexscaves:charred_remnant", "cmi:incomplete_nuke_cooler"),
		GAS: seqItems("steampowered:pressurized_gas_container", "#forge:plates/aluminum", "cmi:incomplete_gas_container"),
		ROTOR: seqItems("cmi:motor_rotor", "#forge:rods/iron", "cmi:incomplete_motor_rotor"),
		THERMAL_AUG: seqItems(Mechanisms.THERMAL.AUG, "#forge:gears/constantan", "cmi:incomplete_thermal_mechanism_augment"),
		DIAMOND_FROM_COAL: seqItems("minecraft:diamond", "#forge:storage_blocks/coal", "minecraft:coal"),
		CONTROL: seqItems("create_connected:control_chip", "#forge:plates/copper", "create_connected:incomplete_control_chip"),
		LOGIC: seqItems("ae2:logic_processor", "#forge:ingots/electrum", "cmi:incomplete_logic_processor"),
		CALCULATION: seqItems("ae2:calculation_processor", "#forge:gems/certus_quartz", "cmi:incomplete_calculation_processor"),
		ENGINEERING: seqItems("ae2:engineering_processor", "#forge:ingots/etrium", "cmi:incomplete_engineering_processor"),
		CONCURRENT: seqItems("cmi:concurrent_processor", "#forge:gems/entro", "cmi:incomplete_concurrent_processor"),
		QUANTUM: seqItems("advanced_ae:quantum_processor", "advanced_ae:quantum_alloy", "cmi:incomplete_quantum_processor")
	}

	// 飞轮
	new SequencedAssemblyRecipe(Seq.FLYWHEEL)
		.deploying("#forge:plates/bronze")
		.loop(4)
		.build()

	// 电子管
	new SequencedAssemblyRecipe(Seq.E_TUBE)
		.deploying("#forge:wires/redstone")
		.deploying("create:polished_rose_quartz")
		.build()
		.id("create:crafting/materials/electron_tube")

	// 共振管
	new SequencedAssemblyRecipe(Seq.R_TUBE)
		.deploying("#forge:wires/amethyst_bronze")
		.deploying("create_rns:polished_resonant_amethyst")
		.build()

	// Ad电容器
	new SequencedAssemblyRecipe(Seq.CAPACITOR)
		.deploying("#forge:plates/etrium")
		.deploying("#forge:plates/vanadium")
		.deploying("#forge:wires/copper")
		.pressing()
		.build()
		.id("ad_astra:etrionic_capacitor")

	// 冷却设备
	new SequencedAssemblyRecipe(Seq.COOLER)
		.deploying("alexscaves:polymer_plate")
		.deploying("#forge:plates/platinum")
		.deploying("mekanism:structural_glass")
		.build()

	new SequencedAssemblyRecipe(Seq.NUKE)
		.deploying("alexscaves:polymer_plate")
		.deploying("#forge:plates/platinum")
		.build()

	// 高压气体容器
	new SequencedAssemblyRecipe(Seq.GAS)
		.deploying("#forge:glass_panes")
		.laserCutting(1000)
		.deploying("thermal:cured_rubber")
		.pressing()
		.vacuumizing()
		.build()

	// 电动机转子
	new SequencedAssemblyRecipe(Seq.ROTOR)
		.cutting()
		.deploying("#forge:plates/industrial_iron")
		.deploying("#forge:wires/copper")
		.build()

	// 热力构件组件
	new SequencedAssemblyRecipe(Seq.THERMAL_AUG)
		.deploying("thermal:rf_coil")
		.deploying("thermal:redstone_servo")
		.deploying("#forge:plates/vanadium")
		.cutting()
		.build()

	// 神秘戴尔芒德
	new SequencedAssemblyRecipe(Seq.DIAMOND_FROM_COAL)
		.pressing()
		.loop(114514)
		.build()

	// 控制芯片
	new SequencedAssemblyRecipe(Seq.CONTROL)
		.deploying("#forge:plates/redstone")
		.deploying("ae2:printed_silicon")
		.deploying("cmi:redstone_wire")
		.laserCutting(4000)
		.build()
		.id("create_connected:sequenced_assembly/control_chip")

	// 逻辑处理器
	new SequencedAssemblyRecipe(Seq.LOGIC)
		.curving("ae2:logic_processor_press")
		.deploying("create:polished_rose_quartz")
		.deploying("ae2:printed_silicon")
		.deploying("cmi:redstone_wire")
		.laserCutting(4000)
		.build()

	// 计算处理器
	new SequencedAssemblyRecipe(Seq.CALCULATION)
		.curving("ae2:calculation_processor_press")
		.deploying("#forge:ingots/hop_graphite")
		.deploying("ae2:printed_silicon")
		.deploying("cmi:redstone_wire")
		.laserCutting(4000)
		.build()

	// 工程处理器
	new SequencedAssemblyRecipe(Seq.ENGINEERING)
		.curving("ae2:engineering_processor_press")
		.deploying("#forge:silicon")
		.deploying("ae2:printed_silicon")
		.deploying("cmi:redstone_wire")
		.laserCutting(4000)
		.build()

	// 并发处理器
	new SequencedAssemblyRecipe(Seq.CONCURRENT)
		.curving("cmi:concurrent_processor_press")
		.deploying("cmi:silicon_carbide")
		.deploying("ae2:printed_silicon")
		.deploying("cmi:redstone_wire")
		.laserCutting(4000)
		.build()

	// 量子处理器
	new SequencedAssemblyRecipe(Seq.QUANTUM)
		.curving("advanced_ae:quantum_processor_press")
		.deploying("cmi:enriched_silicon")
		.deploying("ae2:printed_silicon")
		.deploying("cmi:redstone_wire")
		.laserCutting(4000)
		.build()

	// 列车帽
	CmiGlobal.DYE_COLOR_GROUP.forEach((color) => {
		let hat = seqItems(`railways:${color}_conductor_cap`, `minecraft:${color}_wool`, `railways:${color}_incomplete_conductor_cap`)
		new SequencedAssemblyRecipe(hat)
			.deploying(Mechanisms.RAILWAY.COM)
			.deploying("#forge:string")
			.build()
			.id(`railways:sequenced_assembly/${color}_conductor_cap`)
	})
})
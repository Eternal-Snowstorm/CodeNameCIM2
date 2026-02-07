ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes
	let Inc = {
		MEKA: "cmi:incomplete_mekanism_mechanism_part",
		ADA: "cmi:incomplete_space_mechanism_part",
		QUANT: "cmi:incomplete_quantum_mechanism_part"
	}
	// 基础
	kubejs.shapeless("4x cmi:basic_mechanism_part", [
		"minecraft:flint",
		"minecraft:clay_ball"
	])

	// 机械
	kubejs.shapeless("4x cmi:mechanical_mechanism_part", [
		"create:cogwheel",
		"#forge:ingots/andesite_alloy"
	])

	// 工程
	kubejs.shapeless("4x cmi:engineering_mechanism_part", [
		"#forge:plates/copper",
		"immersiveengineering:component_iron"
	])

	// 通量
	kubejs.shapeless("4x cmi:flux_mechanism_part", [
		"thermal:rf_coil",
		"#forge:plates/invar"
	])

	// 量子
	create.sequenced_assembly("cmi:quantum_mechanism_part", [
		"#forge:nuggets/etrium"
	], [
		create.deploying(Inc.QUANTUM, [
			Inc.QUANTUM,
			"#forge:gems/fluix"
		]),
		create.deploying(Inc.QUANTUM, [
			Inc.QUANTUM,
			"alexscaves:notor_gizmo"
		]),
		vintageimprovements.laser_cutting(Inc.QUANTUM, [
			Inc.QUANTUM
		]).energy(4000).maxChargeRate(4000)
	]).loops(1).transitionalItem(Inc.QUANTUM)

	// 通用
	create.sequenced_assembly("8x cmi:mekanism_mechanism_part", [
		"#forge:nuggets/etrium"
	], [
		create.deploying(Inc.MEKA, [
			Inc.MEKA,
			"immersiveengineering:component_electronic_adv"
		]),
		create.deploying(Inc.MEKA, [
			Inc.MEKA,
			"ae2:printed_silicon"
		]),
		vintageimprovements.laser_cutting(Inc.MEKA, [
			Inc.MEKA
		]).energy(4000).maxChargeRate(4000)
	]).loops(1).transitionalItem(Inc.MEKA)

	// 太空
	create.sequenced_assembly("4x cmi:space_mechanism_part", [
		"#forge:nuggets/tungsten"
	], [
		create.deploying(Inc.ADA, [
			Inc.ADA,
			"ad_astra:etrionic_capacitor"
		]),
		vintageimprovements.laser_cutting(Inc.ADA, [
			Inc.ADA
		]).energy(4000).maxChargeRate(4000)
	]).loops(1).transitionalItem(Inc.ADA)
})
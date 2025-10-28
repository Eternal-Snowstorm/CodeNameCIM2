ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes

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

	// 通用
	create.sequenced_assembly("4x cmi:mekanism_mechanism_part", [
		"#forge:nuggets/etrium"
	], [
		create.deploying("#forge:nuggets/etrium", [
			"#forge:nuggets/etrium",
			"immersiveengineering:component_electronic_adv"
		]),
		create.deploying("#forge:nuggets/etrium", [
			"#forge:nuggets/etrium",
			"ae2:printed_silicon"
		]),
		vintageimprovements.laser_cutting("#forge:nuggets/etrium", [
			"#forge:nuggets/etrium"
		]).energy(4000).maxChargeRate(4000)
	]).loops(1).transitionalItem(IngredUtils.getFirstItemId("#forge:nuggets/etrium"))

	// 太空
	create.sequenced_assembly("4x cmi:space_mechanism_part", [
		"#forge:nuggets/tungsten"
	], [
		create.deploying("#forge:nuggets/tungsten", [
			"#forge:nuggets/tungsten",
			"ad_astra:etrionic_capacitor"
		]),
		vintageimprovements.laser_cutting("#forge:nuggets/tungsten", [
			"#forge:nuggets/tungsten"
		]).energy(4000).maxChargeRate(4000)
	]).loops(1).transitionalItem(IngredUtils.getFirstItemId("#forge:nuggets/tungsten"))
})
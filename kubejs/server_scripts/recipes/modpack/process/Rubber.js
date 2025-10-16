ServerEvents.recipes((event) => {
	let { tconstruct, farmersdelight, create } = event.recipes

	// 植物胶乳
	create.compacting([
		Fluid.of("thermal:latex", 50),
		"farmersdelight:tree_bark"
	], "thermal:rubberwood_log")

	create.compacting([
		Fluid.of("thermal:latex", 50),
		"farmersdelight:tree_bark"
	], "thermal:rubberwood_wood")

	create.compacting(Fluid.of("thermal:latex", 50), [
		"thermal:stripped_rubberwood_log"
	])

	create.compacting(Fluid.of("thermal:latex", 50), [
		"thermal:stripped_rubberwood_wood"
	])

	create.compacting([
		Fluid.of("thermal:latex", 50),
		"farmersdelight:tree_bark"
	], "cmi:rubber_tree_bark")

	// 橡胶板
	create.pressing("cmi:rubber_plate", [
		"thermal:rubber"
	])

	farmersdelight.cutting([
		Item.of("cmi:rubber_plate", 2),
		Item.of("cmi:rubber_plate").withChance(0.25)
	], [
		"thermal:rubber"
	], "#forge:tools/knives")

	// 橡胶树皮
	farmersdelight.cutting([
		"thermal:stripped_rubberwood_log",
		"cmi:rubber_tree_bark"
	], "thermal:rubberwood_log", "#minecraft:axes")

	farmersdelight.cutting([
		"thermal:stripped_rubberwood_wood",
		"cmi:rubber_tree_bark",
		Item.of("cmi:rubber_tree_bark").withChance(0.1)
	], "thermal:rubberwood_wood", "#minecraft:axes")

	create.cutting([
		"thermal:stripped_rubberwood_log",
		"cmi:rubber_tree_bark"
	], "thermal:rubberwood_log")

	create.cutting([
		"thermal:stripped_rubberwood_wood",
		"cmi:rubber_tree_bark",
		Item.of("cmi:rubber_tree_bark").withChance(0.1)
	], "thermal:rubberwood_wood")

	// 橡胶
	create.compacting("2x thermal:rubber", [
		Fluid.of("thermal:latex", 500)
	])

	// 二氧化硫(硫化剂)
	event.custom({
		"type": "vintageimprovements:pressurizing",
		"secondaryFluidOutput": 0,
		"heatRequirement": "heated",
		"ingredients": [
			Ingredient.of("#forge:gems/sulfur").toJson(),
			Fluid.of("minecraft:water", 500).toJson()
		],
		"results": [
			Fluid.of("mekanism:sulfur_dioxide", 500).toJson()
		],
		"processingTime": 400
	}).id("vintageimprovements:pressurizing/sulfur_dioxide")

	// 硫化
	create.mixing(Fluid.of("cmi:cured_rubber", 500), [
		"#forge:dusts/sulfur",
		"#forge:plates/rubber"
	]).heatRequirement(global.HeatLevel["grilled"])

	create.mixing(Fluid.of("cmi:cured_rubber", 1000), [
		"2x thermal:rubber",
		"#forge:dusts/sulfur",
		Fluid.of("cmi:fatty_acid", 250)
	]).heated()

	// 冷却
	tconstruct.casting_table("thermal:cured_rubber")
		.fluid(Fluid.of("cmi:cured_rubber", 250))
		.cooling_time(20)

	tconstruct.casting_basin("thermal:cured_rubber_block")
		.fluid(Fluid.of("cmi:cured_rubber", 1000))
		.cooling_time(20 * 4)

	// 硫粉
	create.milling("thermal:sulfur_dust", [
		"#forge:gems/sulfur"
	])
})
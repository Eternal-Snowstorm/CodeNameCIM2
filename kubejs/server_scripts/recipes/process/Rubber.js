ServerEvents.recipes((event) => {
	let { tconstruct, farmersdelight, create, vintageimprovements } = event.recipes

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

	// 橡胶
	ratatouille.squeezing("2x thermal:rubber", [
		Fluid.of("thermal:latex", 500),
		"ratatouille:sausage_casing"
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
	create.mixing(Fluid.of("cmi:cured_rubber", 1000), [
		"#forge:dusts/sulfur",
		"#forge:plates/rubber"
	]).heated()

	// 冷却
	tconstruct.casting_table("thermal:cured_rubber")
		.fluid(Fluid.of("cmi:cured_rubber", 250))
		.cooling_time(20)
})
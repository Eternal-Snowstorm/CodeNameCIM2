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

	// 植物胶乳
	tconstruct.melting(Fluid.of("thermal:latex", 250))
		.ingredient("#forge:plates/rubber")
		.time(60)
		.temperature(800)

	vintageimprovements.pressurizing(Fluid.of("cmi:cured_rubber", 500), [
		Fluid.of("mekanism:sulfur_dioxide", 250),
		Fluid.of("thermal:latex", 250)
	]).heated()

	tconstruct.casting_table("thermal:cured_rubber")
		.fluid(Fluid.of("cmi:cured_rubber", 250))
		.cooling_time(20)
})
ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// Si
	mekanism.reaction(
		"#forge:glass",
		MekanismType.Gas.of("mekanism:hydrogen", 250),
		Fluid.of("cmi:tetrachlorosilane", 500),
		"cmi:single_crystal_silicon",
		MekanismType.Gas.of("mekanism:hydrogen_chloride", 500)
	).duration(400).energyRequired(200)

	// HDPE
	mekanism.reaction(
		"thermal_extra:polyolefin_plate",
		MekanismType.Gas.of("mekanism:oxygen", 10),
		Fluid.of("mekanism:ethene", 50),
		"mekanism:hdpe_pellet"
	).duration(400).energyRequired(200)

	// 核废料2
	mekanism.reaction(
		'mekanism:reprocessed_fissile_fragment',
		MekanismType.Gas.of("mekanism:fissile_fuel", 100),
		Fluid.of("minecraft:water", 10000),
		'mekanism:reprocessed_fissile_fragment',
		MekanismType.Gas.of("mekanism:nuclear_waste", 10)
	).duration(400).energyRequired(0)
})
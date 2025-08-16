ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 铂碎片处理
	mekanism.purifying(
		"cmi:platinum_crystal_nucleus",
		"4x cmi:platinum_shard",
		IngredientUtils.ofMekanismGas("mekanism:hydrogen", 500)
	)

	// Si
	mekanism.reaction(
		"#forge:glass",
		IngredientUtils.ofMekanismGas("mekanism:hydrogen", 250),
		Fluid.of("cmi:tetrachlorosilane", 500),
		"cmi:single_crystal_silicon",
		IngredientUtils.ofMekanismGas("mekanism:hydrogen_chloride", 500)
	).duration(400).energyRequired(200)

	// HDPE
	mekanism.reaction(
		"thermal_extra:polyolefin_plate",
		IngredientUtils.ofMekanismGas("mekanism:oxygen", 10),
		Fluid.of("mekanism:ethene", 50),
		"mekanism:hdpe_pellet",
	).duration(400).energyRequired(200)
})
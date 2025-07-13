ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 铂碎片处理
	mekanism.purifying(
		"cmi:platinum_crystal_nucleus",
		"4x cmi:platinum_shard",
		{ gas: "mekanism:hydrogen", amount: 500 }
	)

	// Si
	mekanism.reaction(
		"#forge:glass",
		{ gas: "mekanism:hydrogen", amount: 250 },
		Fluid.of("cmi:tetrachlorosilane", 500),
		"cmi:single_crystal_silicon",
		{ gas: "mekanism:hydrogen_chloride", amount: 500 }
	).duration(400).energyRequired(200)
})
ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	// 未成形碳纳米管
	mekanism.reaction(
		"cmi:graphene",
		MekType.Gas.of("mekanism:oxygen", 10),
		Fluid.of("cmi:polymeric_carbon_solution", 50),
		"cmi:incomplete_carbon_nanotube"
	).duration(60).energyRequired(1000)

	// 锇
	mekanism.reaction(
		"#forge:dusts/osmium",
		MekType.Gas.of("mekanism:hydrofluoric_acid", 10),
		Fluid.of("cmi:hydrochloric_acid", 50),
		"cmi:infuse_osmium"
	).duration(60).energyRequired(1000)

	// 铀黄饼
	mekanism.reaction(
		"#forge:ingots/uranium",
		MekType.Gas.of("cmi:fissile_uranium_compound", 100),
		Fluid.of("minecraft:water", 1000),
		"mekanism:yellow_cake_uranium"
	).energyRequired(1000).duration(60)

	// 聚合物板
	mekanism.reaction(
		"#forge:plates/hdpe",
		MekType.Gas.of("cmi:radon", 100),
		Fluid.of("minecraft:water", 1000),
		"alexscaves:polymer_plate",
	).energyRequired(1000).duration(60)
})
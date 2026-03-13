ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.getRecipes()

	// 乙醇
	immersiveengineering.fermenter(
		"#forge:fermentable",
		Fluid.of("immersiveengineering:ethanol", 100),
		Item.of("createaddition:biomass").withChance(0.1)
	).energy(2400)

	// 醋
	immersiveengineering.fermenter(
		"#forge:seeds/rice",
		Fluid.of("cmi:vinegar", 500),
		Item.of("createaddition:biomass").withChance(0.1)
	).energy(1200)
})
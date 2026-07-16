ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	// 氧化铀
	mekanism.oxidizing(
		"#forge:dusts/uranium",
		"mekanism:uranium_oxide"
	).id("mekanism:processing/uranium/uranium_oxide")

	// 裂变燃料
	mekanism.oxidizing(
		"mekanism:yellow_cake_uranium",
		"200x mekanism:fissile_fuel"
	)

	mekanism.oxidizing(
		"alexscaves:toxic_paste",
		MekType.Gas.of("cmi:refined_nuke_waste", 200)
	)
})
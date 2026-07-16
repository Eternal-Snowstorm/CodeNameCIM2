ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	// 富集合金
	mekanism.metallurgic_infusing(
		"cmi:enriched_alloy",
		"#forge:ingots/aluminum",
		"cmi:cobalt_electrolyte"
	)

	// 碳纳米管
	mekanism.metallurgic_infusing(
		"cmi:carbon_nanotube",
		"cmi:incomplete_carbon_nanotube",
		"cmi:infuse_osmium"
	)

	// 月壤
	mekanism.metallurgic_infusing(
		"mekanism:alloy_infused",
		"#forge:ingots/chromium",
		MekType.InfuseType.of("mekanism:redstone", 20)
	).id("mekanism:metallurgic_infusing/alloy/infused")
})
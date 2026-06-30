ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	// 富集合金
	mekanism.metallurgic_infusing(
		"cmi:enriched_alloy",
		"#forge:ingots/aluminum",
		"cmi:cobalt_electrolyte"
	)
})
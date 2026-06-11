ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.enriching("mekanism:enriched_carbon",
		"#forge:dusts/hop_graphite"
	).id("mekanism:enriching/enriched/carbon")

	mekanism.enriching("mekanism:enriched_redstone",
		"cmi:electrolized_redstone"
	).id("mekanism:enriching/enriched/redstone")
})
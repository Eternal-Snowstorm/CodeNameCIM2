ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.compressing("cmi:reinforced_composite_plate",
		"cmi:incomplete_reinforced_composite_plate",
		"2x mekanism:osmium"
	)
})
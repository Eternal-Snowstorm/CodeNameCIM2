ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.activating(
		"cmi:helium_3",
		"mekanism:tritium"
	)
})
ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	//
	mekanism.centrifuging(
		"mekanism:uranium_hexafluoride",
		"cmi:fissile_uranium_compound"
	).id("mekanism:processing/uranium/fissile_fuel")

	// 氚
	mekanism.centrifuging(
		"cmi:refined_nuke_waste",
		"mekanism:tritium"
	)
})
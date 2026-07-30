ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.compressing("cmi:reinforced_composite_plate",
		"cmi:incomplete_reinforced_composite_plate",
		"2x mekanism:osmium"
	)

	mekanism.compressing("cmi:chaotic_void_dust",
		"#forge:dusts/void",
		"1x mekanism:osmium"
	)
})
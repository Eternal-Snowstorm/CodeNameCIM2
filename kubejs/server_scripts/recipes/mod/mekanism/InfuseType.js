ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.infusion_conversion(
		"#forge:dusts/etrium",
		"cmi:etrium"
	)
})
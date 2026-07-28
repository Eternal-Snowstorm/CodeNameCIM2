ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.infusion_conversion(
		"#forge:dusts/etrium",
		"cmi:etrium"
	)
	mekanism.infusion_conversion(
		"cmi:cobalt_electrolyte",
		"cmi:cobalt_electrolyte"
	)
	mekanism.infusion_conversion(
		"cmi:infuse_osmium",
		"cmi:infuse_osmium"
	)

	mekanism.infusion_conversion(
		"advanced_ae:quantum_infused_dust",
		"cmi:infuse_quantum"
	)
})
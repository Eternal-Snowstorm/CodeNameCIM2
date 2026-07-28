ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.metallurgic_infusing(
		"cmi:entro_crystal",
		"ae2:charged_certus_quartz_crystal",
		"cmi:etrium"
	)

	mekanism.metallurgic_infusing(
		"cmi:silicon_carbide",
		"ae2:silicon",
		"mekanism:carbon"
	)
})
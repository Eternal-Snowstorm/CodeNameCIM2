ServerEvents.recipes((event) => {
	let { thermal_extra } = event.getRecipes()

	thermal_extra.fluid_mixer(Fluid.of("cmi:sapphire_solution", 200), [
		"#forge:dusts/sapphire",
		Fluid.of("cmi:crystal_etching_solution", 100)
	]).energy(25000)
})
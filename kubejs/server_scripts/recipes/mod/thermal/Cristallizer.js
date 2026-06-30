ServerEvents.recipes((event) => {
	let { thermal } = event.getRecipes()

	// 纯净石英
	thermal.crystallizer("cmi:pure_quartz_prism", [
		"#forge:dusts/pure_quartz",
		Fluid.of("cmi:crystal_catalyt", 200)
	]).energy(4000)

	thermal.crystallizer("2x cmi:dreamcore_ore", [
		"cmi:dreamcore_seed",
		Fluid.of("cmi:crystal_catalyt", 200)
	]).energy(4000)
})

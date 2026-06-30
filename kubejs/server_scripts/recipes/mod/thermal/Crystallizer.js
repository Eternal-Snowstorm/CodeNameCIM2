ServerEvents.recipes((event) => {
	let { thermal } = event.getRecipes()

	// 钴电解质
	thermal.crystallizer("cmi:cobalt_electrolyte", [
		"#forge:dusts/cobalt",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	])
})
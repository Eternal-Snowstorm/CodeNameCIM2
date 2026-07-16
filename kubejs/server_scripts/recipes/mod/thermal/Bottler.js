ServerEvents.recipes((event) => {
	let { thermal } = event.getRecipes()

	// 活化石磨
	thermal.bottler("cmi:activated_graphite_chunk", [
		"immersiveengineering:ingot_hop_graphite",
		Fluid.of("immersiveengineering:redstone_acid", 100)
	])

	// 填充燃料棒
	thermal.bottler("cmi:filled_fuel_rod", [
		"cmi:empty_fuel_rod",
		Fluid.of("mekanism:uranium_hexafluoride", 100)
	])
})
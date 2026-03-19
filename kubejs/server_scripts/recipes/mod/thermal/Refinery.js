ServerEvents.recipes((event) => {
	let { thermal, thermal_extra } = event.getRecipes()

	thermal.refinery([
		Fluid.of("minecraft:lava", 750),
		Fluid.of("tconstruct:ichor", 250)
	], Fluid.of("tconstruct:magma", 1000))
		.energy(5000)

	thermal_extra.advanced_refinery([
		Fluid.of("minecraft:lava", 750),
		Fluid.of("tconstruct:ichor", 250)
	], Fluid.of("tconstruct:magma", 1000))
		.energy(5000)
})
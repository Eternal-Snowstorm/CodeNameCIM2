ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.fluid_burn(Fluid.of("minecraft:lava", 10), 200)
})
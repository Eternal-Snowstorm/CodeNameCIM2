ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.mixing(Fluid.of("immersiveengineering:redstone_acid", 250), [
		"#forge:dusts/redstone",
		Fluid.of("minecraft:water", 250)
	]).heated()
})
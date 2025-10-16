ServerEvents.recipes((event) => {
	let { create, immersiveengineering, thermal } = event.recipes

	// 光合反应液
	create.mixing(Fluid.of("cmi:photosyn_fluid", 125), [
		Fluid.of("minecraft:water", 500),
		"16x #minecraft:leaves",
		"16x createaddition:biomass"
	]).heated()

	create.mixing(Fluid.of("cmi:photosyn_fluid", 125), [
		Fluid.of("minecraft:water", 500),
		"32x #minecraft:saplings",
		"16x createaddition:biomass"
	]).heated()

	// 少量氧气
	let o = IngredientUtils.getFirstFluidId("forge:oxygen")
	thermal.refinery(Fluid.of(o, 10), [
		Fluid.of("cmi:photosyn_fluid", 500)
	]).energy(2000)
})
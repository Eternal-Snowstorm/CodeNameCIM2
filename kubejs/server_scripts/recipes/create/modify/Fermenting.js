ServerEvents.recipes((event) => {
	let { createdieselgenerators } = event.recipes

	let biodiesel = Fluid.of("createdieselgenerators:biodiesel")

	createdieselgenerators.basin_fermenting(biodiesel.withAmount(100), [
		"8x minecraft:sugar",
		Fluid.of("immersiveengineering:creosote", 100)
	]).processingTime(20 * 10).heatRequirement("grilled")
})
ServerEvents.recipes((event) => {
	let { createdieselgenerators } = event.recipes

	createdieselgenerators.distillation([
		Fluid.of("cmi:molten_bitumen", 100),
		Fluid.of("thermal:heavy_oil", 100),
		Fluid.of("cmi:lubricating_oil", 100),
		Fluid.of("createdieselgenerators:diesel", 100),
		Fluid.of("cmi:kerosene", 100),
		Fluid.of("cmi:naphtha", 100)
	], Fluid.of("ad_astra:oil", 1000))
		.heatRequirement("heated")
		.id("createdieselgenerators:distillation/crude_oil")
})
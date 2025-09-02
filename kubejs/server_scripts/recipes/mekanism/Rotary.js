ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// mekanism.rotary()
	// 	.fluidInput(IngredientUtils.getFirstFluidId("forge:brine"))
	mekanism.rotary()
		.fluidInput(Fluid.of("cmi:fluid_nitroglycerine", 200))
		.gasOutput("200x cmi:nitroglycerine")
		.fluidOutput(Fluid.of("cmi:fluid_nitroglycerine", 200))
		.gasInput("200x cmi:nitroglycerine")
})
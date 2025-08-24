ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	mekanism.rotary()
		.fluidInput(IngredientUtils.getFirstFluidId("forge:brine"))
})
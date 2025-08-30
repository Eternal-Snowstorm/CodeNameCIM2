JEIAddedEvents.registerRecipes((event) => {
	let acceleratorTypeId = ResourceLocation.parse("cmi:accelerator")
	let recipeBuilder = event.custom(acceleratorTypeId)

	recipeBuilder.add({
		input: Item.of("minecraft:bucket"),
		output: Item.of("minecraft:apple")
	})
})
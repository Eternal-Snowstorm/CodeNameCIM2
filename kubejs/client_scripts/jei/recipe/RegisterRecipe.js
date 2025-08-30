JEIAddedEvents.registerRecipes((event) => {
	let acceleratorTypeId = ResourceLocation.parse("cmi:accelerator")
	let recipeBuilder = event.custom(acceleratorTypeId)

	addRecipesToJEI("minecraft:bucket", "minecraft:apple")

	function addRecipesToJEI(output, input) {
		return recipeBuilder.add({
			input: input,
			output: output
		})
	}
})
let $CokeOvenRecipe =
	Java.loadClass("blusunrize.immersiveengineering.api.crafting.CokeOvenRecipe")

MBDRecipeTypeEvents.onTransferProxyRecipe("cmi:reinforced_coke_oven", (event) => {
	let recipeEvent = event.getEvent()
	let { proxyRecipe, proxyRecipeId, proxyTypeId, recipeType } = recipeEvent

	if (proxyTypeId !== "immersiveengineering:coke_oven") {
		return
	}

	/**
	 * @type {Internal.CokeOvenRecipe}
	 */
	let recipe = proxyRecipe

	if (!(recipe instanceof $CokeOvenRecipe)) {
		return
	}

	/**
	 * @type {Internal.MBDRecipeSchema$MBDRecipeJS}
	 */
	let mbdRecipe = recipeType.recipeBuilder()

	let creosote = "immersiveengineering:creosote"
	let input = recipe.input.getBaseIngredient()
	let output = recipe.output.get()

	mbdRecipe.inputItems(input)
		.outputItems(output)
		.outputFluids(Fluid.of(creosote, recipe.creosoteOutput))
		.duration(recipe.time)
		.id(proxyRecipeId + "_mbd2un")

	recipeEvent.mbdRecipe = mbdRecipe.buildMBDRecipe()

	recipeEvent.mbdRecipe = mbdRecipe.buildMBDRecipe()
})
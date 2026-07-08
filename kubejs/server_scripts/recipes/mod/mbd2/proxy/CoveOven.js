let $CokeOvenRecipe =
	Java.loadClass("blusunrize.immersiveengineering.api.crafting.CokeOvenRecipe")

MBDRecipeTypeEvents.onTransferProxyRecipe(($) => {
	let event = $.getEvent()
	let { proxyRecipe, proxyRecipeId, proxyTypeId, recipeType } = event

	if (recipeType !== "cmi:reinforced_coke_oven") {
		return
	}
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
	let builder = recipeType.recipeBuilder()
	let creosote = "immersiveengineering:creosote"

	builder.inputItems(recipe.input.getBaseIngredient())
		.outputItems(recipe.output.get())
		.outputFluids(creosote, recipe.creosoteOutput)
		.duration(recipe.time * 0.5)
		.id(proxyRecipeId + "_mbd2un")

	event.mbdRecipe = builder.buildMBDRecipe()
})
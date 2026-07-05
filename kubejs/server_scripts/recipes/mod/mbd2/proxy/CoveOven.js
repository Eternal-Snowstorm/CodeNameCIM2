// let $CokeOvenRecipe =
// 	Java.loadClass("blusunrize.immersiveengineering.api.crafting.CokeOvenRecipe")

// MBDRecipeTypeEvents.onTransferProxyRecipe("cmi:reinforced_coke_oven", (event) => {
// 	let recipeEvent = event.getEvent()
// 	let { proxyRecipe, proxyRecipeId, proxyTypeId, recipeType } = recipeEvent

// 	if (proxyTypeId !== "immersiveengineering:coke_oven") {
// 		return
// 	}

// 	/**
// 	 * @type {Internal.CokeOvenRecipe}
// 	 */
// 	let recipe = proxyRecipe

// 	if (!(recipe instanceof $CokeOvenRecipe)) {
// 		return
// 	}

// 	/**
// 	 * @type {Internal.MBDRecipeSchema$MBDRecipeJS}
// 	 */
// 	let mbdRecipe = recipeType.recipeBuilder()
// 	let creosote = "immersiveengineering:creosote"

// 	mbdRecipe.inputItems(recipe.input.getBaseIngredient())
// 		.outputItems(recipe.output.get())
// 		.outputFluids(creosote, recipe.creosoteOutput)
// 		.duration(recipe.time)
// 		.id(proxyRecipeId + "_mbd2un")

// 	recipeEvent.mbdRecipe = mbdRecipe.buildMBDRecipe()
// })
ServerEvents.recipes(e => {
	e.recipes.cmi.reinforced_coke_oven()
		.inputItems("#minecraft:logs")
		.outputItems("immersiveengineering:coke")
		.outputFluids(Fluid.of("immersiveengineering:creosote", 250))
		.duration(160)
		.id("cim:reinforced_coke_oven/coke")
})
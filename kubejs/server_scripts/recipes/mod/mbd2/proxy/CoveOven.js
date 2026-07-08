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
// 	let builder = recipeType.recipeBuilder()

// 	let creosote = "immersiveengineering:creosote"
// 	let input = recipe.input.getBaseIngredient()
// 	let output = recipe.output.get()

// 	builder.inputItems(input)
// 		.outputItems(output)
// 		.outputFluids(Fluid.of(creosote, recipe.creosoteOutput))
// 		.duration(recipe.time)
// 		.id(proxyRecipeId + "_mbd2un")

// 	recipeEvent.mbdRecipe = builder.buildMBDRecipe()
// })
ServerEvents.recipes(e => {
  const{cmi} = e.recipes
  cmi.reinforced_coke_oven()
    .inputItems("#minecraft:logs")
    .outputItems("minecraft:charcoal")
    .outputFluids(Fluid.of("immersiveengineering:creosote", 250))
    .duration(900)
    .id("cmi:reinforced_coke_oven/charcoal")
  cmi.reinforced_coke_oven()
    .inputItems("minecraft:coal")
    .outputItems("thermal:coal_coke")
    .outputFluids(Fluid.of("immersiveengineering:creosote", 500))
    .duration(1800)
    .id("cmi:reinforced_coke_oven/coal_coke")
  cmi.reinforced_coke_oven()
    .inputItems("minecraft:coal_block")
    .outputItems("thermal:coal_coke_block")
    .outputFluids(Fluid.of("immersiveengineering:creosote", 5000))
    .duration(16200)
    .id("cmi:reinforced_coke_oven/coal_coke_block")
  cmi.reinforced_coke_oven()
    .inputItems("createdieselgenerators:wood_chip")
    .outputItems("mekanism:dust_charcoal")
    .outputFluids(Fluid.of("immersiveengineering:creosote", 125))
    .duration(450)
    .id("cmi:reinforced_coke_oven/dust_charcoal")
})
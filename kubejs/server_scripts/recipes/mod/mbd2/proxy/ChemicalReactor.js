// let $ChemicalRecipe =
// 	Java.loadClass("com.teammoeg.immersiveindustry.content.chemical_reactor.ChemicalRecipe")

// MBDRecipeTypeEvents.onTransferProxyRecipe(($) => {
// 	let event = $.getEvent()
// 	let { proxyRecipe, proxyRecipeId, proxyTypeId, recipeType } = event

// 	if (recipeType !== "cmi:chemical_reactor") {
// 		return
// 	}
// 	if (proxyTypeId !== "immersiveindustry:chemical") {
// 		return
// 	}

// 	/**
// 	 * @type {Internal.ChemicalRecipe}
// 	 */
// 	let recipe = proxyRecipe

// 	if (!(recipe instanceof $ChemicalRecipe)) {
// 		return
// 	}

// 	/**
// 	 * @type {Internal.MBDRecipeSchema$MBDRecipeJS}
// 	 */
// 	let builder = recipeType.recipeBuilder()

// 	let inputItem = recipe.inputs
// 	let inputFluidTag = recipe.input_fluids
// 	let outputItem = recipe.outputs
// 	let outputFluid = recipe.output_fluids
// 	let recipeWorkTime = recipe.time
// 	let recipeTickEnergy = recipe.tickEnergy

// 	for (let input of inputItem) {
// 		builder.inputItems(Item.of(
// 			input.getBaseIngredient(),
// 			input.getCount()
// 		))
// 	}

// 	for (let input of inputFluidTag) {
// 		let json = input.serialize().getAsJsonObject()

// 		builder.inputFluids(Fluid.tag(
// 			"fluid",
// 			json.get("tag").getAsString(),
// 			json.get("amount").getAsInt()
// 		))
// 	}

// 	for (let output of outputItem) {
// 		builder.outputItems(Item.of(
// 			output.getItem(),
// 			output.getCount()
// 		))
// 	}

// 	for (let output of outputFluid) {
// 		builder.outputFluids(Fluid.of(
// 			output.getFluid(),
// 			output.getAmount()
// 		))
// 	}

// 	builder.duration(recipeWorkTime)
// 		.inputFE(recipeTickEnergy * recipeWorkTime)
// 		.id(proxyRecipeId + "_mbd2_proxy")

// 	event.mbdRecipe = builder.buildMBDRecipe()
// })
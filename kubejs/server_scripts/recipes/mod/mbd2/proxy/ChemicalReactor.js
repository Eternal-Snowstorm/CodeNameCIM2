let $ChemicalRecipe =
	Java.loadClass("com.teammoeg.immersiveindustry.content.chemical_reactor.ChemicalRecipe")

MBDRecipeTypeEvents.onTransferProxyRecipe(($) => {
	let event = $.getEvent()
	let { proxyRecipe, proxyRecipeId, proxyTypeId, recipeType } = event
})

ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.chemical_reactor()
		// .inputFE(100)
		.outputFluids(Fluid.of("minecraft:water", 100))
		.inputFluids(Fluid.of("minecraft:lava", 100))
		.inputItems("#minecraft:dirt")
})
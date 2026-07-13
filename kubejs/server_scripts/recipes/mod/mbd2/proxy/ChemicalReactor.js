let $ChemicalRecipe =
	Java.loadClass("com.teammoeg.immersiveindustry.content.chemical_reactor.ChemicalRecipe")

MBDRecipeTypeEvents.onTransferProxyRecipe(($) => {
	let event = $.getEvent()
	let { proxyRecipe, proxyRecipeId, proxyTypeId, recipeType } = event
})
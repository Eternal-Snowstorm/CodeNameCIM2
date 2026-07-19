ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.electrolyzer()
		.inputGases("20x mekanism:steam")
		.outputGases("10x mekanism:steam")
})
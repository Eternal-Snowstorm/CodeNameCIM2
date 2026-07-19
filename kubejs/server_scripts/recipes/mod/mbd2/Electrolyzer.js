ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.electrolyzer()
		.inputItems("#minecraft:planks")
		.outputItems("minecraft:apple")
		.duration(20 * 20)
})
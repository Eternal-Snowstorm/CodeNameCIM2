ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.electrolyzer()
		.inputItems("minecraft:apple")
		.outputItems("minecraft:diamond")
		.perTick((recipe) => {
			recipe.inputFE(100)
				.inputItemsDurability("immersiveengineering:graphite_electrode")
		})
})
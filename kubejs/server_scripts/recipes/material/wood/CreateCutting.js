ServerEvents.recipes((event) => {
	let { kubejs, create, farmersdelight } = event.recipes

	// 木板批量处理
	event.forEachRecipe({
		type: "minecraft:crafting_shapeless",
		output: "#minecraft:planks",
		input: "#minecraft:logs",
	}, (recipes) => {
		let outputItem = recipes.getOriginalRecipeResult().getId()
		let inputItem = recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]

		kubejs.shapeless(Item.of(outputItem, 4), inputItem)
	})

	event.forEachRecipe({
		type: "create:cutting",
		input: "#minecraft:logs",
		output: "#forge:stripped_logs",
	}, (recipes) => {
		let outputItem = recipes.getOriginalRecipeResult().getId()
		let inputItem = recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]

		create.cutting([
			Item.of(outputItem, 1),
			"farmersdelight:tree_bark"
		], [
			inputItem
		])
	})
})
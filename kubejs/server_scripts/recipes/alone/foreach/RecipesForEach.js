ServerEvents.recipes((event) => {
	let { minecraft } = event.recipes

	// 木板批量处理
	event.forEachRecipe({
		type: "minecraft:crafting_shapeless",
		output: "#minecraft:planks",
		input: "#minecraft:logs",
	}, (recipes) => {
		let outputItem = recipes.getOriginalRecipeResult().getId()
		let inputItem = recipes.getOriginalRecipeIngredients()[0].getItemIds()[0]

		event.custom({
			"type": "farmersdelight:cutting",
			"ingredients": [{ "item": inputItem }],
			"result": [
				{ "item": outputItem, "count": 2, "chance": 1.0 },
				{ "item": outputItem, "count": 1, "chance": 0.3 }
			],
			"tool": {
				"type": "farmersdelight:tool_action",
				"action": "axe_dig"
			}
		})

		minecraft.stonecutting(Item.of(outputItem, 4), inputItem)
	})
})
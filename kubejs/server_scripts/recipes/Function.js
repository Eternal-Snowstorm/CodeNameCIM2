function aeCharger(output, input) {
	const INPUT = Ingredient.of(input).toJson()
	return {
		"type": "ae2:charger",
		"ingredient": INPUT,
		"result": {
			"item": output
		}
	}
}

function IEIngredient(input) {
	if (Array.isArray(input)) {
		let count = 0
		let inps = []
		for (let i of input) {
			if (count === 0) {
				count = Item.of(i).getCount()
			}
			inps.push(Item.of(i)
				.withCount(1).toJson())
		}
		return {
			base_ingredient: inps,
			count: count
		}
	}
	return {
		base_ingredient: Item.of(input).withCount(1).toJson(),
		count: Item.of(input).getCount()
	}
}
function addSmeltingRecipe(event, output, input) {
	event.recipes.minecraft.blasting(output, input)
		.cookingTime(100)

	event.recipes.minecraft.smelting(output, input)
		.cookingTime(200)
}
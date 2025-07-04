function aeCharger(output, input) {
	const INPUT = inJson(input)
	return {
		"type": "ae2:charger",
		"ingredient": INPUT,
		"result": {
			"item": output
		}
	}
}
function addSmeltingRecipe(event, output, input) {
	event.recipes.minecraft.blasting(output, input)
		.cookingTime(100)

	event.recipes.minecraft.smelting(output, input)
		.cookingTime(200)
}
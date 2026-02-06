// ServerEvents.recipes((event) => {
// 	event.recipeStream({ type: "tconstruct:alloy" })
// 		.forEach((recipe) => {

// 			let inputs = recipe.json.get("inputs")
// 			let input = inputs.get(0)
// 			let inputFluid = input.get("tag").toString()
// 			let inputAmount = input.get("amount")

// 			let output = recipe.json.get("result")
// 			let outputFluid = output.get("tag").toString()
// 			let outputAmount = output.get("amount")
// 			let temperature = recipe.json.get("temperature")

// 			event.custom({
// 				type: "create:mixing",
// 				heatRequirement: temperature <= 1000 ? "heated" : "superheated",
// 				ingredients: [
// 					{ fluidTag: inputFluid, amount: inputAmount },
// 					{ fluidTag: inputFluid, amount: inputAmount }
// 				],
// 				results: [
// 					{
// 						fluid: IngredientUtils.getFirstFluidId(outputFluid),
// 						amount: outputAmount
// 					}
// 				]
// 			})
// 		})
// })
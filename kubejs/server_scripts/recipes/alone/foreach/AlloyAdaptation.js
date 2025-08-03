// ServerEvents.recipes((event) => {
// 	event.recipeStream({ type: "tconstruct:alloy" })
// 		.forEach((recipe) => {
// 			let inputs = recipe.json.get("inputs")
// 			let input = inputs.get(0)
// 			let inputFluid = input.get("tag")
// 			let inputAmount = input.get("amount")

// 			let output = recipe.json.get("result")
// 			let outputFluid = output.get("tag")
// 			let outputAmount = output.get("amount")
// 			let temperature = recipe.json.get("temperature")

// 			let printList = [
// 				// inputs,
// 				// input,
// 				// inputFluid,
// 				// inputAmount,

// 				output,
// 				outputFluid,
// 				outputAmount,
// 				temperature
// 			]
// 			console.log(printList)
// 			// event.custom({
// 			// 	type: "create:mixing",
// 			// 	heatRequirement: temperature <= 1000 ? "heated" : "superheated",
// 			// 	ingredients: [
// 			// 		{ fluidTag: inputFluid, amount: inputAmount },
// 			// 		{ fluidTag: inputFluid, amount: inputAmount }
// 			// 	],
// 			// 	results: [
// 			// 		{ fluid: outputFluid, amount: outputAmount }
// 			// 	]
// 			// })
// 		})
// })
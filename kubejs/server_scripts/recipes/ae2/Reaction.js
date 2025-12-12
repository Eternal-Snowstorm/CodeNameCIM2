ServerEvents.recipes((event) => {
	/**
	 * 
	 * @param {Internal.FluidStackJS} fluid 
	 * @param {number} amount 
	 * @returns 
	 */
	function addFluidInput(fluid, amount) {
		return {
			fluidStack: {
				FluidName: fluid,
				Amound: amount
			}
		}
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} ingredient 
	 * @param {number} count 
	 * @returns 
	 */
	function addItemInput(ingredient, count) {
		return {
			ingredient: Ingredient.of(ingredient).toJson(),
			amount: count
		}
	}

	// event.custom({
	// 	type: "advanced_ae:reaction",
	// 	energy: 20000,
	// 	fluid: "",
	// 	input_items: [
	// 		addItemInput()
	// 	],
	// 	output: {
	// 		"#": 1000,
	// 		"#c": "ae2:f",
	// 		"id": IngrUtils.getFirstItemId()
	// 	}
	// })
})
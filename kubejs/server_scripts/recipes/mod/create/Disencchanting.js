ServerEvents.recipes((event) => {
	/**
	 * 
	 * @param {inputItem} ingredient 输入物品
	 * @param {Number}  expAmount 产出经验量(mb)
	 * @param {OutputItem} result 产出物品
	 * @returns 
	 */
	function addRecipe(ingredient, expAmount, result) {
		let recipe = {
			type: "create_enchantment_industry:disenchanting",
			ingredients: [{
				item: ingredient.toString()
			}
			],
			results: []
		}
		if (result == null) {
			recipe.results = [{
				fluid: "create_enchantment_industry:experience",
				amount: expAmount
			}]
		} else {
			recipe.results = [{
				item: result.toString()
			}, {
				fluid: "create_enchantment_industry:experience",
				amount: expAmount
			}]
		}
		event.custom(recipe)
	}
	addRecipe("cmi:enchanted_mechanism", 500, "cmi:enchanted_mechanism")
})
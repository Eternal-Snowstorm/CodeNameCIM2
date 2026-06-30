ServerEvents.recipes((event) => {
	/**
	 * @constructor
	 * @param {Internal.ItemStack_} output
	 */
	function InscriberRecipe(output) {
		this.recipe = {
			type: "ae2:inscriber",
			ingredients: {},
			result: Item.of(output).toJson()
		}
	}

	/**
	 * @param {Internal.Ingredient_} input
	 * @returns
	 */
	InscriberRecipe.prototype.middle = function (input) {
		this.recipe.ingredients.middle = Ingredient.of(input).toJson()
		return this
	}

	/**
	 * @param {Internal.Ingredient_} input
	 * @returns 
	 */
	InscriberRecipe.prototype.top = function (input) {
		this.recipe.ingredients.top = Ingredient.of(input).toJson()
		return this
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @returns 
	 */
	InscriberRecipe.prototype.bottom = function (input) {
		this.recipe.ingredients.bottom = Ingredient.of(input).toJson()
		return this
	}

	InscriberRecipe.prototype.press = function () {
		this.recipe.mode = "press"
		return event.custom(this.recipe)
	}

	InscriberRecipe.prototype.inscribe = function () {
		this.recipe.mode = "inscribe"
		return event.custom(this.recipe)
	}

	// 碳化硅板
	new InscriberRecipe("cmi:silicon_carbide_plate")
		.middle("cmi:silicon_carbide")
		.top("ae2:silicon_press")
		.inscribe()

	// 线刻硅板
	new InscriberRecipe("cmi:inscribed_silicon")
		.middle("ae2:printed_silicon")
		.top("cmi:redstone_wire")
		.press()

	// 铁氧体磁芯
	new InscriberRecipe("cmi:ferrit_core")
		.bottom("#forge:plates/nickel")
		.middle("#forge:plates/iron")
		.top("#forge:plates/zinc")
		.press()
})
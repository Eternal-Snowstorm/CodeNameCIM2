ServerEvents.recipes((event) => {
	// region define Recipe
	/**
	 * 硝酸点火器配方构造器
	 *
	 * @constructor
	 */
	function NitraticIgniterRecipe() {
		/**
		 * @type {Internal.JsonObject}
		 */
		this.recipe = {
			type: "thermal_extra:nitratic_igniter"
		}
	}

	/**
	 * 能量消耗
	 *
	 * @param {number} energy
	 * @returns {NitraticIgniterRecipe}
	 */
	NitraticIgniterRecipe.prototype.energy = function (energy) {
		this.recipe.energy = energy
		return this
	}

	/**
	 * 输入材料
	 *
	 * @param {Internal.Ingredient_} ingredient
	 * @returns {NitraticIgniterRecipe}
	 */
	NitraticIgniterRecipe.prototype.ingredient = function (ingredient) {
		this.recipe.ingredients = [
			Ingredient.of(ingredient).toJson()
		]
		return this
	}

	/**
	 * 输出结果
	 *
	 * @param {Internal.JsonObject[]} results
	 * @returns {NitraticIgniterRecipe}
	 */
	NitraticIgniterRecipe.prototype.results = function (results) {
		this.recipe.result = results
		return this
	}

	/**
	 * 构建配方
	 */
	NitraticIgniterRecipe.prototype.build = function () {
		return event.custom(this.recipe)
	}

	/**
	 * 输出构造(同时支持数量与概率)
	 *
	 * @param {Internal.ItemStack_} item
	 * @param {number} [count=1]
	 * @param {number} [chance=1]
	 * @returns {Internal.JsonObject}
	 */
	function setResult(item, count, chance) {
		if (typeof count === "undefined") {
			count = 1
		}
		if (typeof chance === "undefined") {
			chance = 1
		}

		return {
			item: Item.of(item).id,
			count: count,
			chance: chance
		}
	}

	// region add Recipes

	new NitraticIgniterRecipe()
		.energy(2000)
		.ingredient("#minecraft:dirt", 2)
		.results([
			setResult("cmi:cast_iron_ingot", 2, 1),
			setResult("cmi:cast_iron_ingot", 1, 0.5),
			setResult("cmi:cast_iron_ingot", 1, 0.25)
		])
		.build()

	// endregion
})
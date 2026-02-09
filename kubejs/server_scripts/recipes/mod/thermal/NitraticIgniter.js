ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes
	// region define Recipe
	/**
	 * 硝酸点火器配方构造器
	 *
	 * @constructor
	 */
	function NitraticIgniterRecipeBuilder() {
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
	 * @returns {NitraticIgniterRecipeBuilder}
	 */
	NitraticIgniterRecipeBuilder.prototype.energy = function (energy) {
		this.recipe.energy = energy
		return this
	}

	/**
	 * 输入材料
	 *
	 * @param {Internal.Ingredient_} ingredient
	 * @returns {NitraticIgniterRecipeBuilder}
	 */
	NitraticIgniterRecipeBuilder.prototype.ingredient = function (ingredient) {
		this.recipe.ingredients = [
			Ingredient.of(ingredient).toJson()
		]
		return this
	}

	/**
	 * 输出结果
	 *
	 * @param {Internal.JsonObject[]} results
	 * @returns {NitraticIgniterRecipeBuilder}
	 */
	NitraticIgniterRecipeBuilder.prototype.results = function (results) {
		this.recipe.result = results
		return this
	}

	/**
	 * 构建配方
	 */
	NitraticIgniterRecipeBuilder.prototype.build = function () {
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

	// 催化剂配方
	event.custom({
		"type": "thermal_extra:nitratic_igniter_catalyst",
		"energy_mod": 1.0,
		"ingredient": {
			"item": "cmi:trinitrotoluene"
		},
		"primary_mod": 1.0,
		"secondary_mod": 1.0
	})

	event.custom({
		"type": "thermal_extra:nitratic_igniter_catalyst",
		"energy_mod": 1.25,
		"ingredient": {
			"item": "cmi:nitrocellulose"
		},
		"primary_mod": 1.0,
		"secondary_mod": 1.0
	})

	// region add Recipes

	// 爆裂
	thermal_extra.nitratic_igniter([
		"cmi:blackstone_sourse_alpha",
		"cmi:blackstone_sourse_beta",
		"cmi:blackstone_sourse_gamma"
	], "#forge:blackstone")
		.energy(2000)

	// 锇
	thermal_extra.nitratic_igniter([
		"2x mekanism:shard_osmium",
		Item.of("mekanism:clump_osmium", 1).withChance(0.5),
		Item.of("mekanism:clump_osmium", 1).withChance(0.25)
	], "#forge:raw_materials/osmium")
		.energy(4000)



	// new NitraticIgniterRecipeBuilder()
	// 	.energy(4000)
	// 	.ingredient("#forge:raw_materials/osmium")
	// 	.results([
	// 		setResult("mekanism:clump_osmium", 2, 1),
	// 		setResult("mekanism:clump_osmium", 1, 0.5),
	// 		setResult("mekanism:clump_osmium", 1, 0.25)
	// 	])
	// 	.build()

	// endregion
})
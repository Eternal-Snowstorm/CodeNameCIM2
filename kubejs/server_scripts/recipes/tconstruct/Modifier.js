ServerEvents.recipes((event) => {
	// region define ModifierRecipe

	/**
	 * TConstruct Modifier 配方构造器
	 *
	 * @constructor
	 * @param {string} modifier 修饰符ID
	 */
	function ModifierRecipeBuilder(modifier) {
		/**
		 * @type {Internal.JsonObject}
		 */
		this.recipe = {
			type: "tconstruct:modifier",
			result: modifier
		}
	}

	/**
	 * 是否允许水晶
	 *
	 * @param {boolean} [allow]
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.allowCrystal = function (allow) {
		if (typeof allow !== "undefined") {
			this.recipe.allow_crystal = allow
		}
		return this
	}

	/**
	 * 是否检查 Trait 等级
	 *
	 * @param {boolean} [check]
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.checkTraitLevel = function (check) {
		if (typeof check !== "undefined") {
			this.recipe.check_trait_level = check
		}
		return this
	}

	/**
	 * 设置工具标签
	 *
	 * @param {Internal.Ingredient_} tag
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.tools = function (tag) {
		this.recipe.tools = Ingredient.of(tag).toJson()
		return this
	}

	/**
	 * 设置槽位
	 *
	 * @param {"ability"|"defense"|"upgrades"|"slotless"|"salvage"} type 
	 * @param {number} count
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.slots = function (type, count) {
		this.recipe.slots = {}
		this.recipe.slots[type] = count
		return this
	}

	/**
	 * 设置输入材料
	 *
	 * @param {Internal.Ingredient_[]} inputs
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.inputs = function (inputs) {
		this.recipe.inputs = inputs.map((ingredient) => {
			return Ingredient.of(ingredient).toJson()
		})
		return this
	}

	/**
	 * 设置等级
	 *
	 * @param {number} level
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.level = function (level) {
		this.recipe.level = level
		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id]
	 * @returns 
	 */
	ModifierRecipeBuilder.prototype.build = function (id) {
		if (typeof id === undefined) {
			return event.custom(this.recipe)
		}
		return event.custom(this.recipe)
			.id(id)
	}
	// endregion

	// region add Recipes
	new ModifierRecipeBuilder("nebula_tinker:acupoint")
		.allowCrystal()
		.checkTraitLevel()
		.tools("#tconstruct:modifiable/held")
		.slots("abilities", 1)
		.inputs([
			"cmi:blackstone_source_alpha",
			"cmi:blackstone_source_beta",
			"cmi:blackstone_source_gamma",
			"#forge:gems/charged_amethyst",
			"#forge:gems/charged_amethyst"
		])
		.level(1)
		.build("nebula_tinker:tconstruct/modifier/ability/acupoint")

	new ModifierRecipeBuilder("nebula_tinker:frenzy")
		.allowCrystal()
		.checkTraitLevel()
		.tools("#tconstruct:modifiable/held")
		.slots("abilities", 1)
		.inputs([
			"#forge:dusts/quartz",
			"#create:mechanisms/cobalt",
			"#forge:dusts/quartz",
			"#forge:gems/charged_amethyst",
			"#forge:gems/charged_amethyst"
		])
		.level(1)
		.build("nebula_tinker:tconstruct/modifier/ability/frenzy")

	new ModifierRecipeBuilder("nebula_tinker:causal_truncation")
		.allowCrystal()
		.checkTraitLevel()
		.tools("#tconstruct:modifiable/melee/primary")
		.slots("abilities", 1)
		.inputs([
			"#forge:plates/uranium",
			"#create:mechanisms/nether",
			"#forge:plates/uranium",
			"#forge:slimeball/blood",
			"#forge:slimeball/blood"
		])
		.level(1)
		.build("nebula_tinker:tconstruct/modifier/ability/causal_truncation")
	// endregion
})
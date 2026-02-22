ServerEvents.recipes((event) => {
	// region define ModifierRecipe

	/**
	 * TConstruct Modifier 配方构造器
	 *
	 * @constructor
	 * @param {string} modifier Modifier ID
	 * @param {number} [level] Modifier 等级
	 * @returns {Internal.JsonElement_}
	 */
	function ModifierRecipeBuilder(modifier, level) {
		if (typeof level === "undefined") {
			this.recipe = {
				type: "tconstruct:modifier",
				level: 1,
				result: modifier
			}
			return this
		}
		this.recipe = {
			type: "tconstruct:modifier",
			level: level,
			result: modifier
		}
		return this
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
	 * @param {"abilities"|"ability"|"defense"|"upgrades"|"slotless"|"salvage"} type 
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
	 * 
	 * @param {ResourceLocation_} [id]
	 * @returns 
	 */
	ModifierRecipeBuilder.prototype.build = function (id) {
		if (typeof id === "undefined") {
			return event.custom(this.recipe)
		}
		return event.custom(this.recipe)
			.id(id)
	}
	// endregion

	// region add Recipes
	// 死穴
	new ModifierRecipeBuilder("nebula_tinker:acupoint", 1)
		.allowCrystal(true)
		.checkTraitLevel(true)
		.tools("#tconstruct:modifiable/held")
		.slots("abilities", 1)
		.inputs([
			"cmi:blackstone_source_alpha",
			"cmi:blackstone_source_beta",
			"cmi:blackstone_source_gamma",
			"#forge:gems/charged_amethyst",
			"#forge:gems/charged_amethyst"
		])
		.build("nebula_tinker:tconstruct/modifier/ability/acupoint")

	// 狂乱
	new ModifierRecipeBuilder("nebula_tinker:frenzy", 1)
		.allowCrystal(true)
		.checkTraitLevel(true)
		.tools("#tconstruct:modifiable/held")
		.slots("abilities", 1)
		.inputs([
			"#forge:dusts/quartz",
			"#create:mechanisms/cobalt",
			"#forge:dusts/quartz",
			"#forge:gems/charged_amethyst",
			"#forge:gems/charged_amethyst"
		])
		.build("nebula_tinker:tconstruct/modifier/ability/frenzy")

	// 因果截断
	new ModifierRecipeBuilder("nebula_tinker:causal_truncation", 1)
		.allowCrystal(true)
		.checkTraitLevel(true)
		.tools("#tconstruct:modifiable/melee/primary")
		.slots("abilities", 1)
		.inputs([
			"#forge:plates/uranium",
			"#create:mechanisms/nether",
			"#forge:plates/uranium",
			"#forge:slimeball/blood",
			"#forge:slimeball/blood"
		])
		.build("nebula_tinker:tconstruct/modifier/ability/causal_truncation")

	// 发条
	new ModifierRecipeBuilder("nebula_tinker:clockwork", 1)
		.allowCrystal(true)
		.checkTraitLevel(true)
		.tools("#tconstruct:modifiable/melee")
		.slots("abilities", 1)
		.inputs([
			"cmi:andesite_mechanism"
		])
		.build("nebula_tinker:tconstruct/modifier/ability/clockwork")
	// endregion
})
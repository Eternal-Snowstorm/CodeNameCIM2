ServerEvents.recipes((event) => {
	// region define ModifierRecipe

	/**
	 * TConstruct Modifier 配方构造器
	 * 
	 *
	 * @constructor
	 * @param {string} modifier Modifier ID
	 * @returns {Internal.JsonElement_}
	 */
	function ModifierRecipeBuilder(modifier) {
		if (typeof level === "undefined") {
			this.recipe = {
				type: "tconstruct:modifier",
				result: modifier
			}
			return this
		}
		this.recipe = {
			type: "tconstruct:modifier",
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
	 * 设置 Modifier 等级
	 *
	 * @param {number} min
	 * @param {number} [max]
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.level = function (min, max) {
		if (typeof max === "undefined") {
			this.recipe.level = min
			return this
		}

		this.recipe.level = {
			min: min,
			max: max
		}
		return this
	}

	/**
	 * 设置槽位
	 *
	 * @param {ModifierSlotType} type 
	 * @param {number} count
	 * @returns {ModifierRecipeBuilder}
	 */
	ModifierRecipeBuilder.prototype.slots = function (type, count) {
		this.recipe.slots = {}
		this.recipe.slots[type] = count
		return this
	}

	/**
	 * 设置输入材料 最高5种
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
	new ModifierRecipeBuilder("nebula_tinker:acupoint")
		.allowCrystal(true)
		.checkTraitLevel(true)
		.tools("#tconstruct:modifiable/held")
		.slots("abilities", 1)
		.level(1)
		.inputs([
			"cmi:blackstone_source_alpha",
			"cmi:blackstone_source_beta",
			"cmi:blackstone_source_gamma",
			"#forge:gems/charged_amethyst",
			"#forge:gems/charged_amethyst"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/ability/acupoint"))

	// 狂乱
	new ModifierRecipeBuilder("nebula_tinker:frenzy")
		.allowCrystal(true)
		.checkTraitLevel(true)
		.level(1)
		.tools("#tconstruct:modifiable/held")
		.slots("abilities", 1)
		.inputs([
			"#forge:dusts/quartz",
			"#create:mechanisms/cobalt",
			"#forge:dusts/quartz",
			"#forge:gems/charged_amethyst",
			"#forge:gems/charged_amethyst"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/ability/frenzy"))

	// 因果截断
	new ModifierRecipeBuilder("nebula_tinker:causal_truncation")
		.allowCrystal(true)
		.checkTraitLevel(true)
		.level(1)
		.tools("#tconstruct:modifiable/melee/primary")
		.slots("abilities", 1)
		.inputs([
			"#forge:plates/uranium",
			"#create:mechanisms/nether",
			"#forge:plates/uranium",
			"#forge:slimeball/blood",
			"#forge:slimeball/blood"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/ability/causal_truncation"))

	// 发条
	new ModifierRecipeBuilder("nebula_tinker:clockwork")
		.allowCrystal(true)
		.checkTraitLevel(true)
		.level(1)
		.tools("#tconstruct:modifiable/melee")
		.slots("abilities", 1)
		.inputs([
			"cmi:andesite_mechanism"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/ability/clockwork"))

	// 增强
	new ModifierRecipeBuilder("tconstruct:draconic")
		.allowCrystal(true)
		.checkTraitLevel(false)
		.tools("#tconstruct:modifiable/held")
		.inputs([
			"tconstruct:dragon_scale",
			"#forge:gears/titanium",
			"tconstruct:dragon_scale",
			"#forge:plates/titanium",
			"#forge:plates/titanium"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/slotless/draconic"))

	// 铭刻
	new ModifierRecipeBuilder("tconstruct:writable")
		.allowCrystal(true)
		.checkTraitLevel(false)
		.tools("#tconstruct:modifiable/held")
		.inputs([
			"#forge:plates/silver",
			"minecraft:writable_book",
			"#forge:plates/silver",
			"ae2:sky_dust",
			"ae2:sky_dust"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/slotless/writable"))

	// 擒王
	new ModifierRecipeBuilder("nebula_tinker:capture_king")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/held")
		.level(1, 3)
		.slots("abilities", 1)
		.inputs([
			Mechanisms.SCULK.COM
		])
		.build(NebulaTinker.loadResource("tinker/modifier/abilities/capture_king"))

	// 收束
	new ModifierRecipeBuilder("nebula_tinker:converge")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/ranged")
		.level(1, 3)
		.slots("upgrades", 1)
		.inputs([
			"thermal:rf_coil",
			"cmi:electrolized_redstone",
			"thermal:rf_coil"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/upgrades/converge"))

	// 生命回响
	new ModifierRecipeBuilder("nebula_tinker:death_echo")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/held")
		.level(1, 3)
		.slots("abilities", 1)
		.inputs([
			"#vintageimprovements:springs/blaze",
			"kaleidoscope_nether:blaze_heart",
			"#vintageimprovements:springs/blaze",
			"tconstruct:blazing_bone",
			"tconstruct:blazing_bone"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/abilities/death_echo"))

	// 魔化
	new ModifierRecipeBuilder("nebula_tinker:demonization")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/held")
		.level(1, 3)
		.slots("upgrades", 1)
		.inputs([
			"nebula_tinker:demonization_stone",
			"#create:shadow_steel"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/upgrades/demonization"))

	// 神化
	new ModifierRecipeBuilder("nebula_tinker:divinization")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/held")
		.level(1, 3)
		.slots("upgrades", 1)
		.inputs([
			"nebula_tinker:divinization_stone",
			"create:refined_radiance"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/upgrades/divinization"))

	// 杀戮节奏
	new ModifierRecipeBuilder("nebula_tinker:killing_rhythm")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/held")
		.level(1, 3)
		.slots("abilities", 1)
		.inputs([
			"thermal_extra:soul_sand_dust",
			"cmi:resonant_tube",
			"thermal_extra:soul_sand_dust",
			"cmi:charged_amethyst",
			"cmi:charged_amethyst"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/abilities/killing_rhythm"))

	// 喜水
	new ModifierRecipeBuilder("nebula_tinker:aquadynamic")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/held")
		.level(1, 3)
		.slots("abilities", 1)
		.inputs([
			"minecraft:prismarine_shard",
			"minecraft:heart_of_the_sea",
			"minecraft:prismarine_shard"
		])
		.build(NebulaTinker.loadResource("tinker/modifier/abilities/aquadynamic"))

	// 自动修复
	new ModifierRecipeBuilder("tinkersmossymodifier:auto_repair")
		.allowCrystal(true)
		.tools("#tconstruct:modifiable/durability")
		.level(1, 3)
		.slots("upgrades", 1)
		.inputs([
			"tinkersmossymodifier:ball_of_moss",
			Mechanisms.NATURE.COM,
			"tinkersmossymodifier:ball_of_moss"
		])
		.build(useEmiId("jei:/tinkersmossymodifier/tools/modifiers/upgrade/auto_repair"))

	// endregion
})
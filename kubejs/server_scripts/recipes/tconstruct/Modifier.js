ServerEvents.recipes((event) => {
	/** 
		* 
		* @param {String} modifier
		* @param {Set} inputs
		* @param {String} targetTag 
		* @returns
	   */
	function addModifierRecipe(modifier, inputs, targetTag) {
		let recipe = {
			"type": "tconstruct:modifier",
			"allow_crystal": true,
			"check_trait_level": true,
			"inputs": inputs,
			"level": 1,
			"result": modifier,
			"slots": {
				"abilities": 1
			},
			"tools": Ingredient.of(targetTag).toJson()
		}
		return event.custom(recipe)
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @returns 
	 */
	function setInput(input) {
		return Ingredient.of(input).toJson()
	}

	addModifierRecipe("nebula_tinker:acupoint", [
		setInput("cmi:blackstone_source_alpha"),
		setInput("cmi:blackstone_source_beta"),
		setInput("cmi:blackstone_source_gamma"),
		setInput("#forge:gems/charged_amethyst"),
		setInput("#forge:gems/charged_amethyst")
	], "#tconstruct:modifiable/held")
		.id("nebula_tinker:tconstruct/modifier/ability/acupoint")

	addModifierRecipe("nebula_tinker:frenzy", [
		setInput("#forge:dusts/quartz"),
		setInput("#create:mechanisms/cobalt"),
		setInput("#forge:dusts/quartz"),
		setInput("#forge:gems/charged_amethyst"),
		setInput("#forge:gems/charged_amethyst")
	], "#tconstruct:modifiable/held")
		.id("nebula_tinker:tconstruct/modifier/ability/frenzy")

	addModifierRecipe("nebula_tinker:causal_truncation", [
		setInput("#forge:plates/uranium"),
		setInput("#create:mechanisms/nether"),
		setInput("#forge:plates/uranium"),
		setInput("#forge:slimeball/blood"),
		setInput("#forge:slimeball/blood")
	], "#tconstruct:modifiable/melee/primary")
		.id("nebula_tinker:tconstruct/modifier/ability/causal_truncation")
})
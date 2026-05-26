let $EmiIngredient =
	Java.loadClass("dev.emi.emi.api.stack.EmiIngredient")

ClientEvents.highPriorityAssets((event) => {
	addEmiRecipeFilter("remove_steel", {
		filters: [
			{
				id: "/jei:/cmi/immersiveengineering/blast_furnace/steel_ingot/"
			}
		]
	})

	addEmiAddingRecipe("polished_quartz_prism_from_world", {
		"type": "emi:world_interaction",
		"left": "item:minecraft:quartz",
		"right": "#forge:ingots/iron",
		"output": "item:cmi:polished_quartz_prism"
	})

	addEmiRecipeFilter("grinding", {
		"filters": [
			{
				"category": "vintageimprovements:grinder_sandpaper_polishing"
			}
		]
	})

	/**
	 * @param {string} path
	 * @param {Internal.JsonElement_} json
	 * 具体请看 {@link https://github.com/emilyploszaj/emi/wiki/Recipe-Filters EMI Recipe Filters Wiki}
	 */
	function addEmiRecipeFilter(path, json) {
		event.add(addEmi(`recipe/filters/${path}`), json)
	}

	/**
	 * 
	 * @param {string} path 
	 * @param {Internal.JsonElement_} json
	 * 具体请看 {@link https://github.com/emilyploszaj/emi/wiki/Adding-Recipes EMI Adding Recipes Wiki}
	 */
	function addEmiAddingRecipe(path, json) {
		event.add(addEmi(`recipe/additions/${path}`), json)
	}

	/**
	 * 
	 * @param {string} path 
	 * @returns 
	 */
	function addEmi(path) {
		return ResourceLocation.fromNamespaceAndPath("emi", path)
	}
})
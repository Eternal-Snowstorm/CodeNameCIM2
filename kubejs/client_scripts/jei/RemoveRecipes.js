JEIEvents.removeRecipes((event) => {
	/**
	 * 
	 * @param {Special.RecipeType} type 要删除的配方类型
	 * @param {Special.RecipeId | Array<Special.RecipeId>} id 要删除的配方id
	 */
	function removeRecipeFromJEI(type, id) {
		event.remove(type, id)
	}

	removeRecipeFromJEI("createaddition:charging", "cmi:createaddition/charging/overcharged_alloy_ingot")
	removeRecipeFromJEI("minecraft:crafting", "cmi:minecraft/shaped/love_manual_only")
	removeRecipeFromJEI("tconstruct:melting", [
		"cmi:tconstruct/melting/steel/cooking_pot",
		"cmi:tconstruct/melting/steel/skillet",
		"cmi:tconstruct/melting/steel/pot",
		"cmi:tconstruct/melting/steel/stockpot",
		"cmi:tconstruct/melting/steel/stockpot_lid",
	])
})
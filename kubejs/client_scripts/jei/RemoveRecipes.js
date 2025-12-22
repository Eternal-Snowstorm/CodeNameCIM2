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
	removeRecipeFromJEI("immersiveengineering:blast_furnace", [
		"cmi:immersiveengineering/blast_furnace/steel_ingot/cooking_pot",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/skillet",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/pot",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/stockpot",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/stockpot_lid",
	])
})
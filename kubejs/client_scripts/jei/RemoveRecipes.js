JEIEvents.removeRecipes((event) => {
	/**
	 * 
	 * @param {Special.RecipeType} type 要删除的配方类型
	 * @param {Special.RecipeId | Array<Special.RecipeId>} id 要删除的配方id
	 */
	function removeRecipeFromJEI(type, id) {
		event.remove(type, id)
	}

	removeRecipeFromJEI("minecraft:crafting", [
		"cmi:minecraft/shaped/love_manual_only",
		"create_factory_abstractions:empty"
	])
	removeRecipeFromJEI("immersiveengineering:blast_furnace", [
		"cmi:immersiveengineering/blast_furnace/steel_ingot/cooking_pot",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/skillet",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/pot",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/stockpot",
		"cmi:immersiveengineering/blast_furnace/steel_ingot/stockpot_lid",
	])
	removeRecipeFromJEI("custommachinery:custom_machine", [
		"torcherino:torcherino",
		"torcherino:lanterino",
		"torcherino:lantern",
		"torcherino:compressed_torcherino",
		"torcherino:compressed_lanterino",
		"torcherino:compressed_lantern",
		"torcherino:double_compressed_torcherino",
		"torcherino:double_compressed_lanterino",
		"torcherino:double_compressed_lantern"
	])
})
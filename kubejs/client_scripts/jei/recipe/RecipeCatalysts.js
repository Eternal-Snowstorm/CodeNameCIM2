JEIAddedEvents.registerRecipeCatalysts((event) => {
	let { data } = event

	/**
	 * 
	 * @param {string} id JEI页面注册id
	 * @param {Internal.ItemStack_} item 索引物品
	 * @param {string} displayName 显示名称
	 * @returns 
	 */
	function addJeiRecipeIndex(id, item, displayName) {
		let type = data.jeiHelpers.getRecipeType(ResourceLocation.parse(id)).get()
		let key = Component.translatable(`recipe.jei.recipe.cmi.${displayName}`)

		if (displayName === undefined) {
			return data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
				(Item.of(item), type)
		}
		return data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
			(Item.of(item).setHoverName(key), type)
	}

	addJeiRecipeIndex("immersiveindustry:crucible", "immersiveindustry:crucible")
	addJeiRecipeIndex("createdieselgenerators:hammering", "cmi:flint_hammer")
	addJeiRecipeIndex("createdieselgenerators:hammering", "cmi:diamond_hammer")
})
JEIAddedEvents.registerRecipeCatalysts((event) => {
	let { data } = event

	/**
	 * 
	 * @param {String} id 注册ID
	 * @param {Internal.Item_ | String} item 
	 * @param {String} displayName 
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

	// addJeiRecipeIndex("cmi:accelerator", "cmi:accelerator", "accelerator")
	addJeiRecipeIndex("immersiveindustry:crucible", "immersiveindustry:crucible")
})
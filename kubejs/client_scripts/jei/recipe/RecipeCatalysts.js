JEIAddedEvents.registerRecipeCatalysts((event) => {
	let { data } = event

	/**
	 *
	 * @param {string|string[]} ids JEI页面注册id
	 * @param {string|Internal.ItemStack_|Array<string|Internal.ItemStack_>} items 索引物品
	 * @param {string} displayName 显示名称
	 */
	function addJeiRecipeIndex(ids, items, displayName) {
		ids = Array.isArray(ids) ? ids : [ids]
		items = Array.isArray(items) ? items : [items]

		let recipeTypes = ids
			.map((id) => {
				return data.jeiHelpers.getRecipeType(ResourceLocation.parse(id))
					.orElse(null)
			})
			.filter((type) => {
				return type != null
			})

		let stack = Item.of(items[0])

		if (displayName !== undefined) {
			let key = Component.translatable(`recipe.jei.recipe.cmi.${displayName}`)
			stack = stack.setHoverName(key)
		}

		for (let item of items) {
			let catalyst = Item.of(item)

			if (displayName !== undefined) {
				let key = Component.translatable(`recipe.jei.recipe.cmi.${displayName}`)
				catalyst = catalyst.setHoverName(key)
			}

			data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](
				catalyst,
				recipeTypes
			)
		}
	}

	addJeiRecipeIndex("immersiveindustry:crucible", "immersiveindustry:crucible")
	addJeiRecipeIndex("createdieselgenerators:hammering", [
		"cmi:flint_hammer",
		"cmi:diamond_hammer"
	])
	addJeiRecipeIndex([
		"create:spout_filling",
		"createdieselgenerators:casting"
	], "cmi:advanced_spout")
	addJeiRecipeIndex([
		"create:automatic_packing",
		"create:packing",
		"create:pressing",
		"createdieselgenerators:compression_molding"
	], "cmi:steam_hammer")
})
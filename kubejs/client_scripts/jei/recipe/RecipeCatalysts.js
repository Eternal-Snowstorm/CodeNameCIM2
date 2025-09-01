JEIAddedEvents.registerRecipeCatalysts((event) => {
	let { data } = event

	let acceleratorTypeId = ResourceLocation.parse("cmi:accelerator")
	let recipeType = data.jeiHelpers.getRecipeType(acceleratorTypeId).get()

	let key = Component.translatable("recipe.jei.recipe.accelerator")
	data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
		(Item.of("cmi:accelerator").setHoverName(key), recipeType)
})
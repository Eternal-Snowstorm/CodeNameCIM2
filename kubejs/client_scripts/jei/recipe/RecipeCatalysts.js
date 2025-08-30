JEIAddedEvents.registerRecipeCatalysts((event) => {
	let { data } = event

	let acceleratorTypeId = ResourceLocation.parse("cmi:accelerator")
	let recipeType = data.jeiHelpers.getRecipeType(acceleratorTypeId).get()

	data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
	let key = Component.translatable("recipe.jei.recipe.accelerator")
		(Item.of("cmi:accelerator").setHoverName(key), recipeType)
})
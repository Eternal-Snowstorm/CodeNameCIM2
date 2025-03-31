StartupEvents.postInit((event) => {
	let $Category = Java.loadClass("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
	let $ConversionRecipe = Java.loadClass("com.simibubi.create.compat.jei.ConversionRecipe")

	function addConversionRecipes(output, input) {
		$Category.RECIPES.add($ConversionRecipe.create(input, output))
	}
	
	// 光辉石
	addConversionRecipes("create:refined_radiance", "create:chromatic_compound")

	// 暗影钢
	addConversionRecipes("create:shadow_steel", "create:chromatic_compound")
})
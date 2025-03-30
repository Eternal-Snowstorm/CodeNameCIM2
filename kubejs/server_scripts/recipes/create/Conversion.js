let $Category = Java.loadClass("com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory")
let $ConversionRecipe = Java.loadClass("com.simibubi.create.compat.jei.ConversionRecipe")

// 光辉石
$Category.RECIPES.add($ConversionRecipe.create(
	"create:chromatic_compound",
	"create:refined_radiance"
))

// 暗影钢
$Category.RECIPES.add($ConversionRecipe.create(
	"create:chromatic_compound",
	"create:shadow_steel"
))
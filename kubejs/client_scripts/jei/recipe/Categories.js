let $DoubleItemIcon =
	Java.loadClass("com.simibubi.create.compat.jei.DoubleItemIcon")
let $AllGuiTextures =
	Java.loadClass("com.simibubi.create.foundation.gui.AllGuiTextures")
let $AnimatedKinetics =
	Java.loadClass("com.simibubi.create.compat.jei.category.animations.AnimatedKinetics")
let $AllPartialModels =
	Java.loadClass("com.simibubi.create.AllPartialModels")
let $CreateRecipeCategory =
	Java.loadClass("com.simibubi.create.compat.jei.category.CreateRecipeCategory")
let $Axis =
	Java.loadClass("com.mojang.math.Axis")
let $RecipeIngredientRole =
	Java.loadClass("mezz.jei.api.recipe.RecipeIngredientRole")
let $Integer =
	Java.loadClass("java.lang.Integer")

JEIAddedEvents.registerCategories((event) => {
	let { data: { jeiHelpers: { guiHelper } } } = event

	event.custom("cmi:accelerator", (category) => {
		category.title(Component.translatable("recipe.jei.recipeType.cmi.accelerator"))
			.setWidth(178)
			.setHeight(72)
			// 调用空白背景(也就是默认)
			.background(guiHelper.createBlankDrawable(0, 0))
			// 设置图标(这里用的是机械动力的双图标lib)
			.iconSupplier(() => {
				return new $DoubleItemIcon(
					// $DoubleItemIcon构造函数只支持箭头函数
					() => Item.of("cmi:accelerator"),
					() => Item.of("create:precision_mechanism")
				)
			})

			// 处理格子
			.handleLookup((builder, recipe, group) => {
				// 格子类型, X, Y
				builder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
					.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
					.addItemStack(recipe.recipeData.input)

				builder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
					.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
					.addItemStack(recipe.recipeData.output)
			})
	})
})
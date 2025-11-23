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

JEIAddedEvents.registerCategories((event) => {
	let { data: { jeiHelpers: { guiHelper } } } = event

	event.custom("cmi:accelerator", (category) => {
		const ACCELERATOR_BLOCK = Block.getBlock("cmi:accelerator").defaultBlockState()

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
			.handleLookup((
				builder,
				recipe,
				group
			) => {
				builder.setShapeless()
				// 格子类型, X, Y
				builder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
					.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
					.addItemStack(recipe.recipeData.input)

				builder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
					.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
					.addItemStack(recipe.recipeData.output)
			})

			// 渲染其它组件
			.setDrawHandler((
				recipe,
				view,
				graphics,
				mouseX,
				mouseY
			) => {
				// $AllGuiTextures.JEI_SHADOW.render(graphics, 46, 29)
				$AllGuiTextures.JEI_SHADOW.render(graphics, 62, 47)
				$AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 74, 10)
				// $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)

				let matrixStack = graphics.pose()

				matrixStack.pushPose()
				matrixStack.translate(74, 51, 100);
				matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5))
				matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))

				// $AnimatedKinetics.defaultBlockElement(ACCELERATOR_BLOCK)
				// 	.rotateBlock(180, 0, $AnimatedKinetics.getCurrentAngle() * 16)
				// 	.scale(24.0)
				// 	.render(graphics)

				$AnimatedKinetics.defaultBlockElement(ACCELERATOR_BLOCK)
					.rotateBlock(0, 180, 0)
					.atLocal(0.0, 0.0, 0.0)
					.scale(24.0)
					.render(graphics)

				matrixStack.popPose()
			})
	})
})
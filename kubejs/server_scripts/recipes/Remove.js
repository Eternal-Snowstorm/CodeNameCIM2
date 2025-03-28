ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"create:mixing/andesite_alloy_from_zinc",
		"create:mixing/andesite_alloy",
		"create:item_application/andesite_casing_from_wood",
		"create:item_application/copper_casing_from_wood",
		"create:item_application/brass_casing_from_wood"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({ id: id })
	})

	let removeItemOutputRecipes = [
		"ae2:black_lumen_paint_ball",
		"ae2:white_lumen_paint_ball",
		"ae2:red_lumen_paint_ball",
		"ae2:blue_lumen_paint_ball",
		"ae2:green_lumen_paint_ball",
	]
	removeItemOutputRecipes.forEach((item) => {
		event.remove({ output: item })
	})


	let removeTagsRecipes = [

	]
	removeTagsRecipes.forEach((tag) => {
		event.remove({ output: tag })
	})

	let removeItemInputRecipes = [
	]
	removeItemInputRecipes.forEach((item) => {
		event.remove({ input: item })
	})

	let removeRecipeType = [

	]
	removeRecipeType.forEach((type) => {
		event.remove({ type: type })
	})
})
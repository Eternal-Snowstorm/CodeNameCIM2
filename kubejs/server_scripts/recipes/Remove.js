ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"create:mixing/andesite_alloy_from_zinc",
		"create:mixing/andesite_alloy"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({ id: id })
	})

	let removeItemRecipes = [
		"ae2:black_lumen_paint_ball",
		"ae2:white_lumen_paint_ball",
		"ae2:red_lumen_paint_ball",
		"ae2:blue_lumen_paint_ball",
		"ae2:green_lumen_paint_ball"
	]
	removeItemRecipes.forEach((item) => {
		event.remove({ output: item })
	})

	let removeRecipeType = [

	]
	removeRecipeType.forEach((type) => {
		event.remove({ type: type })
	})
})
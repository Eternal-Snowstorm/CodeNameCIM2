ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"create:mixing/andesite_alloy_from_zinc",
		"create:mixing/andesite_alloy"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({ id: id })
	})

	let removeItemRecipes = [

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
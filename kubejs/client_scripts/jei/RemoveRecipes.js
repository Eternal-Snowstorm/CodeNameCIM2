JEIEvents.removeRecipes((event) => {
	function removeRecipeFromJEI(output, recipeId) {
		event.remove(output, recipeId)
	}
})
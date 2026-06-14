MBDRegistryEvents.recipeType((event) => {
	addType("electrolyzer")

	/**
	 * 
	 * @param {string} name 
	 */
	function addType(name) {
		return event.createRecipeType(Cmi.loadResource(name))
	}
})
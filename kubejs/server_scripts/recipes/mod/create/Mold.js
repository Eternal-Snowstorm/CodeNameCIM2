ServerEvents.recipes((event) => {
	castingRecipes(event)
	moldRecipes(event)
})

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function castingRecipes(event) {
	let { createdieselgenerators } = event.getRecipes()

	// 石板
	createdieselgenerators.casting("cmi:stone_plate", [
		Fluid.of("minecraft:lava", 100)
	]).mold(CDGMolds.CMI.PLATE)
}

/**
 * @param {Internal.RecipesEventJS} event
 */
function moldRecipes(event) {
	let { create, kubejs } = event.getRecipes()

	addMoldRecipe(CDGMolds.CMI.PLATE)
	addMoldRecipe(CDGMolds.CDG.BAR)
	addMoldRecipe(CDGMolds.CDG.BOWL)
	addMoldRecipe(CDGMolds.CDG.CHAIN)
	addMoldRecipe(CDGMolds.CDG.LINES)

	kubejs.shaped("createdieselgenerators:mold", [
		"AA",
		"AA"
	], {
		A: "#forge:plates/industrial_iron"
	})

	/**
	 * 
	 * @param {CDGMolds} id 
	 * @returns 
	 */
	function mold(id) {
		return Item.of("createdieselgenerators:mold")
			.withNBT({
				Mold: id
			})
	}

	/**
	 * 
	 * @param {CDGMolds} moldId 
	 * @returns 
	 */
	function addMoldRecipe(moldId) {
		return create.cutting(mold(moldId), [
			"createdieselgenerators:mold"
		])
	}
}
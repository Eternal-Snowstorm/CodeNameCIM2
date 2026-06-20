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
	let { vintageimprovements, kubejs } = event.getRecipes()

	addMoldRecipe(CDGMolds.CMI.PLATE, "tconstruct:plate_cast")
	addMoldRecipe(CDGMolds.CDG.BAR, "tconstruct:rod_cast")
	addMoldRecipe(CDGMolds.CDG.BOWL, "minecraft:bowl")
	addMoldRecipe(CDGMolds.CDG.CHAIN, "minecraft:chain")
	addMoldRecipe(CDGMolds.CDG.LINES, "minecraft:iron_ingot")

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
	 * @param {Internal.ItemStack_} input 
	 * @returns 
	 */
	function addMoldRecipe(moldId, input) {
		return vintageimprovements.curving(mold(moldId), [
			"createdieselgenerators:mold"
		]).itemAsHead(input)
	}
}
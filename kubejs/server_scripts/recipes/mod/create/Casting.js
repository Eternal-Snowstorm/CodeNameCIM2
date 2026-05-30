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
	Object.values(CDGMolds).forEach((group) => {
		Object.values(group).forEach((moldId) => {
			event.custom({
				type: "minecraft:stonecutting",
				count: 1,
				ingredient: Ingredient.of("#forge:plates/industrial_iron").toJson(),
				result: {
					item: "createdieselgenerators:mold",
					nbt: {
						Mold: moldId
					}
				}
			})
		})
	})
}
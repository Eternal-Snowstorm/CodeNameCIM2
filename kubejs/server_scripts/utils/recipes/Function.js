// priority: 13

/**
 * 
 *  同时兼容正常配方ID和 EMI Copy 出来的假ID
 *
 *  @example
 *  removeRecipe(event, "treetap:water_from_crying_obsidian")
 *  removeRecipe(event, [
 *     "treetap:water_from_crying_obsidian",
 *     "minecraft:iron_ingot"
 * ])
 * @param {Internal.RecipesEventJS} event 
 * @param {string | string[]} ids 
 */
function removeRecipe(event, ids) {
	(ids instanceof Array ? ids : [ids])
		.forEach((id) => {
			let realId = id

			// EMI/JEI Copy ID 修正
			if (id.startsWith("jei:/")) {
				realId = id
					.replace("jei:/", "")
					.replace("/", ":")
			}

			event.remove({
				id: realId
			})

			// console.log(realId)
		})
}
ServerEvents.highPriorityData((event) => {
		let materialType = [
			"ingots",
			"plates",
			"nuggets",
			"storage_blocks",
			"gears",
			"dusts",
			"rods"
		]
		materialType.forEach((type) => {
			global.metalGroup.forEach((material) => {
				let ids = Ingredient.of(`#forge:${type}/${material}`).getItemIds()
				if (ids.length > 0) {
					event.addJson(`oei:replacements/${material}_${type}.json`, {
						"matchItems": ids,
						"resultItems": ids[0]
					})
					console.log(`oei:replacements/${material}_${type}.json is generated!`)
				}
			})
		})

	// 焦煤
	event.addJson("oei:replacements/coal_coke", addUnification(
		"#forge:coal_coke",
		"thermal:coal_coke"
	))

	/**
	 * @example event.addJson("oei:replacements/coal_coke", addUnification("#forge:coal_coke", "thermal:coal_coke"))
	 * @param {Internal.Item | Internal.Ingredient} match 
	 * @param {Internal.Item | Internal.Ingredient} result 
	 * @returns 
	 */
	function addUnification(match, result) {
		return {
			matchItems: [match],
			resultItems: IngredientUtils.getFirstItemId(result)
		}
	}
})
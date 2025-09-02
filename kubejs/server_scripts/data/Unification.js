ServerEvents.highPriorityData((event) => {
	let materialType = [
		"ingot",
		"plate",
		"nugget",
		"storage_block",
		"gear",
		"dust",
		"rod"
	]
	materialType.forEach((type) => {
		global.metalGroup.forEach((material) => {
			let ids = Ingredient.of(`#forge:${type}s/${material}`).getItemIds()
			if (ids.length > 0) {
				event.addJson(`oei:replacements/${material}_${type}.json`, {
					"matchItems": ids,
					"resultItems": ids[0]
				})
				console.log(`oei:replacements/${material}_${type}.json is generated!`)
			}
		})
	})

	// 粗矿
	global.metalGroup.forEach((material) => {
		let ids = Ingredient.of(`#forge:raw_materials/${material}`).getItemIds()
		if (ids.length > 0) {
			event.addJson(`oei:replacements/raw_${material}.json`, {
				"matchItems": ids,
				"resultItems": ids[0]
			})
			console.log(`oei:replacements/raw_${material}.json is generated!`)
		}
	})

	// 粗矿块
	global.metalGroup.forEach((material) => {
		let ids = Ingredient.of(`#forge:storage_blocks/raw_${material}`).getItemIds()
		if (ids.length > 0) {
			event.addJson(`oei:replacements/raw_${material}_block.json`, {
				"matchItems": ids,
				"resultItems": ids[0]
			})
			console.log(`oei:replacements/raw_${material}_block.json is generated!`)
		}
	})

	// 焦煤
	event.addJson("oei:replacements/coal_coke", addUnification(
		"#forge:coal_coke",
		"thermal:coal_coke"
	))

	// 硫磺
	event.addJson("oei:replacements/sulfur", addUnification(
		"#forge:gems/sulfur",
		"thermal:sulfur"
	))

	// 硫磺
	event.addJson("oei:replacements/sulfur_block", addUnification(
		"#forge:storage_blocks/sulfur",
		"thermal:sulfur_block"
	))

	// 电容
	event.addJson("oei:replacements/capacitor", addUnification(
		"createaddition:capacitor",
		"cmi:simple_battery"
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
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
			let tag = `#forge:${type}s/${material}`
			let ids = Ingredient.of(tag).getItemIds()
			if (ids.length > 0) {
				event.addJson(`oei:replacements/${material}_${type}.json`, addUnification(
					tag,
					ids[0]
				))
				console.log(`oei:replacements/${material}_${type}.json is generated!`)
			}
		})
	})

	// 粗矿
	global.metalGroup.forEach((material) => {
		let tag = `#forge:raw_materials/${material}`
		let ids = Ingredient.of(tag).getItemIds()
		if (ids.length > 0) {
			event.addJson(`oei:replacements/raw_${material}.json`, addUnification(
				tag,
				ids[0]
			))
			console.log(`oei:replacements/raw_${material}.json is generated!`)
		}
	})

	// 粗矿块
	global.metalGroup.forEach((material) => {
		let tag = `#forge:storage_blocks/raw_${material}`
		let ids = Ingredient.of(tag).getItemIds()
		if (ids.length > 0) {
			event.addJson(`oei:replacements/raw_${material}_block.json`, addUnification(
				ids,
				ids[0]
			))
			console.log(`oei:replacements/raw_${material}_block.json is generated!`)
		}
	})

	// 焦煤
	addJsonFile("coal_coke", addUnification(
		"#forge:coal_coke",
		"thermal:coal_coke"
	))

	// 硫磺
	addJsonFile("sulfur", addUnification(
		"#forge:gems/sulfur",
		"thermal:sulfur"
	))

	// 硫磺
	addJsonFile("sulfur_block", addUnification(
		"#forge:storage_blocks/sulfur",
		"thermal:sulfur_block"
	))

	// 硝酸盐
	addJsonFile("niter_dust", addUnification(
		"#forge:dusts/niter",
		"thermal:niter_dust"
	))

	// 电容
	addJsonFile("capacitor", addUnification(
		"createaddition:capacitor",
		"cmi:simple_battery"
	))

	/**
	 * @example addJsonFile("coal_coke", addUnification("#forge:coal_coke", "thermal:coal_coke"))
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

	function addJsonFile(name, unification) {
		return event.addJson(`oei:replacements/${name}.json`, unification)
	}
})
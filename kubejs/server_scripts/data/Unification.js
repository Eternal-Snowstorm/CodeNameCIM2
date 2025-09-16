ServerEvents.highPriorityData((event) => {
	let materialType = [
		"ingot",
		"plate",
		"nugget",
		"storage_block",
		"gear",
		"dust",
		"rod",
		"wire"
	]
	materialType.forEach((type) => {
		global.metalGroup.forEach((material) => {
			let tag = `#forge:${type}s/${material}`
			let ids = Ingredient.of(tag).getItemIds()
			if (ids.length > 0) {
				addJsonFile(`${material}_${type}`, addUnification(
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
			addJsonFile(`raw_${material}`, addUnification(
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
			addJsonFile(`raw_${material}_block`, addUnification(
				tag,
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

	// 石英粉
	addJsonFile("quartz_dust", addUnification(
		"#forge:dusts/quartz",
		"thermal:quartz_dust"
	))

	// 黑曜石粉
	addJsonFile("obsidian_dust", addUnification(
		"#forge:dusts/obsidian",
		"create:powdered_obsidian"
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
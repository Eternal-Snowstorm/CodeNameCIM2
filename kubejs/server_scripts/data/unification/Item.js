ServerEvents.highPriorityData((event) => {

	let namespacePriority = {
		"cmi": 1,
		"thermal": 2,
		"thermalconstruct": 3,
		"thermalendergy": 4,
		"thermal_extra": 5,
		"create": 6,
		"createdeco": 7,
		"immersiveengineering": 8,
		"mekanism": 9,
		"vintageimprovements": 10,
		"ae2": 11,
		"ad_astra": 12
	}

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
			let currentNamespace
			let outputId
			let priorityValue = 13
			if (ids.length > 0) {
				for (let i = 0; i < ids.length; i++) {
					currentNamespace = ResourceLocation.parse(ids[i]).getNamespace()
					if (namespacePriority[currentNamespace] <= priorityValue) {
						outputId = ids[i]
						priorityValue = namespacePriority[currentNamespace]
					}
				}
				addJsonFile(`${material}_${type}`, addUnification(
					tag,
					outputId
				))
				console.debug(`oei:replacements/${material}_${type}.json is generated!`)
			}
		})
	})

	// 粗矿
	global.metalGroup.forEach((material) => {
		let tag = `#forge:raw_materials/${material}`
		let ids = Ingredient.of(tag).getItemIds()
		let currentNamespace
		let outputId
		let priorityValue = 13
		if (ids.length > 0) {
			for (let i = 0; i < ids.length; i++) {
				currentNamespace = ResourceLocation.parse(ids[i]).getNamespace()
				if (namespacePriority[currentNamespace] <= priorityValue) {
					outputId = ids[i]
					priorityValue = namespacePriority[currentNamespace]
				}
			}
			addJsonFile(`raw_${material}`, addUnification(
				tag,
				outputId
			))
			console.debug(`oei:replacements/raw_${material}.json is generated!`)
		}
	})

	// 粗矿块
	global.metalGroup.forEach((material) => {
		let tag = `#forge:storage_blocks/raw_${material}`
		let ids = Ingredient.of(tag).getItemIds()
		let currentNamespace
		let outputId
		let priorityValue = 13
		if (ids.length > 0) {
			for (let i = 0; i < ids.length; i++) {
				currentNamespace = ResourceLocation.parse(ids[i]).getNamespace()
				if (namespacePriority[currentNamespace] <= priorityValue) {
					outputId = ids[i]
					priorityValue = namespacePriority[currentNamespace]
				}
			}
			addJsonFile(`raw_${material}_block`, addUnification(
				tag,
				ids[0]
			))
			console.debug(`oei:replacements/raw_${material}_block.json is generated!`)
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

	// 硫粉
	addJsonFile("sulfur_dust", addUnification(
		"#forge:dusts/sulfur",
		"thermal:sulfur_dust"
	))

	// 黑曜石粉
	addJsonFile("obsidian_dust", addUnification(
		"#forge:dusts/obsidian",
		"create:powdered_obsidian"
	))

	// 矿渣
	addJsonFile("slag", addUnification(
		"#forge:slag",
		"thermal:slag"
	))

	// 番茄
	addJsonFile("tomato", addUnification(
		"#forge:vegetables/tomato",
		"kaleidoscope_cookery:tomato"
	))

	// 稻米
	addJsonFile("rice", addUnification(
		"#forge:seeds/rice",
		"kaleidoscope_cookery:rice"
	))

	// 稻穗
	addJsonFile("rice_panicle", addUnification(
		"farmersdelight:rice_panicle",
		"kaleidoscope_cookery:rice_panicle"
	))

	/**
	 * @example addJsonFile("coal_coke", addUnification("#forge:coal_coke", "thermal:coal_coke"))
	 * @param {Internal.Item | Internal.Ingredient} match 
	 * @param {Internal.Item | Internal.Ingredient} item 
	 * @returns 
	 */
	function addUnification(match, item) {
		return {
			matchItems: [match],
			resultItems: IngredientUtils.getFirstItemId(item)
		}
	}

	function addJsonFile(name, unification) {
		return event.addJson(`oei:replacements/${name}.json`, unification)
	}
})
ServerEvents.highPriorityData((event) => {
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

	// 火箭尾鳍
	addJsonFile("rocket_fin", addUnification(
		"ad_astra:rocket_fin",
		"cmi:tier_1_rocket_fin"
	))

	// 火箭鼻锥
	addJsonFile("rocket_nose_cone", addUnification(
		"ad_astra:rocket_nose_cone",
		"cmi:tier_1_rocket_nose_cone"
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
			resultItems: IngrUtils.getFirstItemId(item)
		}
	}

	function addJsonFile(name, unification) {
		event.addJson(`oei:replacements/${name}.json`, unification)
	}
})
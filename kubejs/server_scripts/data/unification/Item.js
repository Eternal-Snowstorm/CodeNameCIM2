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

	// 青金石粉
	addJsonFile("lapis_dust", addUnification(
		"#forge:dusts/lapis",
		"thermal:lapis_dust"
	))

	// 绿宝石粉
	addJsonFile("emerald_dust", addUnification(
		"#forge:dusts/emerald",
		"thermal:emerald_dust"
	))

	// 钻石粉
	addJsonFile("diamond_dust", addUnification(
		"#forge:dusts/diamond",
		"thermal:diamond_dust"
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

	// 板冲压模板
	addJsonFile("plate_mold", addUnification(
		"immersiveengineering:mold_plate",
		"cmi:plate_mold"
	))

	// 齿轮冲压模板
	addJsonFile("gear_mold_ie", addUnification(
		"immersiveengineering:mold_gear",
		"cmi:gear_mold"
	))
	addJsonFile("gear_mold_th", addUnification(
		"thermal:press_gear_die",
		"cmi:gear_mold"
	))

	// 杆冲压模板
	addJsonFile("rod_mold", addUnification(
		"immersiveengineering:mold_rod",
		"cmi:rod_mold"
	))

	// 线冲压模板
	addJsonFile("wire_mold", addUnification(
		"immersiveengineering:mold_wire",
		"cmi:wire_mold"
	))

	// 币冲压模板
	addJsonFile("coin_mold", addUnification(
		"thermal:press_coin_die",
		"cmi:coin_mold"
	))

	// 子弹冲压模板
	addJsonFile("bullet_mold", addUnification(
		"immersiveengineering:mold_bullet_casing",
		"cmi:bullet_mold"
	))

	// 2x2打包模板
	addJsonFile("2x2_packing_mold_ie", addUnification(
		"immersiveengineering:mold_packing_4",
		"cmi:2x2_packing_mold"
	))
	addJsonFile("2x2_packing_mold_th", addUnification(
		"thermal:press_packing_2x2_die",
		"cmi:2x2_packing_mold"
	))

	// 3x3打包模板
	addJsonFile("3x3_packing_mold_ie", addUnification(
		"immersiveengineering:mold_packing_9",
		"cmi:3x3_packing_mold"
	))
	addJsonFile("3x3_packing_mold_th", addUnification(
		"thermal:press_packing_3x3_die",
		"cmi:3x3_packing_mold"
	))

	// 解包模板
	addJsonFile("unpack_mold_ie", addUnification(
		"immersiveengineering:mold_unpacking",
		"cmi:unpack_mold"
	))
	addJsonFile("unpack_mold_th", addUnification(
		"thermal:press_unpacking_die",
		"cmi:unpack_mold"
	))

	// 木屑
	addJsonFile("wood_dust", addUnification(
		"#forge:dusts/wood",
		"createdieselgenerators:wood_chip"
	))

	// 共振紫水晶
	addJsonFile("charged_amethyst", addUnification(
		"#forge:gems/charged_amethyst",
		"cmi:charged_amethyst"
	))

	// 抽屉升级
	addJsonFile("drawer_upgrade_t1", addUnification(
		"functionalstorage:copper_upgrade",
		"cmi:amethyst_bronze_upgrade"
	))

	addJsonFile("drawer_upgrade_t2", addUnification(
		"functionalstorage:gold_upgrade",
		"cmi:rose_gold_upgrade"
	))

	addJsonFile("drawer_upgrade_t3", addUnification(
		"functionalstorage:diamond_upgrade",
		"cmi:steel_upgrade"
	))

	addJsonFile("drawer_upgrade_t4", addUnification(
		"functionalstorage:netherite_upgrade",
		"cmi:hepatizon_upgrade"
	))

	/**
	 * @example addJsonFile("coal_coke", addUnification("#forge:coal_coke", "thermal:coal_coke"))
	 * @param {Internal.Item | Internal.Ingredient} match 
	 * @param {Internal.Item | Internal.Ingredient} item 
	 * @returns 
	 */
	function addUnification(match, item) {
		if (match == null) {
			console.error("Match cannot be null")
		}

		if (item == null) {
			console.error("Item cannot be null")
		}

		return {
			matchItems: [match],
			resultItems: item
		}
	}

	/**
	 * 
	 * @param {string} name 文件名称
	 * @param {Internal.JsonElement_} unification json
	 */
	function addJsonFile(name, unification) {
		if (name == null || name.trim() === "") {
			console.error("File name cannot be null or empty")
		}

		if (unification == null) {
			console.error("Unification json cannot be null")
		}

		event.addJson(`oei:replacements/${name}.json`, unification)
	}
})
ItemEvents.tooltip((event) => {
	addCommonTooltip("cmi:wooden_mechanism")
	addCommonTooltip("cmi:stone_mechanism")
	addCommonTooltip("cmi:copper_mechanism")
	addCommonTooltip("cmi:nature_mechanism")
	addCommonTooltip("cmi:ender_mechanism")
	addCommonTooltip("cmi:photosensitive_mechanism")
	addCommonTooltip("cmi:cobalt_mechanism")
	addCommonTooltip("cmi:nether_mechanism")
	addCommonTooltip("cmi:pigiron_mechanism")
	addCommonTooltip("cmi:enchanted_mechanism")
	addCommonTooltip("cmi:nuclear_mechanism")
	addCommonTooltip("cmi:sculk_mechanism")
	addCommonTooltip("cmi:charged_amethyst")
	addCommonTooltip("cmi:potion_mechanism")
	addCommonTooltip("#minecraft:pickaxes")
	addCommonTooltip("#minecraft:infiniburn_all")
	addCommonTooltip("cmi:super_knife")
	addCommonTooltip("#cmi:special_ores")
	addCommonTooltip("#cmi:multiblock_machine_controller")
	addCommonTooltip("cmi:stone_plate")
	addCommonTooltip("cmi:creosote_wood_chip_briquette")
	addCommonTooltip("mm:large_steam_boiler")
	addCommonTooltip("#forge:ingots/siltsteel")
	addCommonTooltip("cmi:plasma_faucet")

	addCommonTooltip("createaddition:bioethanol")
	addCommonTooltip("thermal_extra:diesel")
	addCommonTooltip("createaddition:seed_oil")

	let chemSalts = [
		"fecl2",
		"feso4",
		"cucl2",
		"cuso4",
		"zncl2",
		"znso4",
		"alcl3",
		"al2so43",
		"aucl3",
		"au2so43",
		"agcl",
		"ag2so4",
		"pbcl2",
		"pbso4",
		"crcl3",
		"cr2so43",
		"sncl2",
		"snso4",
		"vocl2",
		"voso4",
		"uo2cl2",
		"uo2so4",
		"nicl2",
		"niso4",
		"cocl2",
		"coso4",
		"oscl3",
		"os2so43",
		"na2so4",
		"nacl",
		"caso4",
		"cacl2",
		"k2so4",
		"kcl",
		"ptcl4",
		"ptso42"
	]
	chemSalts.forEach((salt) => {
		addCommonTooltip(`cmi:${salt}`)
		addCommonTooltip(`cmi:${salt}_solution_bucket`)
	})
	function addCommonTooltip(item) {
		let itemTooltipTranslateKey = `tooltip.${item}`.replace(":", ".")
		event.add(item, Component.translatable(itemTooltipTranslateKey))
	}

	// 愚人节
	let month = Java.loadClass("java.time.LocalDateTime").now().getMonthValue()
	let day = Java.loadClass("java.time.LocalDateTime").now().getDayOfMonth()

	if (month === 4 && day === 1) {
		event.add("minecraft:dirt", Component.translatable(`tooltip.${global.namespace}.41dirt`))
	}

	// 熔点
	function toFahrenheit(celsius) {
		return celsius * 9 / 5 + 32
	}
	let materialTypeList = [
		"raw_material",
		"ore",
		"ingot",
		"plate",
		"nugget",
		"storage_block",
		"gear",
		"dust",
		"rod"
	]
	let meltingPoints = {
		// null代表该金属现实不存在, 所需熔点是随便写的一个数值
		andesite_alloy: 1200, // null
		aluminum: 660,
		brass: 930,
		bronze: 950,
		cobalt: 1495,
		constantan: 1200,
		copper: 1085,
		cast_iron: 1200,
		electrum: 1060,
		gold: 1064,
		invar: 1425,
		iron: 1535,
		siltsteel: 1400, // null
		lead: 327,
		lumium: 1000, // null
		netherite: 2050, // null
		nickel: 1455,
		osmium: 3033,
		signalum: 1200, // null
		silver: 962,
		steel: 1370,
		tin: 232,
		zinc: 419,
		rose_gold: 960,
		hepatizon: 990, // null
		manyullyn: 1600, // null
		amethyst_bronze: 1020, // null
		vanadium: 1910,
		chromium: 1907,
		enderium: 1500, // null
		platinum: 1768,
		uranium: 1132,
		desh: 1450, // null
		ostrum: 1650, // null
		calorite: 1800, // null
		prismalium: 1700, // null
		melodium: 1750, // null
		stellarium: 1800, // null
		soul_infused: 1900, // null
		shellite: 1500, // null
		twinite: 1600, // null
		dragonsteel: 2100, // null
		abyssal: 1950, // null
		stainless_steel: 1510,
		slimesteel: 1100, // null
		pig_iron: 1150,
		cinderslime: 1300, // null
		queens_slime: 1200, // null
		industrial_iron: 1500, // null
		refined_obsidian: 1400, // null
		refined_glowstone: 900, // null
		magnesium: 650,
		sodium: 98,
		potassium: 64,
		calcium: 842
	}
	materialTypeList.forEach((type) => {
		global.metalGroup.forEach((material) => {
			let mp = meltingPoints[material]

			if (mp !== null) {
				let translatable = Component.translatable(
					"tooltip.cmi.meltingPoint",
					mp,
					toFahrenheit(mp)
				).yellow()

				event.add(`#forge:${type}s/${material}`, translatable)
			}
		})
	})

	// 碎矿单独循环一次
	global.metalGroup.forEach((material) => {
		let mp = meltingPoints[material]

		if (mp !== null) {
			let translatable = Component.translatable(
				"tooltip.cmi.meltingPoint",
				mp,
				toFahrenheit(mp)
			).yellow()

			event.add(`#create:crushed_raw_materials/${material}`, translatable)
		}
	})
})
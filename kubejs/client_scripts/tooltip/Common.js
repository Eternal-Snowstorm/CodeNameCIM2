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
	addCommonTooltip("tconstruct:seared_heater")
	addCommonTooltip("createaddition:bioethanol")
	addCommonTooltip("thermal_extra:diesel")
	addCommonTooltip("createaddition:seed_oil")
	addCommonTooltip("#cmi:machine_block")
	addCommonTooltip("ad_astra:ice_shard")
	addCommonTooltip("cmi:sugarcane_fiber")

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
	materialTypeList.forEach((type) => {
		global.metalGroup.forEach((material) => {
			let mp = global.meltingPoints[material]

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

	// 燃料温度
	global.fuelList.forEach((fuel) => {
		let bucket = `${fuel}_bucket`
		let tp = global.fuelTemperatures[fuel]

		if (tp !== null) {
			let translatable = Component.translatable(
				"tooltip.cmi.fuelTemperature",
				tp,
				toFahrenheit(tp)
			).yellow()

			event.add(bucket, translatable)
		}
	})

	// 碎矿单独循环一次
	global.metalGroup.forEach((material) => {
		let mp = global.meltingPoints[material]

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
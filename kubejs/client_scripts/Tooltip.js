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
	addCommonTooltip("cmi:cast_iron_ingot")
	addCommonTooltip("cmi:creosote_wood_chip_briquette")
	addCommonTooltip("mm:large_steam_boiler")
	addCommonTooltip("#forge:ingots/siltsteel")

	addCommonTooltip("createaddition:bioethanol")
	addCommonTooltip("thermal_extra:diesel")
	addCommonTooltip("createaddition:seed_oil")
	
	addAccelerateTooltip("cmi:stone_mechanism")
	addAccelerateTooltip("cmi:andesite_mechanism")
	addAccelerateTooltip("cmi:copper_mechanism")
	addAccelerateTooltip("cmi:iron_mechanism")
	addAccelerateTooltip("cmi:gold_mechanism")
	addAccelerateTooltip("cmi:ender_mechanism")
	addAccelerateTooltip("vintageimprovements:redstone_module")
	addAccelerateTooltip("cmi:enchanted_mechanism")
	addAccelerateTooltip("cmi:nether_mechanism")
	addAccelerateTooltip("cmi:cobalt_mechanism")
	addAccelerateTooltip("cmi:wooden_mechanism")
	addAccelerateTooltip("cmi:smart_mechanism")
	addAccelerateTooltip("create:precision_mechanism")

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

	function addAccelerateTooltip(item) {
		event.addAdvanced(item, (item, advanced, text) => {
			if (event.shift) {
				let lines = Component.translatable(`tooltip.${item.getId()}.accelerate`.replace(":", "."))
					.string.split("\n")
				lines.forEach((line) => {
					text.add(line)
				})
			} else {
				text.add(Component.translatable(`tooltip.${global.namespace}.acceleratable`))
			}
		})
	}

	// 地质锤的tooltip
	event.addAdvanced("cmi:geological_hammer", (item, advanced, text) => {
		if (global.isDeveloper) {
			text.add(Component.translatable("tooltip.cmi.geographycal_hammer.developer1"))
			text.add(Component.translatable("tooltip.cmi.geographycal_hammer.developer2"))
		} else {
			text.add(Component.translatable("tooltip.cmi.geographycal_hammer.not_developer"))
		}
	})

	// 初始套件的Tooltip
	event.addAdvanced("cmi:initial_item_kit", (item, advanced, text) => {
		if (event.shift) {
			let lines = Component.translatable("tooltip.cmi.initial_item_kit.shift")
				.string.split("\n")
			lines.forEach((line) => {
				text.add(line)
			})
		} else {
			text.add(Component.translatable("tooltip.cmi.initial_item_kit.tip"))
		}
	})

	// 愚人节
	let month = Java.loadClass("java.time.LocalDateTime").now().getMonthValue()
	let day = Java.loadClass("java.time.LocalDateTime").now().getDayOfMonth()

	if (month === 4 && day === 1) {
		event.add("minecraft:dirt", Component.translatable(`tooltip.${global.namespace}.41dirt`))
	}
})
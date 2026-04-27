ItemEvents.tooltip((event) => {
	addCommonTooltip("cmi:wooden_mechanism")
	addCommonTooltip("cmi:stone_mechanism")
	addCommonTooltip("cmi:copper_mechanism")
	addCommonTooltip("cmi:nature_mechanism")
	addCommonTooltip("cmi:ender_mechanism")
	addCommonTooltip("cmi:thermal_mechanism")
	addCommonTooltip("cmi:photosensitive_mechanism")
	addCommonTooltip("cmi:cobalt_mechanism")
	addCommonTooltip("cmi:nether_mechanism")
	addCommonTooltip("cmi:pig_iron_mechanism")
	addCommonTooltip("cmi:enchanted_mechanism")
	addCommonTooltip("cmi:nuclear_mechanism")
	addCommonTooltip("cmi:sculk_mechanism")
	addCommonTooltip("cmi:charged_amethyst")
	addCommonTooltip("cmi:potion_mechanism")
	addCommonTooltip("cmi:smart_mechanism")
	addCommonTooltip("#minecraft:pickaxes")
	addCommonTooltip("#minecraft:infiniburn_all")
	addCommonTooltip("cmi:super_knife")
	addCommonTooltip("#cmi:special_ores")
	addCommonTooltip("cmi:stone_plate")
	addCommonTooltip("cmi:creosote_wood_chip_briquette")
	addCommonTooltip("#forge:ingots/siltsteel")
	addCommonTooltip("cmi:overcharged_alloy_faucet")
	addCommonTooltip("tconstruct:seared_heater")
	addCommonTooltip("createaddition:bioethanol")
	addCommonTooltip("thermal_extra:diesel")
	addCommonTooltip("createaddition:seed_oil")
	addCommonTooltip("#cmi:machine_block")
	addCommonTooltip("ad_astra:ice_shard")
	addCommonTooltip("#cmi:broken_drill_heads")
	addCommonTooltip("portality:controller")
	addCommonTooltip("cmi:parchment")
	addCommonTooltip("alexscaves:notor_gizmo")
	addCommonTooltip("immersiveindustry:electrolyzer")
	addCommonTooltip("moreburners:heat_upgrade")
	addCommonTooltip("create:basin")
	addCommonTooltip("create:sail_frame")

	/**
	 * 
	 * @param {Internal.Ingredient_} ingredient 
	 */
	function addCommonTooltip(ingredient) {
		let itemTooltipTranslateKey = `tooltip.${ingredient}`.replace(":", ".")
		event.add(ingredient, Component.translatable(itemTooltipTranslateKey).aqua())
	}

	event.add(["create:encased_fan", "ratatouille:oven_fan"], [
		Component.translatable("tooltip.cmi.fan")
	])
	event.add([
		"#tconstruct:casts",
		"tconstruct:seared_table",
		"tconstruct:scorched_table",
		"tconstruct:seared_basin",
		"tconstruct:scorched_basin"
	], Component.translatable("tooltip.cmi.cast"))

	// 愚人节
	let month = LocalDateTime.now().getMonthValue()
	let day = LocalDateTime.now().getDayOfMonth()

	if (month === 4 && day === 1) {
		event.add("minecraft:dirt", Component.translatable(`tooltip.${Cmi.MODID}.41dirt`).aqua())
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
		CmiMetalRegistry.getAll().forEach((metal) => {
			let mp = metal.getMeltingPoint()

			if (mp > 0) {
				let translatable = Component.translatable(
					"tooltip.cmi.meltingPoint",
					mp,
					NebulaLibs.toFahrenheit(mp)
				).yellow()

				event.add(`#forge:${type}s/${metal.getId()}`, translatable)
			}
		})
	})

	// 燃料温度
	CmiGlobal.FUEL_TEMPERATURES.forEach((fuel, temperatures) => {
		let bucket = `${fuel}_bucket`
		/**
		 * @type {number}
		 */
		let tp = temperatures

		if (typeof tp === "number") {
			let translatable = Component.translatable(
				"tooltip.cmi.fuelTemperature",
				tp,
				NebulaLibs.toFahrenheit(tp)
			).yellow()

			event.add(bucket, translatable)
		}
	})

	// 碎矿单独循环一次
	CmiMetalRegistry.getAll().forEach((metal) => {
		let mp = metal.getMeltingPoint()

		if (mp > 0) {
			let translatable = Component.translatable(
				"tooltip.cmi.meltingPoint",
				mp,
				NebulaLibs.toFahrenheit(mp)
			).yellow()

			event.add(`#create:crushed_raw_materials/${metal.getId()}`, translatable)
		}
	})
})
MMEvents.createStructures((event) => {
	/**
	 *
	 * @param {{ [lang: string]: string }} map 
	 * @returns {String} 
	 */
	function getLangText(map) {
		const DEFAULT_LANGUAGE = "en_us"

		// 客户端环境
		if (Platform.isClientEnvironment()) {
			let lang = Client.instance.getLanguageManager().getSelected()

			return (map[lang] || map[DEFAULT_LANGUAGE] || map[Object.keys(map)[0]] || "")
		}

		return (map[DEFAULT_LANGUAGE] || map[Object.keys(map)[0]] || "")
	}

	/**
	 * 
	 * @param {String} id 
	 * @param {{ [lang: String]: String }} names 
	 * @param {Internal.Consumer_<Internal.StructureLayoutBuilderJS>} layout 
	 * @returns 
	 */
	function addMMStructure(id, names, layout) {
		return event.create(`${global.namespace}:${id}_structure`)
			.controllerId(`mm:${id}`)
			.name(getLangText(names))
			.layout(layout)
	}

	// 大型蒸汽锅炉
	addMMStructure("large_steam_boiler", {
		zh_cn: "大型蒸汽锅炉",
		en_us: "Large Steam Boiler"
	}, (builder) => {
		builder.layer([
			"DDD",
			"DDD",
			"DDD"
		])
		builder.layer([
			"DDD",
			"D D",
			"DDD"
		])
		builder.layer([
			"DCD",
			"E F",
			"DDD"
		])
		builder.layer([
			"ABA",
			"AAA",
			"AAA"
		])
		builder.key("F", {
			block: "mm:large_steam_boiler_fluid_input"
		})
		builder.key("B", {
			block: "mm:large_steam_boiler_item_input"
		})
		builder.key("A", {
			block: "tconstruct:scorched_bricks"
		})
		builder.key("E", {
			block: "mm:large_steam_boiler_fluid_output"
		})
		builder.key("D", {
			block: "cmi:bronze_casing"
		})
	})

	// 蒸汽矿石处理机
	addMMStructure("steam_ore_processor", {
		zh_cn: "蒸汽矿石处理机",
		en_us: "Steam Ore Processor"
	}, (builder) => {
		builder.layer([
			"BBB",
			"BJB",
			"BBB"
		])
		builder.layer([
			"BIB",
			"I I",
			"BIB"
		])
		builder.layer([
			"BHB",
			"G E",
			"BCB"
		])
		builder.layer([
			"AAA",
			"AAA",
			"AAA"
		])
		builder.key("E", {
			block: "mm:steam_ore_processor_item_output"
		})
		builder.key("H", {
			block: "mm:steam_ore_processor_fluid_output"
		})
		builder.key("I", {
			tag: "forge:glass"
		})
		builder.key("A", {
			block: "immersiveengineering:treated_wood_horizontal"
		})
		builder.key("B", {
			block: "cmi:bronze_casing"
		})
		builder.key("G", {
			block: "mm:steam_ore_processor_item_input"
		})
		builder.key("J", {
			block: "mm:steam_ore_processor_fluid_input"
		})
	})

	// 裂解机
	addMMStructure("cracker", {
		zh_cn: "裂解机",
		en_us: "Cracker"
	}, (builder) => {
		builder.layer([
			"FFFFF",
			"FFFFF",
			"FFFFF",
			"FFFFF",
			"FFFFF"
		])
		builder.layer([
			"FFFFF",
			"FBBBF",
			"FBDBF",
			"FBBBF",
			"FFFFF"
		])
		builder.layer([
			"FFFFF",
			"F   F",
			"I B F",
			"F   F",
			"FFFFF"
		])
		builder.layer([
			"FFFFF",
			"F   F",
			"I B H",
			"F   F",
			"FFCFF"
		])
		builder.layer([
			"AAEAA",
			"ABBBA",
			"ABDBA",
			"ABBBA",
			"AAAAA"
		])
		builder.key("A", {
			block: "create:industrial_iron_block"
		})
		builder.key("D", {
			block: "immersiveengineering:heavy_engineering"
		})
		builder.key("F", {
			block: "cmi:pressure_resistance_casing"
		})
		builder.key("B", {
			block: "immersiveengineering:light_engineering"
		})
		builder.key("E", {
			block: "mm:cracker_energy_input"
		})
		builder.key("H", {
			block: "mm:cracker_fluid_output"
		})
		builder.key("I", {
			block: "mm:cracker_fluid_input"
		})
	})

	// 粒子对撞机
	addMMStructure("particle_collision_machine", {
		zh_cn: "粒子对撞机",
		en_us: "Particle Collider Machine"
	}, (builder) => {
		builder.layer([
			"ABBBABBBA",
			"ABBBABBBA",
			"ABBBABBBA"
		])
		builder.layer([
			"ABBBGBBBA",
			"F       E",
			"ABBBCBBBA"
		])
		builder.layer([
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA"
		])
		builder.key("E", {
			block: "mm:particle_collision_machine_item_output"
		})
		builder.key("B", {
			block: "mekanism:structural_glass"
		})
		builder.key("G", {
			block: "mm:particle_collision_machine_energy_input"
		})
		builder.key("A", {
			block: "mekanism:sps_casing"
		})
		builder.key("F", {
			block: "mm:particle_collision_machine_item_input"
		})
	})
})
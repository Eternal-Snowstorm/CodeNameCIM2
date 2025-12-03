ServerEvents.highPriorityData((event) => {
	/**
	 * 
	 * @param {String} path 结构id
	 * @returns 
	 */
	function radarTemplatePool(path) {
		return {
			weight: 1,
			element: {
				location: `${global.namespace}:${path}`,
				element_type: "minecraft:single_pool_element",
				processors: "minecraft:empty",
				projection: "rigid"
			}
		}
	}

	// 结构
	let structure = {
		type: "minecraft:jigsaw",
		biomes: [
			"minecraft:jagged_peaks",
			"minecraft:frozen_peaks",
			"minecraft:stony_peaks",
			"minecraft:cherry_grove",
			"minecraft:grove",
			"ad_astra:lunar_wastelands",
			"ad_astra:martian_wastelands",
			"ad_astra:mercury_deltas",
			"minecraft:desert",
			"minecraft:badlands"
		],
		size: 1,
		start_pool: `${global.namespace}:radar/radar`,
		step: "surface_structures",
		start_height: {
			absolute: 1
		},
		spawn_overrides: {},
		max_distance_from_center: 64,
		project_start_to_heightmap: "WORLD_SURFACE_WG",
		terrain_adaptation: "beard_thin",
		use_expansion_hack: false
	}

	// 结构集
	let structureSet = {
		structures: [
			{
				structure: `${global.namespace}:radar/radar`,
				weight: 1
			}
		],
		placement: {
			type: "minecraft:random_spread",
			salt: 235235435,
			spacing: 70,
			separation: 50
		}
	}

	// 主体结构池
	let templatePool = {
		name: `${global.namespace}:radar/radar`,
		fallback: "minecraft:empty",
		elements: [
			radarTemplatePool("radar/main")
		]
	}

	// 设备结构池
	let deviceTemplatePool = {
		name: `${global.namespace}:radar/device`,
		fallback: "minecraft:empty",
		elements: [
			radarTemplatePool("radar/radar_1"),
			radarTemplatePool("radar/radar_2"),
			radarTemplatePool("radar/radar_3"),
			radarTemplatePool("radar/radar_4"),
			radarTemplatePool("radar/radar_e")
		]
	}

	// 生成数据包
	event.addJson(`cmi:worldgen/structure/radar/radar`, structure)
	event.addJson(`cmi:worldgen/structure_set/radar/radar`, structureSet)
	event.addJson(`cmi:worldgen/template_pool/radar/radar`, templatePool)
	event.addJson(`cmi:worldgen/template_pool/radar/device`, deviceTemplatePool)
})

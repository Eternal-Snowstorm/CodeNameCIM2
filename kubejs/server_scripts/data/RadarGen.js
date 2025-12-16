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
	let overworldStructure = {
		type: "minecraft:jigsaw",
		biomes: [
			"minecraft:jagged_peaks",
			"minecraft:frozen_peaks",
			"minecraft:stony_peaks",
			"minecraft:cherry_grove",
			"minecraft:grove",
			"minecraft:desert",
			"minecraft:badlands"
		],
		size: 1,
		start_pool: `${global.namespace}:radar/overworld`,
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

	let moonStructure = {
		type: "minecraft:jigsaw",
		biomes: [
			"ad_astra:lunar_wastelands"
		],
		size: 1,
		start_pool: `${global.namespace}:radar/moon`,
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

	let marsStructure = {
		type: "minecraft:jigsaw",
		biomes: [
			"ad_astra:martian_wastelands"
		],
		size: 1,
		start_pool: `${global.namespace}:radar/mars`,
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

	let mercuryStructure = {
		type: "minecraft:jigsaw",
		biomes: [
			"ad_astra:mercury_deltas"
		],
		size: 1,
		start_pool: `${global.namespace}:radar/mercury`,
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

	// 基座结构池&结构集
	let dimensions = [
		"overworld",
		"moon",
		"mars",
		"mercury"
	]
	dimensions.forEach((dim) => {

		let templatePool = {
			name: `${global.namespace}:radar/${dim}`,
			fallback: "minecraft:empty",
			elements: [
				radarTemplatePool(`radar/${dim}/base_a`),
				radarTemplatePool(`radar/${dim}/base_b`)
			]
		}

		let structureSet = {
			structures: [
				{
					structure: `${global.namespace}:radar/${dim}/base_a`,
					weight: 1
				},
				{
					structure: `${global.namespace}:radar/${dim}/base_b`,
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

		event.addJson(`cmi:worldgen/structure_set/radar/${dim}`, structureSet)
		event.addJson(`cmi:worldgen/template_pool/radar/${dim}`, templatePool)
	})

	// 第二层结构池
	let layerTemplatePool = {
		name: `${global.namespace}:radar/layer`,
		fallback: "minecraft:empty",
		elements: [
			radarTemplatePool("radar/layer/air"),
			radarTemplatePool("radar/layer/radar_a"),
			radarTemplatePool("radar/layer/radar_b"),
			radarTemplatePool("radar/layer/radar_c"),
			radarTemplatePool("radar/layer/radar_d")
		]
	}

	// 第三层结构池
	let topTemplatePool = {
		name: `${global.namespace}:radar/device`,
		fallback: "minecraft:empty",
		elements: [
			radarTemplatePool("radar/top/broken_a"),
			radarTemplatePool("radar/top/broken_b"),
			radarTemplatePool("radar/top/full")
		]
	}

	// 生成数据包
	event.addJson(`cmi:worldgen/structure/radar/overworld`, overworldStructure)
	event.addJson(`cmi:worldgen/structure/radar/moon`, moonStructure)
	event.addJson(`cmi:worldgen/structure/radar/mars`, marsStructure)
	event.addJson(`cmi:worldgen/structure/radar/mercury`, mercuryStructure)
	event.addJson(`cmi:worldgen/template_pool/radar/layer`, layerTemplatePool)
	event.addJson(`cmi:worldgen/template_pool/radar/top`, topTemplatePool)
})

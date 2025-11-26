ServerEvents.highPriorityData((event) => {
	event.addJson(`cmi:worldgen/template_pool/dev/blank`, {
		name: `${global.namespace}:dev/blank`,
		fallback: "minecraft:empty",
		elements: [
			{
				weight: 1,
				element: {
					location: "cmi:dev/blank",
					element_type: "minecraft:single_pool_element",
					processors: "minecraft:empty",
					projection: "rigid"
				}
			}
		]
	})

	/**
	 * 
	 * @param {String} namespace 命名空间
	 * @param {String} name 文件名
	 */
	function deleteStructureGen(namespace, name) {
		event.addJson(`${namespace}:worldgen/structure/${name}`, {
			type: "minecraft:jigsaw",
			biomes: [],
			size: 1,
			start_pool: `cmi:dev/blank`,
			step: "surface_structures",
			start_height: {
				absolute: 0
			},
			spawn_overrides: {},
			max_distance_from_center: 64,
			project_start_to_heightmap: "WORLD_SURFACE_WG",
			terrain_adaptation: "beard_thin",
			use_expansion_hack: false
		})
	}

	/**
	 * 
	 * @param {String} namespace 命名空间
	 * @param {String} name 文件名
	 */
	function deleteFeatureGen(namespace, name) {
		event.addJson(`${namespace}:worldgen/configured_feature/${name}`, {
			type: "minecraft:ore",
			config: {
				discard_chance_on_air_exposure: 0.0,
				size: 1,
				targets: []
			}
		})
	}

	deleteStructureGen("ad_astra", "oil_well")
	deleteStructureGen("deepdrilling", "copper_node")
	deleteStructureGen("deepdrilling", "gold_node")
	deleteStructureGen("deepdrilling", "iron_node")
	deleteStructureGen("deepdrilling", "zinc_node")
	deleteStructureGen("deepdrilling", "asurine_node")
	deleteStructureGen("deepdrilling", "crimsite_node")
	deleteStructureGen("deepdrilling", "ochrum_node")
	deleteStructureGen("deepdrilling", "veridium_node")

	deleteFeatureGen("immersiveengineering", "uranium")
	deleteFeatureGen("immersiveengineering", "nickel")
	deleteFeatureGen("immersiveengineering", "silver")
	deleteFeatureGen("immersiveengineering", "deep_nickel")
	deleteFeatureGen("immersiveengineering", "lead")
	deleteFeatureGen("mekanism", "ore_uranium_small")
	deleteFeatureGen("mekanism", "ore_uranium_small_retrogen")
	deleteFeatureGen("mekanism", "ore_uranium_buried")
	deleteFeatureGen("mekanism", "ore_uranium_buried_retrogen")
})
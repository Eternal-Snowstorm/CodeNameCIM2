ServerEvents.highPriorityData((event) => {

	/**
	 * 
	 * @param {String} namespace 命名空间
	 * @param {String} name 文件名
	 */
	function deleteTemplatePool(namespace, name) {
		event.addJson(`cmi:worldgen/template_pool/${namespace}/${name}`, {
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

	deleteTemplatePool("ad_astra", "oil_well")
	deleteTemplatePool("deepdrilling", "copper_node")
	deleteTemplatePool("deepdrilling", "gold_node")
	deleteTemplatePool("deepdrilling", "iron_node")
	deleteTemplatePool("deepdrilling", "zinc_node")
	deleteTemplatePool("deepdrilling", "asurine_node")
	deleteTemplatePool("deepdrilling", "crimsite_node")
	deleteTemplatePool("deepdrilling", "ochrum_node")
	deleteTemplatePool("deepdrilling", "veridium_node")

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
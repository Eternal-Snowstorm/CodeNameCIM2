ServerEvents.highPriorityData((event) => {

	/**
	 * 
	 * @param {String} namespace 命名空间
	 * @param {String} name 文件名
	 */
	function deleteStructureGen(namespace, name) {
		event.addJson(`${namespace}:worldgen/structure_set/${name}`, {
			"structures": [],
			"placement": {
				"type": "minecraft:random_spread",
				"spacing": 16,
				"separation": 8,
				"salt": 1
			}
		})
	}

	/**
	 * 
	 * @param {String} namespace 命名空间
	 * @param {String} name 文件名
	 */
	function deleteFeatureGen(namespace, name) {
		event.addJson(`${namespace}:worldgen/configured_feature/${name}`, {
			type: "minecraft:no_op",
			config: {}
		})
	}

	deleteStructureGen("ad_astra", "oil_well")

	deleteFeatureGen("immersiveengineering", "uranium")
	deleteFeatureGen("immersiveengineering", "nickel")
	deleteFeatureGen("immersiveengineering", "silver")
	deleteFeatureGen("immersiveengineering", "deep_nickel")
	deleteFeatureGen("immersiveengineering", "lead")
	deleteFeatureGen("mekanism", "ore_uranium_small")
	deleteFeatureGen("mekanism", "ore_uranium_small_retrogen")
	deleteFeatureGen("mekanism", "ore_uranium_buried")
	deleteFeatureGen("mekanism", "ore_uranium_buried_retrogen")
	deleteFeatureGen("thermal", "silver_ore")
	deleteFeatureGen("thermal", "nickel_ore")
})
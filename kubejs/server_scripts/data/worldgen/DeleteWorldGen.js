ServerEvents.highPriorityData((event) => {
	/**
	 * 
	 * @param {string} namespace 命名空间
	 * @param {string} name 文件名
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
	 * @param {string} namespace 命名空间
	 * @param {string} name 文件名
	 */
	function deleteFeatureGen(namespace, name) {
		event.addJson(`${namespace}:worldgen/configured_feature/${name}`, {
			type: "minecraft:no_op",
			config: {}
		})
	}

	/**
	 * 
	 * @param {string} name 
	 */
	function delMekFea(name) {
		deleteFeatureGen("mekanism", name)
	}

	/**
	 * 
	 * @param {string} name 
	 */
	function defIEFea(name) {
		deleteFeatureGen("immersiveengineering", name)
	}

	deleteStructureGen("ad_astra", "oil_well")
	deleteStructureGen("create_rns", "deposits")
	deleteStructureGen("create_rns", "nether_deposits")

	deleteFeatureGen("immersiveengineering", "uranium")
	deleteFeatureGen("immersiveengineering", "nickel")
	deleteFeatureGen("immersiveengineering", "silver")
	deleteFeatureGen("immersiveengineering", "deep_nickel")
	deleteFeatureGen("immersiveengineering", "lead")

	delMekFea("ore_uranium_small")
	delMekFea("ore_uranium_small_retrogen")
	delMekFea("ore_uranium_buried")
	delMekFea("ore_uranium_buried_retrogen")
	delMekFea("ore_osmium_middle")
	delMekFea("ore_osmium_middle_retrogen")
	delMekFea("ore_osmium_small")
	delMekFea("ore_osmium_small_retrogen")
	delMekFea("ore_osmium_upper")
	delMekFea("ore_osmium_upper_retrogen")
	delMekFea("ore_fluorite_buried")
	delMekFea("ore_fluorite_buried_retrogen")
	delMekFea("ore_fluorite_normal")
	delMekFea("ore_fluorite_normal_retrogen")

	deleteFeatureGen("thermal", "silver_ore")
	deleteFeatureGen("thermal", "nickel_ore")
})
StartupEvents.registry("block", (event) => {
	function addOreNode(name, types) {
		const TYPE_LIST = Array.isArray(types) ? types : [types]

		TYPE_LIST.forEach((type) => {
			if (type !== "nether" && type !== "deepslate") {
				event.create(`${global.namespace}:${type}_${name}_ore_node`)
					.soundType(SoundType.STONE)
					.hardness(-1)
					.resistance(100)
					.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
					.tagItem(`${global.namespace}:ore_nodes`)
					.tagBlock("mekanism:cardboard_blacklist")
					.tag("deepdrilling:ore_nodes")
			} else if (type === "deepslate") {
				event.create(`${global.namespace}:${type}_${name}_ore_node`)
					.soundType(SoundType.DEEPSLATE)
					.hardness(-1)
					.resistance(100)
					.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
					.tagItem(`${global.namespace}:ore_nodes`)
					.tagBlock("mekanism:cardboard_blacklist")
					.tag("deepdrilling:ore_nodes")
			} else if (type === "nether") {
				event.create(`${global.namespace}:${type}_${name}_ore_node`)
					.soundType(SoundType.NETHER_ORE)
					.hardness(-1)
					.resistance(100)
					.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
					.tagItem(`${global.namespace}:ore_nodes`)
					.tagBlock("mekanism:cardboard_blacklist")
					.tag("deepdrilling:ore_nodes")
			}
		})
	}

	addOreNode("uranium", "nether")
	addOreNode("copper", "deepslate")
	addOreNode("iron", "deepslate")
	addOreNode("zinc", "deepslate")
	addOreNode("gold", "deepslate")
	addOreNode("platinum", "moon")
	addOreNode("cheese", "moon")
	addOreNode("coal", "deepslate")

	// Array Example
	// addOreNode("diamond", ["deepslate", "nether"])
	// addOreNode("emerald", ["stone", "deepslate"])
})
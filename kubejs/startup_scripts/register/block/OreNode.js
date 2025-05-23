StartupEvents.registry("block", (event) => {
	function addOreNode(name, type) {
		if (type !== "nether" || type !== "deepslate") {
			event.create(`${global.namespace}:${type}_${name}_ore_node`)
				.soundType(SoundType.STONE)
				.hardness(-1)
				.resistance(100)
				.textureAll(`${global.namespace}:block/ore_node/${name}/${type}`)
				.tagBlock("deepdrilling:ore_nodes")
				.tag("deepdrilling:ore_nodes")
		} else if (type === "deepslate") {
			event.create(`${global.namespace}:${type}_${name}_ore_node`)
				.soundType(SoundType.DEEPSLATE)
				.hardness(-1)
				.resistance(100)
				.textureAll(`${global.namespace}:block/ore_node/${name}/${type}`)
				.tagBlock("deepdrilling:ore_nodes")
				.tag("deepdrilling:ore_nodes")
		} else if (type === "nether") {
			event.create(`${global.namespace}:${type}_${name}_ore_node`)
				.soundType(SoundType.NETHER_ORE)
				.hardness(-1)
				.resistance(100)
				.textureAll(`${global.namespace}:block/ore_node/${name}/${type}`)
				.tagBlock("deepdrilling:ore_nodes")
				.tag("deepdrilling:ore_nodes")
		}
	}

	addOreNode("uranium", "nether")
	addOreNode("copper", "deepslate")
	addOreNode("iron", "deepslate")
	addOreNode("zinc", "deepslate")
	addOreNode("gold", "deepslate")
})
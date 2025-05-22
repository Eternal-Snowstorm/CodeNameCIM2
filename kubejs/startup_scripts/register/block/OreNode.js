StartupEvents.registry("block", (event) => {
	function addOreNode(name) {
		event.create(`${global.namespace}:${name}_ore_node`)
			.soundType(SoundType.STONE)
			.hardness(-1)
			.resistance(100)
			.textureAll(`${global.namespace}:block/ore_node/${name}`)
			.tagBlock("deepdrilling:ore_nodes")
			.tag("deepdrilling:ore_nodes")
	}

	addOreNode("uranium")
})
let $NoteBlockInstrument =
	Java.loadClass("net.minecraft.world.level.block.state.properties.NoteBlockInstrument")

StartupEvents.registry("block", (event) => {
	function addOreNode(name, types) {
		const TYPE_LIST = Array.isArray(types) ? types : [types]

		TYPE_LIST.forEach((type) => {
			if (type !== "nether" && type !== "deepslate") {
				event.create(`${global.namespace}:${type}_${name}_ore_node`)
					.soundType(SoundType.STONE)
					.instrument($NoteBlockInstrument.BASEDRUM)
					.hardness(-1)
					.resistance(3600000)
					.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
					.noDrops()
					.tagItem(`${global.namespace}:ore_nodes`)
					.tagBlock("mekanism:cardboard_blacklist")
					.tagBlock("ae2:blacklisted/spatial")
					.tag("deepdrilling:ore_nodes")
			} else if (type === "deepslate") {
				event.create(`${global.namespace}:${type}_${name}_ore_node`)
					.soundType(SoundType.DEEPSLATE)
					.instrument($NoteBlockInstrument.BASEDRUM)
					.hardness(-1)
					.resistance(3600000)
					.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
					.noDrops()
					.tagItem(`${global.namespace}:ore_nodes`)
					.tagBlock("mekanism:cardboard_blacklist")
					.tagBlock("ae2:blacklisted/spatial")
					.tag("deepdrilling:ore_nodes")
			} else if (type === "nether") {
				event.create(`${global.namespace}:${type}_${name}_ore_node`)
					.soundType(SoundType.NETHER_ORE)
					.instrument($NoteBlockInstrument.BASEDRUM)
					.hardness(-1)
					.resistance(3600000)
					.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
					.noDrops()
					.tagItem(`${global.namespace}:ore_nodes`)
					.tagBlock("mekanism:cardboard_blacklist")
					.tagBlock("ae2:blacklisted/spatial")
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
	addOreNode("tin", "deepslate")

	// Array Example
	// addOreNode("diamond", ["deepslate", "nether"])
	// addOreNode("emerald", ["stone", "deepslate"])
})
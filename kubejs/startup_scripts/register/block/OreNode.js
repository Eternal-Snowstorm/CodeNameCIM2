let $NoteBlockInstrument =
	Java.loadClass("net.minecraft.world.level.block.state.properties.NoteBlockInstrument")

StartupEvents.registry("block", (event) => {

	// SoundType List
	const SOUND_TYPE = {
		"stone": SoundType.STONE,
		"deepslate": SoundType.DEEPSLATE,
		"nether": SoundType.NETHER_ORE,
		"moon": SoundType.STONE
	}

	// Common Block Tags List
	const COMMON_BLOCK_TAGS = [
		"mekanism:cardboard_blacklist",
		"ae2:blacklisted/spatial",
		"deepdrilling:ore_nodes"
	]

	// Common Item Tag(s) List
	const COMMON_ITEM_TAGS = [
		`${global.namespace}:ore_nodes`
	]

	/**
	 * 注册矿石节点方块
	 * @param {String} name 矿石id
	 * @param {String | Array<String>} types 类型, 可以是 stone/deepslate/nether/moon 等,支持数组
	 */
	function addOreNode(name, types) {
		let typeList = Array.isArray(types) ? types : [types]

		typeList.forEach((type) => {
			const SOUND = SOUND_TYPE[type] || SoundType.STONE
			const BLOCK_ID = `${global.namespace}:${type}_${name}_ore_node`

			let blockBuilder = event.create(BLOCK_ID)
				.soundType(SOUND)
				.instrument($NoteBlockInstrument.BASEDRUM)
				.hardness(-1)
				.resistance(3600000)
				.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
				.noDrops()

			// Add Block Tag
			COMMON_BLOCK_TAGS.forEach((tag) => {
				blockBuilder.tagBlock(tag)
			})

			// Add Item Tag
			COMMON_ITEM_TAGS.forEach((tag) => {
				blockBuilder.tagItem(tag)
			})
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
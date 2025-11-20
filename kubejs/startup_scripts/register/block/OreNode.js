StartupEvents.registry("block", (event) => {
	// SoundType List
	const SOUND_TYPE = {
		"stone": SoundType.STONE,
		"deepslate": SoundType.DEEPSLATE,
		"nether": SoundType.NETHER_ORE,
		"moon": SoundType.STONE
	}

	// Common Block Tag(s) List
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
	 * @param {String | Array<String>} types 类型, 可以是 stone/deepslate/nether/moon 等, 支持数组
	 */
	function addOreNode(name, types) {
		let typeList = Array.isArray(types) ? types : [types]

		typeList.forEach((type) => {
			const SOUND = SOUND_TYPE[type] || SoundType.STONE
			const REGISTER_ID = `${global.namespace}:${type}_${name}_ore_node`

			let builder = event.create(REGISTER_ID)
				.soundType(SOUND)
				.hardness(-1)
				.resistance(3600000)
				.textureAll(`${global.namespace}:block/ore/node/${name}/${type}`)
				.noDrops()

			// Add Block Tag
			COMMON_BLOCK_TAGS.forEach((tag) => {
				builder.tagBlock(tag)
			})

			// Add Item Tag
			COMMON_ITEM_TAGS.forEach((tag) => {
				builder.tagItem(tag)
			})
		})
	}

	addOreNode("uranium", "nether")
	addOreNode("copper", "stone")
	addOreNode("iron", "stone")
	addOreNode("zinc", "stone")
	addOreNode("gold", "stone")
	addOreNode("platinum", "moon")
	addOreNode("cheese", "moon")
	addOreNode("coal", "stone")
	addOreNode("tin", "stone")
	addOreNode("oil_shale", "stone")

	// Array Example
	// addOreNode("diamond", ["deepslate", "nether"])
	// addOreNode("emerald", ["stone", "deepslate"])
})
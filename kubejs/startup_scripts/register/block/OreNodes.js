StartupEvents.registry("block", (event) => {

	// 不想写路径屎山
	let SetPath = {
		/**
		 * 
		 * @param {string} type 类型
		 * @returns 
		 */
		vanilla: function (type) {
			return `minecraft:block/${type}`
		},
		/**
		 * 
		 * @param {string} type 类型
		 * @returns 
		 */
		adAstra: function (type) {
			return `ad_astra:block/${type}_stone`
		},
		/**
		 * 
		 * @param {string} type 类型
		 * @returns 
		 */
		alexsCaves: function (type) {
			return `alexscaves:block/${type}`
		}
	}

	// 定义纹理路径, 方便资源包适配
	let BackgroundTextures = {
		"stone": SetPath.vanilla("stone"),
		"nether": SetPath.vanilla("netherrack"),
		"moon": SetPath.adAstra("moon"),
		"mars": SetPath.adAstra("mars"),
		"radrock": SetPath.alexsCaves("radrock"),
		"galena": SetPath.alexsCaves("galena")
	}

	// 继承父模型
	function simpleOreNodeModel(background, ore) {
		const BACKGROUND = BackgroundTextures[background]
		const ORE = `cmi:block/ore/node/${ore}`
		return {
			loader: "forge:composite",
			textures: {
				particle: BACKGROUND
			},
			parent: "block/block",
			children: {
				base: {
					parent: "block/cube_all",
					render_type: "solid",
					textures: {
						all: BACKGROUND
					}
				},
				overlay: {
					parent: "block/cube_all",
					render_type: "translucent",
					textures: {
						all: ORE
					}
				}
			}
		}
	}

	// SoundType List
	const SOUND_TYPE = {
		"stone": SoundType.STONE,
		"nether": SoundType.NETHER_ORE,
		"moon": SoundType.STONE,
		"mars": SoundType.STONE,
		"radrock": SoundType.STONE,
		"galena": SoundType.STONE
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
	 * 矿石节点
	 * @param {string} name 注册ID
	 * @param {MiningLevel} level 挖掘等级
	 * @param {number} hardness 硬度
	 * @constructor
	 */
	function OreNodeBlock(name) {
		this.name = name
		this.type = "stone"
	}
	/**
	 * 
	 * @param {String } nodeType 类型, 可以是 stone/nether/moon 等, 支持数组
	 * @returns 
	 */
	OreNodeBlock.prototype.nodeType = function (nodeType) {
		this.type = nodeType
		return this
	}
	OreNodeBlock.prototype.build = function () {
		let builder = event.create(`${global.namespace}:${this.name}_ore_node`)

		// 设置基础信息
		builder.hardness(-1)
		builder.resistance(3600000)
		builder.noDrops()

		// 设置音效
		builder.soundType(SOUND_TYPE[this.type])

		// 模型
		builder.modelJson = simpleOreNodeModel(this.type, this.name)

		// 设置方块Tag
		COMMON_BLOCK_TAGS.forEach((tag) => {
			builder.tagBlock(tag)
		})

		// 设置物品Tag
		COMMON_ITEM_TAGS.forEach((tag) => {
			builder.tagItem(tag)
		})
		return builder
	}

	new OreNodeBlock("uranium")
		.nodeType("radrock")
		.build()
	new OreNodeBlock("copper")
		.build()
	new OreNodeBlock("iron")
		.build()
	new OreNodeBlock("zinc")
		.build()
	new OreNodeBlock("gold")
		.build()
	new OreNodeBlock("platinum")
		.nodeType("moon")
		.build()
	new OreNodeBlock("cheese")
		.nodeType("moon")
		.build()
	new OreNodeBlock("coal")
		.build()
	new OreNodeBlock("tin")
		.build()
	new OreNodeBlock("oil_shale")
		.build()

	// Array Example
	// addOreNode("diamond", ["deepslate", "nether"])
	// addOreNode("emerald", ["stone", "deepslate"])
})
let commonOres = []

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
	stone: SetPath.vanilla("stone"),
	deepslate: SetPath.vanilla("deepslate"),
	nether: SetPath.vanilla("netherrack"),
	end: SetPath.vanilla("end_stone"),

	moon: SetPath.adAstra("moon"),
	mars: SetPath.adAstra("mars"),
	venus: SetPath.adAstra("venus"),
	mercury: SetPath.adAstra("mercury"),
	glacio: SetPath.adAstra("glacio"),

	radrock: SetPath.alexsCaves("radrock"),
	galena: SetPath.alexsCaves("galena")
}

// 继承父模型
function simpleOreModel(background, ore) {
	const BACKGROUND = BackgroundTextures[background]
	const ORE = `cmi:block/ore/assets/${ore}`
	return {
		parent: "cmi:block/ore/simple",
		textures: {
			background: BACKGROUND,
			ore: ORE,
			particle: ORE
		}
	}
}

const ORE_TYPE_CONFIG = {
	stone: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	deepslate: {
		sound: SoundType.DEEPSLATE,
		hardness: function (base) {
			return base + 1.5
		},
		resistance: function (base) {
			return base + 1.5
		}
	},
	nether: {
		sound: SoundType.NETHER_ORE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	end: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	moon: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	mars: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	venus: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	mercury: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	glacio: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	galena: {
		sound: SoundType.STONE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	},
	radrock: {
		sound: SoundType.DEEPSLATE,
		hardness: function (base) {
			return base
		},
		resistance: function (base) {
			return base
		}
	}
}

/**
 * 矿石类
 * @param {string} name 注册ID
 * @param {MiningLevel} level 挖掘等级
 * @param {number} hardness 硬度
 * @constructor
 */
function OreBlock(name, level, hardness) {
	this.name = name
	this.level = level
	this.hardness = hardness
	this.color = 0xFFFFFF
	this.texture = "ore_1"
	this.types = []

	commonOres.push(this)
}

OreBlock.prototype.appearance = function (color, id) {
	this.color = color
	this.texture = `ore_${id}`
	return this
}
OreBlock.prototype.stone = function () {
	this.types.push("stone")
	return this
}
OreBlock.prototype.deepslate = function () {
	this.types.push("deepslate")
	return this
}
OreBlock.prototype.nether = function () {
	this.types.push("nether")
	return this
}
OreBlock.prototype.end = function () {
	this.types.push("end")
	return this
}
OreBlock.prototype.moon = function () {
	this.types.push("moon")
	return this
}
OreBlock.prototype.mars = function () {
	this.types.push("mars")
	return this
}
OreBlock.prototype.venus = function () {
	this.types.push("venus")
	return this
}
OreBlock.prototype.mercury = function () {
	this.types.push("mercury")
	return this
}
OreBlock.prototype.glacio = function () {
	this.types.push("glacio")
	return this
}
OreBlock.prototype.galena = function () {
	this.types.push("galena")
	return this
}
OreBlock.prototype.radrock = function () {
	this.types.push("radrock")
	return this
}

StartupEvents.registry("block", (event) => {
	commonOres.forEach((ore) => {
		ore.types.forEach((type) => {
			let cfg = ORE_TYPE_CONFIG[type]

			if (!cfg) {
				cfg = ORE_TYPE_CONFIG["stone"]
			}

			let blockId
			if (type === "stone") {
				blockId = `${CmiCore.MODID}:${ore.name}_ore`
			} else {
				blockId = `${CmiCore.MODID}:${type}_${ore.name}_ore`
			}

			let blockBuilder = event.create(blockId)

			// 设置音效
			blockBuilder.soundType(cfg.sound)

			// 设置硬度和抗性
			blockBuilder.hardness(cfg.hardness(ore.hardness))
			blockBuilder.resistance(cfg.resistance(ore.hardness))

			// 标签
			blockBuilder.tag(`${CmiCore.MODID}:ores`)
			blockBuilder.tag("forge:ores")
			blockBuilder.tag(`forge:ores/${ore.name}`)
			blockBuilder.tagBlock(CmiToolType.PICKAXE)
			blockBuilder.tagBlock(CmiMiningLevel.from(ore.level))

			// 工具需求
			blockBuilder.requiresTool(true)

			// 渲染类型
			blockBuilder.renderType("cutout")

			// 颜色
			blockBuilder.color(0, ore.color)
			blockBuilder.item((item) => {
				item.color(0, ore.color)
			})

			// 模型
			blockBuilder.modelJson = simpleOreModel(type, ore.texture)
		})
	})
})

// 铂
new OreBlock("platinum", "iron", 8)
	.appearance(0xA4D4DA, 5)
	.moon()

// 钒
new OreBlock("vanadium", "iron", 5)
	.appearance(0xFFFFFF, 1)
	.nether()

// 铬
new OreBlock("chromium", "stone", 5)
	.appearance(0xFFFFFF, 5)
	.moon()

// 钨
new OreBlock("tungsten", "nether", 10)
	.appearance(0x596C7E, 5)
	.nether()

// 埃忒恩
new OreBlock("etrium", "diamond", 5)
	.appearance(0x32FFD4, 1)
	.stone()
	.deepslate()

// 钛
new OreBlock("titanium", "diamond", 20)
	.appearance(0xE2B1E3, 1)
	.galena()
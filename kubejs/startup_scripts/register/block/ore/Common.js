let commonOres = []

// 继承父模型
function simpleOreModel(background, ore) {
	const BACKGROUND = `cmi:block/ore/assets/${background}`
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
	}
}

function addOreBlock(name, level, hardness) {
	let ore = {
		name: name,
		level: level,
		hardness: hardness,
		color: 0xFFFFFF,
		texture: "ore_1",
		types: [],

		/** 
		 *  设置矿石外观 
		 * @param {Internal.BlockTintFunction_ || Color_} color 颜色 
		 * @param {number} id 矿石贴图形状编号 
		 */
		appearance: function (color, id) {
			this.color = color
			this.texture = `ore_${id}`
			return this
		},
		stone: function () {
			this.types.push("stone")
			return this
		},
		deepslate: function () {
			this.types.push("deepslate")
			return this
		},
		nether: function () {
			this.types.push("nether")
			return this
		},
		end: function () {
			this.types.push("end")
			return this
		},
		moon: function () {
			this.types.push("moon")
			return this
		},
		mars: function () {
			this.types.push("mars")
			return this
		},
		venus: function () {
			this.types.push("venus")
			return this
		},
		mercury: function () {
			this.types.push("mercury")
			return this
		},
		glacio: function () {
			this.types.push("glacio")
			return this
		}
	}

	commonOres.push(ore)
	return ore
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
				blockId = `${global.namespace}:${ore.name}_ore`
			} else {
				blockId = `${global.namespace}:${type}_${ore.name}_ore`
			}

			let blockBuilder = event.create(blockId)

			// 设置音效
			blockBuilder.soundType(cfg.sound)

			// 设置硬度和抗性
			blockBuilder.hardness(cfg.hardness(ore.hardness))
			blockBuilder.resistance(cfg.resistance(ore.hardness))

			// 标签
			blockBuilder.tag(`${global.namespace}:ores`)
			blockBuilder.tag("forge:ores")
			blockBuilder.tag(`forge:ores/${ore.name}`)
			blockBuilder.tagBlock(global.ToolType["pickaxe"])
			blockBuilder.tagBlock(global.MiningLevel[ore.level])

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
addOreBlock("platinum", "iron", 8)
	.appearance(0xA4D4DA, 5)
	.moon()

// 钒
addOreBlock("vanadium", "iron", 5)
	.appearance(0xFFFFFF, 1)
	.nether()

// 铬
addOreBlock("chromium", "stone", 5)
	.appearance(0xFFFFFF, 5)
	.moon()

// 钨
addOreBlock("tungsten", "nether", 10)
	.appearance(0x596C7E, 5)
	.nether()


// 黄铁
addOreBlock("pyrite", "stone", 6)
	.appearance(0xE4C02C, 4)
	.nether()

// 红镍
addOreBlock("lateritic_nickel", "stone", 6)
	.appearance(0xA40000, 2)
	.end()

// 辉铜
addOreBlock("veridium", "stone", 3)
	.appearance(0x8ACE51, 2)
	.mars()

// 黄锡
addOreBlock("stannine", "stone", 3)
	.appearance(0xFFF86C, 3)
	.moon()

// 闪锌
addOreBlock("sphalerite", "iron", 5)
	.appearance(0xB4DDCB, 7)
	.end()

// 磷酸铝
addOreBlock("variscite", "stone", 4)
	.appearance(0x65F0BE, 5)
	.end()

// 方铅
addOreBlock("galena", "stone", 5)
	.appearance(0x6A6F7C, 3)
	.mars()

// 铱锇
addOreBlock("osmiridium", "iron", 6)
	.appearance(0x987337, 5)
	.moon()

// 方铀
addOreBlock("uraninite", "stone", 5)
	.appearance(0x71D23A, 1)
	.mars()

// 辉银
addOreBlock("argentite", "iron", 6)
	.appearance(0xFFFFFF, 4)
	.nether()

// 埃忒恩
addOreBlock("etrium", "diamond", 5)
	.appearance(0x32FFD4, 1)
	.stone()
	.deepslate()
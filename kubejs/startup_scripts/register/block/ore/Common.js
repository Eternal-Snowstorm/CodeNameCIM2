let ores = []
const PICKAXE = global.ToolType["pickaxe"]

/* 最简单的子模型
{
	"parent": "cmi:block/ore/simple",
	"textures": {
		"background": "minecraft:block/stone",
		"ore": "minecraft:block/iron_ore"
	}
}
*/

function simpleOreModel(background, ore) {
	return {
		"parent": "cmi:block/ore/simple",
		"textures": {
			"background": `cmi:block/ore/assets/${background}`,
			"ore": `cmi:block/ore/assets/${ore}`,
			"particle": `cmi:block/ore/assets/${background}`
		}
	}
}
simpleOreModel("aaa", "aaa")

StartupEvents.registry("block", (event) => {
	event.create("cmi:aaa")
		// 着色的层是矿石层, 也就是0(background)后面的1(ore)
		.color(1, 0xFFFFFF)
		// 调用模型文件
		.modelJson = simpleOreModel("moon", "ore_1")
})

/**
 * 函数封装
 * @param {string} name 注册ID
 * @param {ResourceLocation_} level 挖掘等级
 * @param {number} hardness 硬度
 * @type {OreBlockRegister}
 * @returns 矿石注册
 */
function addOreBlock(name, level, hardness) {
	let ore = {
		name: name,
		level: level,
		hardness: hardness,
		color: 0xFFFFFF,
		texture: "ore_1",
		types: [],

		/**
		 * 设置矿石外观
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

	ores.push(ore)
	return ore
}

StartupEvents.registry("block", (event) => {
	ores.forEach((ore) => {
		ore.types.forEach((type) => {
			if (type !== "stone" && type !== "deepslate" && type !== "nether") {
				event.create(`${global.namespace}:${type}_${ore.name}_ore`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.MiningLevel[ore.level])
					.requiresTool(true)
					.color(1, ore.color)
					.modelJson = simpleOreModel(type, ore.texture)
			} else if (type === "deepslate") {
				event.create(`${global.namespace}:${type}_${ore.name}_ore`)
					.soundType(SoundType.DEEPSLATE)
					.hardness(ore.hardness + 1.5)
					.resistance(ore.hardness + 1.5)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.MiningLevel[ore.level])
					.requiresTool(true)
					.color(1, ore.color)
					.modelJson = simpleOreModel(type, ore.texture)
			} else if (type === "nether") {
				event.create(`${global.namespace}:${type}_${ore.name}_ore`)
					.soundType(SoundType.NETHER_ORE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.MiningLevel[ore.level])
					.requiresTool(true)
					.color(1, ore.color)
					.modelJson = simpleOreModel(type, ore.texture)
			} else {
				event.create(`${global.namespace}:${ore.name}_ore`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.MiningLevel[ore.level])
					.requiresTool(true)
					.color(1, ore.color)
					.modelJson = simpleOreModel(type, ore.texture)
			}
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

// 铀
addOreBlock("uranium", "iron", 5)
	.appearance(0x40B725, 6)
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
	.stone()
	.deepslate()

// 红镍
addOreBlock("lateritic_nickel", "stone", 6)
	.appearance(0xA40000, 2)
	.stone()
	.deepslate()

// 辉绿
addOreBlock("veridium", "stone", 3)
	.appearance(0x8ACE51, 2)
	.stone()
	.deepslate()

// 黄锡
addOreBlock("stannine", "stone", 3)
	.appearance(0xFFF86C, 3)
	.stone()
	.deepslate()

// 闪锌
addOreBlock("sphalerite", "iron", 5)
	.appearance(0xB4DDCB, 7)
	.stone()
	.deepslate()

// 磷酸铝
addOreBlock("variscite", "stone", 4)
	.appearance(0x65F0BE, 5)
	.stone()
	.deepslate()

// 方铅
addOreBlock("galena", "stone", 5)
	.appearance(0x6A6F7C, 3)
	.stone()
	.deepslate()

// 铱锇
addOreBlock("osmiridium", "iron", 6)
	.appearance(0x987337, 5)
	.stone()
	.deepslate()

// 方铀
addOreBlock("uraninite", "stone", 5)
	.appearance(0x71D23A, 1)
	.stone()
	.deepslate()

// 辉银
addOreBlock("argentite", "iron", 6)
	.appearance(0xFFFFFF, 4)
	.stone()
	.deepslate()

// 埃忒恩
addOreBlock("etrium", "diamond", 5)
	.appearance(0x32FFD4, 1)
	.stone()
	.deepslate()
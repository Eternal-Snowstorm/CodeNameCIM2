let ores = []
const PICKAXE = global.toolType["pickaxe"]

/**
 * 函数封装
 * @param {string} name 注册ID
 * @param {ResourceLocation_} level 挖掘等级
 * @param {number} hardness 硬度
 * @returns 矿石注册
 */
function addOreBlock(name, level, hardness) {
	let ore = {
		name: name,
		level: level,
		hardness: hardness,
		types: [],

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
					.textureAll(`${global.namespace}:block/ore/${ore.name}/${type}`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			} else if (type === "deepslate") {
				event.create(`${global.namespace}:${type}_${ore.name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${ore.name}/${type}`)
					.soundType(SoundType.DEEPSLATE)
					.hardness(ore.hardness + 1.5)
					.resistance(ore.hardness + 1.5)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			} else if (type === "nether") {
				event.create(`${global.namespace}:${type}_${ore.name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${ore.name}/${type}`)
					.soundType(SoundType.NETHER_ORE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			} else {
				event.create(`${global.namespace}:${ore.name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${ore.name}/${type}`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag(`${global.namespace}:ores`)
					.tag("forge:ores")
					.tag(`forge:ores/${ore.name}`)
					.tagBlock(PICKAXE)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			}
		})
	})
})

// 石英
addOreBlock("quartz", "iron", 3)
	.stone()
	.deepslate()

// 钴
addOreBlock("cobalt", "iron", 10)
	.moon()

// 铂
addOreBlock("platinum", "iron", 8)
	.moon()

// 钒
addOreBlock("vanadium", "iron", 5)
	.nether()

// 铀
addOreBlock("uranium", "iron", 5)
	.nether()

// 黄铁
addOreBlock("pyrite", "stone", 6)
	.stone()
	.deepslate()

// 红镍
addOreBlock("lateritic_nickel", "stone", 6)
	.stone()
	.deepslate()

// 辉绿
addOreBlock("veridium", "stone", 3)
	.stone()
	.deepslate()

// 黄锡
addOreBlock("stannine", "stone", 3)
	.stone()
	.deepslate()

// 闪锌
addOreBlock("sphalerite", "iron", 5)
	.stone()
	.deepslate()

// 磷酸铝
addOreBlock("variscite", "stone", 4)
	.stone()
	.deepslate()

// 方铅
addOreBlock("galena", "stone", 5)
	.stone()
	.deepslate()

// 铱锇
addOreBlock("osmiridium", "iron", 6)
	.stone()
	.deepslate()

// 方铀
addOreBlock("uraninite", "stone", 5)
	.stone()
	.deepslate()

// 辉银
addOreBlock("argentite", "iron", 6)
	.stone()
	.deepslate()
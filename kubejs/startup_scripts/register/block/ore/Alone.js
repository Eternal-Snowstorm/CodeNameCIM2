let aloneOres = []

/**
 * 函数封装
 * @param {string} name 注册ID
 * @param {ResourceLocation_} level 挖掘等级
 * @param {number} hardness 硬度
 * @type {OreBlockRegister}
 * @returns 矿石注册
 */
function addAloneOreBlock(name, level, hardness) {
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

	aloneOres.push(ore)
	return ore
}

StartupEvents.registry("block", (event) => {
	aloneOres.forEach((ore) => {
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
					.tagBlock(global.ToolType["pickaxe"])
					.tagBlock(global.MiningLevel[ore.level])
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
					.tagBlock(global.ToolType["pickaxe"])
					.tagBlock(global.MiningLevel[ore.level])
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
					.tagBlock(global.ToolType["pickaxe"])
					.tagBlock(global.MiningLevel[ore.level])
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
					.tagBlock(global.ToolType["pickaxe"])
					.tagBlock(global.MiningLevel[ore.level])
					.requiresTool(true)
			}
		})
	})
})

// 石英
addAloneOreBlock("quartz", "iron", 3)
	.stone()
	.deepslate()

// 钴
addAloneOreBlock("cobalt", "iron", 10)
	.moon()

// 赛特斯石英
addAloneOreBlock("certus_quartz", "iron", 3)
	.stone()
	.deepslate()

// 银
addAloneOreBlock("silver", "iron", 3)
	.moon()
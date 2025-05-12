let ores = []

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
	let pickaxe = global.toolType["pickaxe"]
	ores.forEach((ore) => {
		ore.types.forEach(([type]) => {
			if (type !== "stone" && type !== "deepslate") {
				event.create(`${global.namespace}:${type}_${name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${type}_${name}_ore`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag("forge:ores")
					.tag(`forge:ores/${name}`)
					.tagBlock(pickaxe)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			} else if (type === "deepslate") {
				event.create(`${global.namespace}:${type}_${name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${type}_${name}_ore`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness + 1.5)
					.resistance(ore.hardness + 1.5)
					.tag("forge:ores")
					.tag(`forge:ores/${name}`)
					.tagBlock(pickaxe)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			} else {
				event.create(`${global.namespace}:${name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${name}_ore`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness)
					.resistance(ore.hardness)
					.tag("forge:ores")
					.tag(`forge:ores/${name}`)
					.tagBlock(pickaxe)
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
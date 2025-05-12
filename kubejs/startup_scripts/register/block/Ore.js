let ores = []

/**
 * 函数封装
 * @param {string} name 注册ID
 * @param {ResourceLocation_} level 挖掘等级
 * @param {number} hardness 硬度
 * @returns 
 */
function addOre(name, level, hardness) {
	let ore = {
		name: name,
		level: level,
		hardness: hardness,
		types: [],

		stone: function () {
			this.types.push(["stone", 1.5])
			return this
		},
		deepslate: function () {
			this.types.push(["deepslate", 3])
			return this
		},
		nether: function () {
			this.types.push(["nether", 1.5])
			return this
		},
		moon: function () {
			this.types.push(["moon", 1.5])
			return this
		},
		mars: function () {
			this.types.push(["mars", 1.5])
			return this
		},
		venus: function () {
			this.types.push(["venus", 1.5])
			return this
		},
		mercury: function () {
			this.types.push(["mercury", 1.5])
			return this
		},
		glacio: function () {
			this.types.push(["glacio", 1.5])
			return this
		}
	}

	ores.push(ore)
	return ore
}
StartupEvents.registry("block", (event) => {
	let pickaxe = global.toolType["pickaxe"]
	ores.forEach((ore) => {
		ore.types.forEach(([type,hardness]) => {
			if(type!=="stone") {
				event.create(`${global.namespace}:${type}_${name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${type}_${name}_ore`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness + hardness)
					.resistance(ore.hardness + hardness)
					.tag("forge:ores")
					.tag(`forge:ores/${name}`)
					.tagBlock(pickaxe)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			} else {
				event.create(`${global.namespace}:${name}_ore`)
					.textureAll(`${global.namespace}:block/ore/${name}_ore`)
					.soundType(SoundType.STONE)
					.hardness(ore.hardness + hardness)
					.resistance(ore.hardness + hardness)
					.tag("forge:ores")
					.tag(`forge:ores/${name}`)
					.tagBlock(pickaxe)
					.tagBlock(global.miningLevel[ore.level])
					.requiresTool(true)
			}
		});
	})

	// 石英
	addOre("quartz", "iron", 1.5)
	.stone()
	.deepslate()
	
	// 钴
	addOre("cobalt", "iron", 8.5)
	.moon()
})
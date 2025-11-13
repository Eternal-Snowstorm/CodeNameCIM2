let aloneOres = []

/**
 * 函数封装
 * @param {string} name 注册ID
 * @param {ResourceLocation_} level 挖掘等级
 * @param {number} hardness 硬度
 * @returns 矿石注册
 */
function AloneOreBlock(name, level, hardness) {
	this.name = name
	this.level = level
	this.hardness = hardness
	this.types = []

	// 自动加入全局独立矿石表
	aloneOres.push(this)
}
AloneOreBlock.prototype.stone = function () {
	this.types.push("stone")
	return this
}
AloneOreBlock.prototype.deepslate = function () {
	this.types.push("deepslate")
	return this
}
AloneOreBlock.prototype.nether = function () {
	this.types.push("nether")
	return this
}
AloneOreBlock.prototype.end = function () {
	this.types.push("end")
	return this
}
AloneOreBlock.prototype.moon = function () {
	this.types.push("moon")
	return this
}
AloneOreBlock.prototype.mars = function () {
	this.types.push("mars")
	return this
}
AloneOreBlock.prototype.venus = function () {
	this.types.push("venus")
	return this
}
AloneOreBlock.prototype.mercury = function () {
	this.types.push("mercury")
	return this
}
AloneOreBlock.prototype.glacio = function () {
	this.types.push("glacio")
	return this
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
new AloneOreBlock("quartz", "iron", 3)
	.stone()
	.deepslate()

// 钴
new AloneOreBlock("cobalt", "iron", 10)
	.moon()

// 赛特斯石英
new AloneOreBlock("certus_quartz", "iron", 3)
	.stone()
	.deepslate()

// 银
new AloneOreBlock("silver", "iron", 3)
	.moon()
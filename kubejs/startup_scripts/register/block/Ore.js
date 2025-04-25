StartupEvents.registry("block", (event) => {
	let pickaxe = "minecraft:mineable/pickaxe"

	/**
	 * @param {String} name 注册名称 
	 * @param {miningLevel} level 挖掘等级 
	 */
	function addCommonOreBlock(name, level) {
		event.create(`${global.namespace}:${name}_ore`)
			.textureAll(`${global.namespace}:block/ore/${name}/ore`)
			.soundType(SoundType.STONE)
			.hardness(3)
			.resistance(3)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tagBlock(pickaxe)
			.tagBlock(global.miningLevel[level])
			.requiresTool(true)

		event.create(`${global.namespace}:deepslate_${name}_ore`)
			.textureAll(`${global.namespace}:block/ore/${name}/deepslate`)
			.soundType(SoundType.DEEPSLATE)
			.hardness(4.5)
			.resistance(4.5)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tagBlock(pickaxe)
			.tagBlock(global.miningLevel[level])
			.requiresTool(true)
	}

	addCommonOreBlock("quartz", "iron")

	// 月球钴
	event.create(`${global.namespace}:moon_cobalt_ore`)
		.textureAll(`${global.namespace}:block/ore/cobalt/moon_cobalt_ore`)
		.soundType(SoundType.STONE)
		.hardness(10)
		.resistance(10)
		.tag("forge:ores")
		.tag(`forge:ores/cobalt`)
		.tagBlock(pickaxe)
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)
})
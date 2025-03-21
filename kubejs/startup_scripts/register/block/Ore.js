StartupEvents.registry("block", (event) => {

	let pickaxe = "minecraft:mineable/pickaxe"

	/**
	 * 
	 * @param {String} 注册名称 
	 * @param {miningLevel} 挖掘等级 
	 */
	function addAloneOreBlock(name, level) {
		event.create(`${global.namespace}:${name}_ore`)
			.textureAll(`${global.namespace}:block/ore/${name}/ore`)
			.soundType(SoundType.STONE)
			.hardness(3)
			.resistance(3)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/dense")
			.tagBlock(pickaxe)
			.tagBlock(global.miningLevel[level])
			.requiresTool(true)

		event.create(`${global.namespace}:deepslate_${name}_ore`)
			.textureAll(`${global.namespace}:block/ore/${name}/deepslate`)
			.soundType(SoundType.DEEPSLATE)
			.hardness(4.4)
			.resistance(4.5)
			.tag("forge:ores")
			.tag(`forge:ores/${name}`)
			.tag("forge:ore_rates/deepslate")
			.tagBlock(pickaxe)
			.tagBlock(global.miningLevel[level])
			.requiresTool(true)
	}

	addAloneOreBlock("quartz", "iron")
})
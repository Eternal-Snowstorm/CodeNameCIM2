StartupEvents.registry("block", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addBlock(name) {
		return event.create(`${Cmi.MODID}:${name}_casing`)
	}

	// 铁
	addBlock("iron")
		.textureAll(Cmi.loadResource("block/casing/iron/casing"))
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.STONE.tag())

	// 青铜
	addBlock("bronze")
		.textureAll(Cmi.loadResource("block/casing/bronze/casing"))
		.soundType(SoundType.COPPER)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.STONE.tag())

	// 钢
	addBlock("steel")
		.textureAll(Cmi.loadResource("block/casing/steel/casing"))
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.IRON.tag())

	// 智能
	addBlock("smart")
		.model(Cmi.loadResource("block/casing/ae2/smart"))
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.IRON.tag())

	// 高级计算
	addBlock("computing")
		.model(Cmi.loadResource("block/casing/ae2/computing"))
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.IRON.tag())
})
StartupEvents.registry("block", (event) => {
	/**
	 * 
	 * @param {String} name 注册id
	 * @param 
	 */
	function addStairsBlock(name) {
		return event.create(`${Cmi.MODID}:${name}_stairs`, "stairs")
	}

	/**
	 * 
	 * @param {String} name 注册id
	 * @param 
	 */
	function addSlabBlock(name) {
		return event.create(`${Cmi.MODID}:${name}_slab`, "slab")
	}

	// 黄铜楼梯
	addStairsBlock("brass")
		.textureAll("create:block/brass_block")
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.IRON.tag())
		.requiresTool()

	// 工业铁楼梯
	addStairsBlock("industrial_iron")
		.textureAll("create:block/industrial_iron_block")
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.IRON.tag())
		.requiresTool()

	// 工业铁台阶
	addSlabBlock("industrial_iron")
		.textureAll("create:block/industrial_iron_block")
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE.tag())
		.tagBlock(CmiMiningLevel.IRON.tag())
		.requiresTool()
})
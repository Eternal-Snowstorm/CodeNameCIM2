StartupEvents.registry("block", (event) => {
	function addBlock(name, type) {
		if (type === undefined) {
			return event.create(`${global.namespace}:${name}`)
		}
		return event.create(`${global.namespace}:${name}`, type)
	}

	// 催生器
	addBlock("accelerator")
		.soundType(SoundType.METAL)
		.hardness(4)
		.resistance(4)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["wooden"])
		.requiresTool(true)

	// 背景
	addBlock("green_screen")
		.lightLevel(15)

	// 锇砖瓦
	addBlock("osmium_tile")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["iron"])
		.requiresTool(true)

	// 泥炭
	addBlock("peat_block")
		.soundType(SoundType.MUD)
		.hardness(1)
		.resistance(1)
		.tagBlock(global.ToolType["shovel"])
		.tagBlock(global.MiningLevel["wooden"])
		.tagBlock("minecraft:dirt")
		.tag("minecraft:stone")

	// 油页岩
	addBlock("oil_shale")
		.soundType(SoundType.DEEPSLATE)
		.hardness(15)
		.resistance(15)
		.tagBlock(global.MiningLevel["nether"])
		.tagBlock(global.ToolType["pickaxe"])
		.requiresTool(true)

	// 压缩末地粉块
	addBlock("compression_end_stone_dust_block")
		.soundType(SoundType.SAND)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["wooden"])
		.requiresTool(true)

	// 燃烧介质块
	addBlock("combustion_medium_block")
		.soundType(SoundType.STONE)
		.hardness(3)
		.resistance(3)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["stone"])

	// 坩埚底座
	addBlock("crucible_base")
		.textureAll(`${global.namespace}:block/crucible/top`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["iron"])
		.requiresTool(true)

	// 坩埚风口
	addBlock("crucible_tuyere")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["iron"])
		.requiresTool(true)

	// 青铜外壳
	addBlock("bronze_casing")
		.textureAll(`${global.namespace}:block/casing/bronze/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock("create:wrench_pickup")

	// 耐压外壳
	addBlock("pressure_resistance_casing")
		.textureAll(`${global.namespace}:block/casing/pressure_resistance/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock("create:wrench_pickup")

	// 陨石外壳
	addBlock("sky_stone_casing")
		.textureAll(`${global.namespace}:block/casing/ae2/smart`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock("create:wrench_pickup")

	// 高级计算外壳
	addBlock("computing_casing")
		.textureAll(`${global.namespace}:block/casing/ae2/computing_top`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock("create:wrench_pickup")
})
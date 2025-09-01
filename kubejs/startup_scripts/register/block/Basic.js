StartupEvents.registry("block", (event) => {
	function addBlock(name) {
		return event.create(`${global.namespace}:${name}`)
	}

	addBlock("accelerator")
		.soundType(SoundType.METAL)
		.hardness(4)
		.resistance(4)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["wooden"])
		.requiresTool(true)

	// 背景
	addBlock("green_screen")
		.lightLevel(15)

	// 锇砖瓦
	addBlock("osmium_tile")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 泥炭
	addBlock("peat_block")
		.soundType(SoundType.MUD)
		.hardness(1)
		.resistance(1)
		.tagBlock(global.toolType["shovel"])
		.tagBlock(global.miningLevel["wooden"])
		.tagBlock("minecraft:dirt")
		.tag("minecraft:stone")

	// 油页岩
	addBlock("oil_shale")
		.soundType(SoundType.DEEPSLATE)
		.hardness(2)
		.resistance(2)
		.tagBlock(global.miningLevel["nether"])
		.tagBlock(global.toolType["pickaxe"])
		.requiresTool(true)

	// 压缩末地粉块
	addBlock("compression_end_stone_dust_block")
		.soundType(SoundType.SAND)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["wooden"])
		.requiresTool(true)

	// 坩埚底座
	addBlock("crucible_base")
		.textureAll(`${global.namespace}:block/crucible/top`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 坩埚风口
	addBlock("crucible_tuyere")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 青铜外壳
	addBlock("bronze_casing")
		.textureAll(`${global.namespace}:block/casing/bronze/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock("create:wrench_pickup")

	// 耐压外壳
	addBlock("pressure_resistance_casing")
		.textureAll(`${global.namespace}:block/casing/pressure_resistance/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock("create:wrench_pickup")

	// 陨石外壳
	addBlock("sky_stone_casing")
		.textureAll(`${global.namespace}:block/casing/ae2/smart`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock("create:wrench_pickup")

	// 高级计算外壳
	addBlock("computing_casing")
		.textureAll(`${global.namespace}:block/casing/ae2/computing_top`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock("create:wrench_pickup")
})
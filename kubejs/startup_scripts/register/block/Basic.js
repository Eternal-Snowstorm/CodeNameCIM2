StartupEvents.registry("block", (event) => {
	/**
	 * 
	 * @param {String} name 注册id
	 * @param 
	 */
	function addBlock(name, type) {
		if (type === undefined) {
			return event.create(`${CmiCore.MODID}:${name}`)
		}
		return event.create(`${CmiCore.MODID}:${name}`, type)
	}

	// 虚空涌泉
	addBlock("void_spring")
		.soundType(SoundType.STONE)
		.hardness(-1)
		.resistance(114514)

	// 冲击桩
	addBlock("impact_pile")
		.model(`${CmiCore.MODID}:block/custom/impact_pile`)
		.defaultCutout()
		.soundType(SoundType.NETHERITE_BLOCK)
		.box(7, 0, 7, 9, 14, 9, true)
		.box(6, 14, 6, 10, 16, 10, true)
		.hardness(5)
		.resistance(5)

	// 破旧的存钱罐
	addBlock("piggy_bank", "cardinal")
		.soundType(SoundType.DECORATED_POT)
		.waterlogged()
		.notSolid()
		.defaultCutout()
		.box(9.75, 0, 12, 11.75, 2, 14)
		.box(5.25, 0, 12, 7.25, 2, 14)
		.box(9.75, 0, 5, 11.75, 2, 7)
		.box(9, 5.5, 12.25, 10, 7.5, 14.25)
		.box(8.13281, 8.00781, 7.75, 8.88281, 8.00781, 12.75)
		.box(5.24219, 2.75, 8.5, 5.24219, 7.5, 11.5)
		.box(11.75781, 2.75, 8.5, 11.75781, 7.5, 11.5)
		.box(5.25, 2, 5, 11.75, 8, 14)
		.box(5.25, 0, 5, 7.25, 2, 7)
		.box(5, 3.75, 0.75, 12, 9.75, 6.75)
		.box(7, 5.5, 0, 10, 7.5, 1)

	// 背景
	addBlock("green_screen")
		.lightLevel(15)

	// 锇砖瓦
	addBlock("osmium_tile")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.IRON)
		.requiresTool(true)

	// 泥炭
	addBlock("peat_block")
		.soundType(SoundType.MUD)
		.hardness(1)
		.resistance(1)
		.tagBlock(CmiToolType.SHOVEL)
		.tagBlock(CmiMiningLevel.WOODEN)
		.tagBlock("minecraft:dirt")
		.tag("minecraft:stone")

	// 油页岩
	addBlock("oil_shale")
		.soundType(SoundType.DEEPSLATE)
		.hardness(15)
		.resistance(15)
		.tagBlock(CmiMiningLevel.NETHER)
		.tagBlock(CmiToolType.PICKAXE)
		.requiresTool(true)

	// 压缩末地粉块
	addBlock("compression_end_stone_dust_block")
		.soundType(SoundType.SAND)
		.hardness(6)
		.resistance(6)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.WOODEN)
		.requiresTool(true)

	// 坩埚底座
	addBlock("crucible_base")
		.textureAll(`${CmiCore.MODID}:block/crucible/top`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.IRON)
		.requiresTool(true)

	// 坩埚风口
	addBlock("crucible_tuyere")
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.IRON)
		.requiresTool(true)

	// 青铜外壳
	addBlock("bronze_casing")
		.textureAll(`${CmiCore.MODID}:block/casing/bronze/casing`)
		.soundType(SoundType.WOOD)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.IRON)

	// 智能外壳
	addBlock("smart_casing")
		.model(`${CmiCore.MODID}:block/casing/ae2/smart`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.IRON)

	// 高级计算外壳
	addBlock("computing_casing")
		.model(`${CmiCore.MODID}:block/casing/ae2/computing`)
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.IRON)

	// 工程块框架
	addBlock("industrial_frame")
		.textureAll("immersiveengineering:block/metal_decoration/steel_casing")
		.soundType(SoundType.METAL)
		.hardness(5)
		.resistance(5)
		.tagBlock(CmiToolType.PICKAXE)
		.tagBlock(CmiMiningLevel.IRON)
		.defaultCutout()

	// 辐射沙
	addBlock("radsand", "falling")
		.textureAll(`${CmiCore.MODID}:block/radsand`)
		.soundType(SoundType.SAND)
		.hardness(0.5)
		.resistance(0.5)
		.tagBlock("minecraft:sand")
		.tagBlock(CmiToolType.SHOVEL)
})
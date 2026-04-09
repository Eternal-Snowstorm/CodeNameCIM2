StartupEvents.registry("block", (event) => {
	/**
	 * 
	 * @param {String} name 注册id
	 * @param {string} type 注册类型
	 */
	function addBlock(name, type) {
		if (type === undefined) {
			return event.create(`${CmiCore.MODID}:${name}`)
		}
		return event.create(`${CmiCore.MODID}:${name}`, type)
	}

	function addConcreteBlock(name, color) {
		addBlock(`${name}_reinforced_concrete`)
			.soundType(SoundType.METAL)
			.noDrops()
			.requiresTool(true)
			.textureAll("cmi:block/custom/reinforced_concrete/reinforced_concrete")
			.color(color)
			.tagBlock(global.ToolType["pickaxe"])
			.tagBlock(global.MiningLevel["iron"])
			.tagBlock("ae2:blacklisted/spatial")
			.tagBlock("mekanism:cardboard_blacklist")
			.hardness(50)
			.resistance(-1)
			.item((item) => {
				item.color(color)
			})
	}

	addConcreteBlock("gray", 0x565656)
	addConcreteBlock("white", 0xFFFFFF)
	addConcreteBlock("light_gray", 0xa0a3a5)
	addConcreteBlock("black", 0x171717)

	// 雷达
	addBlock(`radar`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/radar`)
		.box(6, 0, 6, 10, 16, 10, true)

	// 损坏雷达
	addBlock(`broken_radar`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/broken_radar_part/radar`)
		.box(6, 0, 6, 10, 16, 10, true)


	// 变压器
	addBlock("transformer")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/transformer`)

	// 损坏变压器
	addBlock("broken_transformer")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/broken_radar_part/transformer`)
		.notSolid()

	// 调制解调器
	addBlock("modem")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/modem`)
		.notSolid()


	addBlock(`broken_modem`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/broken_radar_part/modem`)
		.notSolid()

	// 追踪阵列
	addBlock("tracking_array")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/tracking_array`)

	// 损坏的追踪阵列
	addBlock("broken_tracking_array")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/broken_radar_part/tracking_array`)
		.notSolid()

	// 电源
	addBlock("power_supply")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/power_supply`)

	// 损坏的电源
	addBlock("broken_power_supply")
		.soundType(SoundType.NETHERITE_BLOCK)
		.waterlogged()
		.hardness(-1)
		.resistance(-1)
		.model(`${CmiCore.MODID}:block/broken_radar_part/power_supply`)
		.notSolid()
})
StartupEvents.registry("block", (event) => {
	event.create(`${global.namespace}:the_accelerator_of_mechanism_power`)
		.soundType(SoundType.METAL)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["wooden"])
		.requiresTool(true)

	// 背景
	event.create(`${global.namespace}:blue_screen`)
		.lightLevel(15)

	event.create(`${global.namespace}:green_screen`)
		.lightLevel(15)

	// 火箭框架
	event.create(`${global.namespace}:rocket_pattern`)
		.soundType(SoundType.WOOD)
		.model(`${global.namespace}:block/rocket/pattern/rocket_pattern`)
		.hardness(5)
		.resistance(5)
		.item((item) => {
			item.maxStackSize(1)
		})
		.notSolid()
		.defaultTranslucent()
		.requiresTool(false)
		.box(0, 0, 0, 16, 45, 16, true)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.toolType["axe"])
		.tagBlock("create:wrench_pickup")

	// 锇砖瓦
	event.create(`${global.namespace}:osmium_tile`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 压缩末地粉块
	event.create(`${global.namespace}:compression_end_stone_dust_block`)
		.soundType(SoundType.SAND)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["wooden"])
		.requiresTool(true)

	// 坩埚底座
	event.create(`${global.namespace}:crucible_base`)
		.textureAll(`${global.namespace}:block/crucible/top`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 坩埚风口
	event.create(`${global.namespace}:crucible_tuyere`)
		.soundType(SoundType.METAL)
		.hardness(6)
		.resistance(6)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock(global.miningLevel["iron"])
		.requiresTool(true)

	// 青铜外壳
	event.create(`${global.namespace}:bronze_casing`)
		.textureAll(`${global.namespace}:block/casing/bronze/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock("create:wrench_pickup")

	// 耐压外壳
	event.create(`${global.namespace}:pressure_resistance_casing`)
		.textureAll(`${global.namespace}:block/casing/pressure_resistance/casing`)
		.soundType(SoundType.NETHERITE_BLOCK)
		.hardness(5)
		.resistance(5)
		.tagBlock(global.toolType["pickaxe"])
		.tagBlock("create:wrench_pickup")
})
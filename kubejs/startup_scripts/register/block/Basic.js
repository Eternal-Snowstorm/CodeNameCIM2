let $BlockBehaviour$Properties =
	Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
let $BlockItem =
	Java.loadClass("net.minecraft.world.item.BlockItem")
let $Item$Properties =
	Java.loadClass("net.minecraft.world.item.Item$Properties")

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

	let machineBlockRegister = [
		"nature",
		"wooden",
		"stone",
		"iron",
		"copper",
		"andesite",
		"photosensitive",
		"gold",
		"cobalt",
		"nether",
		"thermal",
		"feinforced",
		"resonant",
		"railway",
		"ender",
		"light_engineering",
		"heavy_engineering",
		"enchanted",
		"smart",
		"computing",
		"tier_1_aviation",
		"tier_2_aviation",
		"tier_3_aviation",
		"tier_4_aviation",
		"basic_mekanism",
		"advanced_mekanism",
		"elite_mekanism",
		"ultimate_mekanism",
		"structure",
		"nuclear",
		"antimatter",
		"coil",
		"sculk",
		"colorful",
		"creative",
		"potion",
		"precision",
		"redstone",
		"bronze"
	]
	machineBlockRegister.forEach((type) => {
		event.create(`${global.namespace}:${type}_machine`, "cardinal")
			.soundType(SoundType.METAL)
			.model(`${global.namespace}:block/machine_block/${type}`)
			.tagBlock(global.toolType["pickaxe"])
			.tagBlock(global.miningLevel["wooden"])
			.tagBlock("create:wrench_pickup")
			.requiresTool(true)
			.notSolid()
			.defaultCutout()
	})

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

	// 火箭框架
	event.create(`${global.namespace}:rocket_pattern`)
		.soundType(SoundType.WOOD)
		.model(`${global.namespace}:block/rocket_pattern/rocket_pattern`)
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
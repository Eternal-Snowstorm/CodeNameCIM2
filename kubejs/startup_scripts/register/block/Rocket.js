StartupEvents.registry("block", (event) => {
	function addBlock(name) {
		return event.create(`${global.namespace}:${name}`)
	}
	// 火箭框架
	addBlock("rocket_pattern")
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

	// 火箭框架1
	addBlock("tier_1_rocket_frame")
		.soundType(SoundType.NETHERITE_BLOCK)
		.model(`${global.namespace}:block/rocket/tier1/tier1`)
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
		.tagBlock(global.miningLevel["wooden"])
		.tagBlock("create:wrench_pickup")

	// 火箭框架2
	addBlock("tier_2_rocket_frame")
		.soundType(SoundType.NETHERITE_BLOCK)
		.model(`${global.namespace}:block/rocket/tier2/tier2`)
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
		.tagBlock(global.miningLevel["iron"])
		.tagBlock("create:wrench_pickup")

	// 火箭框架3
	addBlock("tier_3_rocket_frame")
		.soundType(SoundType.NETHERITE_BLOCK)
		.model(`${global.namespace}:block/rocket/tier3/tier3`)
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
		.tagBlock(global.miningLevel["iron"])
		.tagBlock("create:wrench_pickup")

	// 火箭框架4
	addBlock("tier_4_rocket_frame")
		.soundType(SoundType.NETHERITE_BLOCK)
		.model(`${global.namespace}:block/rocket/tier4/tier4`)
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
		.tagBlock(global.miningLevel["iron"])
		.tagBlock("create:wrench_pickup")
})
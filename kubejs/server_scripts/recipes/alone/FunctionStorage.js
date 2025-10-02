ServerEvents.recipes((event) => {
	let { kubejs, create, tconstruct } = event.recipes
	const TEMPLATE = "cmi:drawer_upgrade_template"

	// 物品抽屉
	let drawerWoodTypes = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"mangrove",
		"crimson",
		"warped",
		"cherry"
	]
	drawerWoodTypes.forEach((type) => {
		// 物品抽屉1
		kubejs.shaped(`functionalstorage:${type}_1`, [
			"AAA",
			"ABA",
			"ACA"
		], {
			A: `minecraft:${type}_planks`,
			B: "minecraft:chest",
			C: "cmi:wooden_mechanism"
		}).id(`functionalstorage:${type}_1`)

		// 物品抽屉2
		kubejs.shaped(`2x functionalstorage:${type}_2`, [
			"ABA",
			"ACA",
			"ABA"
		], {
			A: `minecraft:${type}_planks`,
			B: "minecraft:chest",
			C: "cmi:wooden_mechanism"
		}).id(`functionalstorage:${type}_2`)

		// 物品抽屉4
		kubejs.shaped(`4x functionalstorage:${type}_4`, [
			"ABA",
			"BCB",
			"ABA"
		], {
			A: `minecraft:${type}_planks`,
			B: "minecraft:chest",
			C: "cmi:wooden_mechanism"
		}).id(`functionalstorage:${type}_4`)
	})

	// 升级模板
	kubejs.shaped("cmi:drawer_upgrade_template", [
		"AAA",
		"BCB",
		"AAA"
	], {
		A: "#minecraft:planks",
		B: "#forge:stone",
		C: "cmi:wooden_mechanism"
	}).id("functionalstorage:upgrade_template")

	// 紫水晶青铜
	tconstruct.casting_table("functionalstorage:copper_upgrade")
		.cast(TEMPLATE)
		.cast_consumed(true)
		.fluid(Fluid.of("tconstruct:molten_amethyst_bronze", 720))
		.cooling_time(20 * 3)
		.id("functionalstorage:copper_upgrade")

	// 生铁
	tconstruct.casting_table("functionalstorage:iron_downgrade")
		.cast(TEMPLATE)
		.cast_consumed(true)
		.fluid(Fluid.of("tconstruct:molten_pig_iron", 180))
		.cooling_time(20 * 3)
		.id("functionalstorage:iron_downgrade")

	// 玫瑰金
	tconstruct.casting_table("functionalstorage:gold_upgrade")
		.cast(TEMPLATE)
		.cast_consumed(true)
		.fluid(Fluid.of("tconstruct:molten_rose_gold", 720))
		.cooling_time(20 * 3)
		.id("functionalstorage:gold_upgrade")

	// 钢
	tconstruct.casting_table("functionalstorage:diamond_upgrade")
		.cast(TEMPLATE)
		.cast_consumed(true)
		.fluid(Fluid.of("tconstruct:molten_steel", 360))
		.cooling_time(20 * 3)
		.id("functionalstorage:diamond_upgrade")

	// 虚空升级
	tconstruct.casting_table("functionalstorage:void_upgrade")
		.fluid(Fluid.of("tconstruct:molten_obsidian", 4000))
		.cast(TEMPLATE)
		.cast_consumed(true)
		.cooling_time(20 * 3)
		.id("functionalstorage:void_upgrade")

	// 输入升级
	create.deploying("functionalstorage:puller_upgrade", [
		TEMPLATE,
		"minecraft:hopper"
	]).id("functionalstorage:puller_upgrade")

	// 输出升级
	create.deploying("functionalstorage:pusher_upgrade", [
		"functionalstorage:puller_upgrade",
		"minecraft:redstone_torch"
	]).id("functionalstorage:pusher_upgrade")

	// 收集升级
	create.deploying("functionalstorage:collector_upgrade", [
		"functionalstorage:puller_upgrade",
		"minecraft:hopper"
	]).id("functionalstorage:collector_upgrade")

	// 红石升级
	create.deploying("functionalstorage:redstone_upgrade", [
		TEMPLATE,
		"minecraft:comparator"
	]).id("functionalstorage:redstone_upgrade")

	// 流体抽屉1
	kubejs.shaped("functionalstorage:fluid_1", [
		"ABA",
		"BCB",
		"BAB"
	], {
		A: "#forge:storage_blocks/iron",
		B: "#forge:plates/iron",
		C: "minecraft:bucket"
	}).id("functionalstorage:fluid_1")

	// 流体抽屉2
	kubejs.shaped("functionalstorage:fluid_2", [
		"ACA",
		"BAB",
		"BCB"
	], {
		A: "#forge:storage_blocks/iron",
		B: "#forge:plates/iron",
		C: "minecraft:bucket"
	}).id("functionalstorage:fluid_2")

	// 流体抽屉4
	kubejs.shaped("functionalstorage:fluid_4", [
		"ACA",
		"CAC",
		"BCB"
	], {
		A: "#forge:storage_blocks/iron",
		B: "#forge:plates/iron",
		C: "minecraft:bucket"
	}).id("functionalstorage:fluid_4")
})
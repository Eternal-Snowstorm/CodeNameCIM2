ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes

	// 搅拌头
	kubejs.shaped("create:whisk", [
		" A ",
		"BAB",
		"BBB"
	], {
		A: "create:andesite_alloy",
		B: "#forge:plates/zinc"
	})
		.id("create:crafting/kinetics/whisk")

	// 空烈焰人燃烧室
	kubejs.shaped("create:empty_blaze_burner", [
		"ABA",
		"A A",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: "cmi:iron_mechanism",
		C: "#forge:netherrack"
	}).id("create:crafting/kinetics/empty_blaze_burner")

	// 烈焰人燃烧室
	kubejs.shaped("create:blaze_burner", [
		"ABA",
		"ADA",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: "cmi:iron_mechanism",
		C: "#forge:netherrack",
		D: "cmi:nether_mechanism"
	}).id("create:crafting/kinetics/blaze_burner")

	// 烈焰蛋糕
	create.filling("create:blaze_cake", [
		"create:blaze_cake_base",
		Fluid.of("minecraft:lava", 500)
	]).id("create:filling/blaze_cake")

	create.filling("2x create:blaze_cake", [
		"create:blaze_cake_base",
		Fluid.of("tconstruct:blazing_blood", 500)
	])

	// 烈焰蛋糕胚
	create.compacting("create:blaze_cake_base", [
		Fluid.of("minecraft:milk", 250),
		"create:cinder_flour",
		"minecraft:sugar"
	]).id("create:compacting/blaze_cake")

	// 激光发射器
	kubejs.shaped("vintageimprovements:laser_item", [
		" A ",
		"BDB",
		" E "
	], {
		A: "#forge:dusts/redstone",
		B: "#forge:plates/copper",
		D: "createaddition:capacitor",
		E: "cmi:photosensitive_mechanism"
	}).id("vintageimprovements:mechanical_crafting/laser")

	create.milling([
		"ae2:sky_dust",
		Item.of("ae2:sky_dust").withChance(0.25),
		Item.of("ae2:sky_dust", 2).withChance(0.125),
		Item.of("ae2:sky_stone_block").withChance(0.25)
	], "ae2:sky_stone_block")

	create.crushing([
		"ae2:sky_dust",
		Item.of("ae2:sky_dust").withChance(0.5),
		Item.of("ae2:sky_dust", 2).withChance(0.25),
		Item.of("ae2:sky_stone_block").withChance(0.5)
	], "ae2:sky_stone_block")

	vintageimprovements.curving("create:fluid_pipe", [
		"#forge:plates/copper"
	])
	vintageimprovements.curving("ad_astra:rocket_fin", [
		"#forge:plates/steel"
	]).mode(4)

	// 烤箱
	kubejs.shaped("ratatouille:oven", [
		"A",
		"B",
		"A"
	], {
		A: [
			"#forge:ingots/industrial_iron",
			"#forge:plates/industrial_iron"
		],
		B: "create:fluid_tank"
	}).id("ratatouille:oven")

	// 超级刀
	create.filling("cmi:super_knife", [
		"farmersdelight:netherite_knife",
		Fluid.of("create_enchantment_industry:hyper_experience", 1000)
	])

	// 小引擎
	kubejs.shaped("createdieselgenerators:diesel_engine", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "minecraft:flint_and_steel",
		B: "createdieselgenerators:engine_piston",
		C: "#forge:storage_blocks/bronze",
		D: "minecraft:polished_blackstone_slab",
		E: "cmi:bronze_mechanism"
	}).id("creatediselgenerators:diesel_engine")

	// 中引擎
	kubejs.shaped("createdieselgenerators:large_diesel_engine", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "create:andesite_alloy",
		B: "create:precision_mechanism",
		C: "createdieselgenerators:diesel_engine",
		D: "minecraft:polished_blackstone_slab",
		E: "#forge:storage_blocks/brass"
	}).id("creatediselgenerators:large_diesel_engine")

	// 大引擎
	kubejs.shaped("createdieselgenerators:huge_diesel_engine", [
		"ZAZ",
		"BCB",
		"DED"
	], {
		Z: "create:andesite_alloy",
		A: "minecraft:flint_and_steel",
		B: "cmi:light_engineering_mechanism",
		C: "create:steam_engine",
		D: "create:fluid_pipe",
		E: "#forge:storage_blocks/steel"
	}).id("creatediselgenerators:huge_diesel_engine")

	// 电容
	kubejs.shaped("cmi:simple_battery", [
		" A ",
		"BBB",
		" C "
	], {
		A: "#forge:plates/copper",
		B: "#forge:dusts/redstone",
		C: "#forge:plates/zinc"
	}).id("createaddition:crafting/capacitor_1")

	kubejs.shaped("cmi:simple_battery", [
		" A ",
		"BBB",
		" C "
	], {
		A: "#forge:plates/zinc",
		B: "#forge:dusts/redstone",
		C: "#forge:plates/copper"
	}).id("createaddition:crafting/capacitor_2")

	// 蒸汽引擎
	create.sequenced_assembly("create:steam_engine", [
		"createdieselgenerators:diesel_engine"
	], [
		create.deploying("createdieselgenerators:diesel_engine", [
			"createdieselgenerators:diesel_engine",
			"createdieselgenerators:engine_piston"
		]),
		create.cutting("createdieselgenerators:diesel_engine", [
			"createdieselgenerators:diesel_engine"
		]),
		create.deploying("createdieselgenerators:diesel_engine", [
			"createdieselgenerators:diesel_engine", [
				"#forge:ingots/copper",
				"#forge:plates/copper"
			]
		]),
		create.cutting("createdieselgenerators:diesel_engine", [
			"createdieselgenerators:diesel_engine"
		]),
		create.deploying("createdieselgenerators:diesel_engine", [
			"createdieselgenerators:diesel_engine",
			"create:precision_mechanism"
		])
	]).loops(3).transitionalItem("create:brass_casing")
		.id("create:crafting/kinetics/steam_engine")
})
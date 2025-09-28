ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes

	// 搅拌头
	kubejs.shaped("create:whisk", [
		" A ",
		"BAB",
		"BBB"
	], {
		A: "create:andesite_alloy",
		B: ["#forge:plates/zinc", "#forge:plates/iron"]
	}).id("create:crafting/kinetics/whisk")

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
		"ABA",
		"BCB",
		"DDD"
	], {
		A: "createdieselgenerators:engine_piston",
		B: "#forge:plates/brass",
		C: "create:precision_mechanism",
		D: "tconstruct:seared_brick"
	}).id("creatediselgenerators:diesel_engine")

	// 中引擎
	kubejs.shaped("createdieselgenerators:large_diesel_engine", [
		"ABA",
		"BCB",
		"DDD"
	], {
		A: "createdieselgenerators:engine_piston",
		B: "#forge:plates/cast_iron",
		C: "cmi:light_engineering_mechanism",
		D: "tconstruct:scorched_brick"
	}).id("creatediselgenerators:large_diesel_engine")

	// 大引擎
	kubejs.shaped("createdieselgenerators:huge_diesel_engine", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: "#forge:plates/steel",
		B: "minecraft:flint_and_steel",
		C: "cmi:heavy_engineering_mechanism",
		D: "create:steam_engine",
		E: "create:fluid_pipe"
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

	// 蒸汽引擎
	create.sequenced_assembly("create:steam_engine", [
		"create:copper_casing"
	], [
		create.deploying("create:brass_casing", [
			"create:brass_casing",
			"cmi:bronze_mechanism"
		]),
		create.cutting("create:brass_casing", [
			"create:brass_casing"
		]),
		create.deploying("create:brass_casing", [
			"create:brass_casing",
			"createdieselgenerators:engine_piston"
		]),
		create.deploying("create:brass_casing", [
			"create:brass_casing",
			"#forge:plates/steel"
		]),
		create.deploying("create:brass_casing", [
			"create:brass_casing",
			"create:precision_mechanism"
		])
	]).loops(1).transitionalItem("create:brass_casing")
		.id("create:crafting/kinetics/steam_engine")

	// 工作盆盖板
	kubejs.shaped("createdieselgenerators:basin_lid", [
		"ABA",
		"C C"
	], {
		A: "#forge:plates/andesite_alloy",
		B: "#forge:ingots/andesite_alloy",
		C: "thermal:cured_rubber"
	}).id("createdieselgenerators:crafting/basin_lid")

	// 空白模块
	kubejs.shapeless("deepdrilling:blank_module", [
		"create:andesite_casing",
		"cmi:andesite_mechanism",
		"#forge:plates/iron"
	]).id("deepdrilling:blank_module")

	// 安山漏斗
	kubejs.shaped("4x create:andesite_funnel", [
		"A",
		"B"
	], {
		A: "#forge:ingots/andesite_alloy",
		B: "thermal:cured_rubber"
	})

	// 安山隧道
	kubejs.shaped("8x create:andesite_tunnel", [
		"AA",
		"BB"
	], {
		A: "#forge:ingots/andesite_alloy",
		B: "thermal:cured_rubber"
	})

	// 黄铜漏斗
	kubejs.shaped("4x create:brass_funnel", [
		"A",
		"B",
		"C"
	], {
		A: "create:electron_tube",
		B: "#forge:ingots/brass",
		C: "thermal:cured_rubber"
	})

	// 黄铜隧道
	kubejs.shaped("8x create:brass_tunnel", [
		"A ",
		"BB",
		"CC"
	], {
		A: "create:electron_tube",
		B: "#forge:ingots/brass",
		C: "thermal:cured_rubber"
	})

	// 齿轮
	let cogwheelMaterials = [
		"bronze",
		"cast_iron",
		"steel",
	]
	cogwheelMaterials.forEach((material) => {
		// 小齿轮
		kubejs.shapeless(`cmi:incomplete_${material}_cogwheel`, [
			`#forge:plates/${material}`,
			"immersiveengineering:hammer"
		])
		// 大齿轮
		kubejs.shapeless(`cmi:incomplete_${material}_large_cogwheel`,[
			`2x #forge:plates/${material}`,
			"immersiveengineering:hammer"
		])
	})
})
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

	// 过应力离合器
	kubejs.shapeless("create_connected:overstress_clutch", [
		"create:andesite_casing",
		"create:electron_tube",
		"create:shaft",
		"#forge:plates/iron"
	])

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

		create.deploying(`4x steampowered:${material}_cogwheel`, [
			`cmi:incomplete_${material}_cogwheel`,
			"#create:shaft"
		])

		create.deploying(`4x steampowered:${material}_cogwheel`, [
			"create:shaft",
			`cmi:incomplete_${material}_cogwheel`
		])

		kubejs.shapeless(`steampowered:${material}_cogwheel`, [
			`cmi:incomplete_${material}_cogwheel`,
			"#create:shaft"
		])

		// 大齿轮
		kubejs.shapeless(`cmi:incomplete_${material}_large_cogwheel`, [
			`2x #forge:plates/${material}`,
			"immersiveengineering:hammer"
		])

		create.deploying(`4x steampowered:${material}_large_cogwheel`, [
			`cmi:incomplete_${material}_large_cogwheel`,
			"#create:shaft"
		])

		create.deploying(`4x steampowered:${material}_large_cogwheel`, [
			"create:shaft",
			`cmi:incomplete_${material}_large_cogwheel`
		])

		kubejs.shapeless(`steampowered:${material}_large_cogwheel`, [
			`cmi:incomplete_${material}_large_cogwheel`,
			"#create:shaft"
		])

		kubejs.shapeless(`steampowered:${material}_large_cogwheel`, [
			`steampowered:${material}_cogwheel`,
			`#forge:plates/${material}`
		])
	})

	// 齿轮
	kubejs.shapeless("cmi:incomplete_cogwheel", [
		"#minecraft:planks",
		"#minecraft:axes"
	]).damageIngredient("#minecraft:axes", 1)

	create.cutting("cmi:incomplete_cogwheel", [
		"#minecraft:wooden_slabs"
	])

	create.deploying("4x create:cogwheel", [
		"cmi:incomplete_cogwheel",
		"#create:shaft"
	]).id("create:deploying/cogwheel")

	create.deploying("4x create:cogwheel", [
		"create:shaft",
		"cmi:incomplete_cogwheel"
	])

	kubejs.shapeless("create:cogwheel", [
		"cmi:incomplete_cogwheel",
		"#create:shaft"
	]).id("create:crafting/kinetics/cogwheel")

	// 大齿轮
	kubejs.shapeless("cmi:incomplete_large_cogwheel", [
		"2x #minecraft:planks",
		"#minecraft:axes"
	]).damageIngredient("#minecraft:axes", 1)

	create.cutting("cmi:incomplete_large_cogwheel", [
		"#minecraft:planks"
	])

	create.deploying("4x create:large_cogwheel", [
		"cmi:incomplete_large_cogwheel",
		"#create:shaft"
	]).id("create:deploying/large_cogwheel")

	create.deploying("4x create:large_cogwheel", [
		"create:shaft",
		"cmi:incomplete_large_cogwheel"
	])

	kubejs.shapeless("create:large_cogwheel", [
		"cmi:incomplete_large_cogwheel",
		"#create:shaft"
	]).id("create:crafting/kinetics/large_cogwheel")

	kubejs.shapeless("create:large_cogwheel", [
		"create:cogwheel",
		"#minecraft:planks"
	]).id("create:crafting/kinetics/large_cogwheel_from_little")

	// 流体储罐
	kubejs.shaped("create:fluid_tank", [
		"A",
		"B",
		"A"
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass"
	}).id("create:crafting/kinetics/fluid_tank")

	kubejs.shaped("2x create:fluid_tank", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass"
	}).id("create:crafting/kinetics/fluid_tank2")

	kubejs.shaped("create_connected:fluid_vessel", [
		"ABA"
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass"
	}).id("create_connected:crafting/kinetics/fluid_vessel")

	kubejs.shaped("2x create_connected:fluid_vessel", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#forge:plates/copper",
		B: "#forge:glass"
	})

	// 齿轮箱
	kubejs.shaped("create:gearbox", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#create:incomplete_cogwheel",
		B: "create:andesite_casing"
	}).id("create:crafting/kinetics/gearbox")

	kubejs.shaped("create:vertical_gearbox", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#create:incomplete_cogwheel",
		B: "create:andesite_casing"
	}).id("create:crafting/kinetics/vertical_gearbox")

	kubejs.shapeless("create_connected:parallel_gearbox", [
		"create:gearbox",
		"cmi:incomplete_large_cogwheel"
	]).id("create_connected:crafting/kinetics/parallel_gearbox")

	kubejs.shapeless("create_connected:six_way_gearbox", [
		"create_connected:parallel_gearbox",
		"cmi:incomplete_large_cogwheel"
	]).id("create_connected:crafting/kinetics/six_way_gearbox_from_parallel")

	kubejs.shapeless("create_connected:six_way_gearbox", [
		"create:gearbox",
		"2x cmi:incomplete_large_cogwheel"
	]).id("create_connected:crafting/kinetics/six_way_gearbox_from_gearbox")

	kubejs.shaped("create_connected:six_way_gearbox", [
		"AB ",
		"BCB",
		" BA"
	], {
		A: "cmi:incomplete_large_cogwheel",
		B: "#create:incomplete_cogwheel",
		C: "create:andesite_casing"
	}).id("create_connected:crafting/kinetics/six_way_gearbox")

	kubejs.shapeless("create_connected:encased_chain_cogwheel", [
		"create:encased_chain_drive",
		"#create:incomplete_cogwheel"
	]).id("create_connected:crafting/kinetics/encased_chain_cogwheel")

	kubejs.shapeless("create_connected:crank_wheel", [
		"create:hand_crank",
		"#create:incomplete_cogwheel"
	]).id("create_connected:crafting/kinetics/crank_wheel")

	kubejs.shapeless("create_connected:large_crank_wheel", [
		"create:hand_crank",
		"#create:incomplete_large_cogwheel"
	]).id("create_connected:crafting/kinetics/large_crank_wheel")

	let cutSlabWood = [
		"minecraft:oak",
		"minecraft:dark_oak",
		"minecraft:birch",
		"minecraft:spruce",
		"minecraft:jungle",
		"minecraft:acacia",
		"minecraft:mangrove",
		"minecraft:cherry",
		"ad_astra:glacian",
		"thermal:rubberwood",
		"tconstruct:greenheart",
		"tconstruct:skyroot",
		"tconstruct:enderbark",
		"minecraft:crimson",
		"minecraft:warped",
		"ad_astra:aeronos",
		"ad_astra:strophar",
		"minecraft:bamboo",
		"mynethersdelight:powdery",
		"tconstruct:bloodshroom",
	]
	cutSlabWood.forEach((id) => {
		create.cutting(`2x ${id}_slab`, `${id}_planks`)
	})
})
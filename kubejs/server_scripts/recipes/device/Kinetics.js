ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements, tconstruct } = event.recipes
	let Inc = {
		ENGINE: "cmi:incomplete_steam_engine"
	}

	// 处理设备
	// 动力辊压机
	kubejs.shaped("create:mechanical_press", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: ["#forge:storage_blocks/iron", "#forge:storage_blocks/zinc"]
	}).id("create:crafting/kinetics/mechanical_press")

	// 动力搅拌器
	kubejs.shaped("create:mechanical_mixer", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "create:whisk",
	}).id("create:crafting/kinetics/mechanical_mixer")

	// 鼓风机
	kubejs.shaped("create:encased_fan", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "create:propeller",
	}).id("create:crafting/kinetics/encased_fan")

	// 烤箱用鼓风机
	kubejs.shapeless("ratatouille:oven_fan", [
		"create:encased_fan"
	]).id("ratatouille:oven_fan")

	// 鼓风机 ←- 烤箱用鼓风机
	kubejs.shapeless("create:encased_fan", [
		"ratatouille:oven_fan"
	])

	// 工作盆盖板
	kubejs.shaped("createdieselgenerators:basin_lid", [
		"ABA",
		"C C"
	], {
		A: "#forge:plates/andesite_alloy",
		B: "#forge:ingots/andesite_alloy",
		C: "thermal:rubberwood_planks"
	})

	// 动力轴承
	kubejs.shaped("create:mechanical_bearing", [
		"X",
		"C",
		"M"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#minecraft:planks",
	}).id("create:crafting/kinetics/mechanical_bearing")

	// 动力活塞
	kubejs.shaped("create:mechanical_piston", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "create:piston_extension_pole",
	}).id("create:crafting/kinetics/mechanical_piston")

	// 起重机轴承
	kubejs.shaped("create:gantry_carriage", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#create:cogwheel",
	}).id("create:crafting/kinetics/gantry_carriage")

	// 弹射置物台
	kubejs.shapeless("create:weighted_ejector",
		["create:depot",
			Mechanism.ANDESITE.COM
		]).id("create:crafting/kinetics/weighted_ejector")

	// 石磨
	kubejs.shaped("create:millstone", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:stone",
	}).id("create:crafting/kinetics/millstone")

	// 动力收割机
	kubejs.shaped("create:mechanical_harvester", [
		"XXX",
		" C ",
		" M "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:rods/andesite",
	}).id("create:crafting/kinetics/mechanical_harvester")

	// 动力犁
	kubejs.shaped("create:mechanical_plough", [
		"XXX",
		" C ",
		" M "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
	}).id("create:crafting/kinetics/mechanical_plough")

	// 脱粒机
	kubejs.shaped("ratatouille:thresher", [
		" Y ",
		"XMX",
		" C "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
		Y: "#forge:plates/andesite_alloy",
	}).id("ratatouille:thresher")

	// 动力压路机
	kubejs.shaped("2x create:mechanical_roller", [
		"CX ",
		"XMX",
		" X "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
	}).id("create:crafting/kinetics/mechanical_roller")

	// 动力脱模机
	kubejs.shaped("ratatouille:mechanical_demolder", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:slimeballs",
	}).id("ratatouille:mechanical_demolder")

	// 振动台
	kubejs.shaped("vintageimprovements:vibrating_table", [
		" Y ",
		"XMX",
		" C "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#vintageimprovements:springs/andesite",
		Y: "#minecraft:planks",
	}).id("vintageimprovements:craft/vibrating_table")

	// 轧机
	kubejs.shaped("createaddition:rolling_mill", [
		" M ",
		"XYX",
		" C "
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/andesite_alloy",
		Y: "#create:shaft",
	}).id("createaddition:crafting/rolling_mill")

	// 卷簧机
	kubejs.shaped("vintageimprovements:spring_coiling_machine", [
		"X",
		"C",
		"M"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "vintageimprovements:spring_coiling_machine_wheel",
	}).id("vintageimprovements:craft/spring_coiling_machine")

	// 空白模块
	kubejs.shapeless("deepdrilling:blank_module", [
		"create:andesite_casing",
		Mechanism.ANDESITE.COM,
		"#forge:plates/iron"
	]).id("deepdrilling:blank_module")

	// 冲压机
	kubejs.shaped("vintageimprovements:curving_press", [
		"M",
		"C",
		"X"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: ["#forge:plates/iron", "#forge:plates/andesite_alloy"]
	}).id("vintageimprovements:craft/curving_press")

	// 应力源
	// 风车轴承
	kubejs.shaped("create:windmill_bearing", [
		"X",
		"C",
		"M"
	], {
		M: Mechanism.ANDESITE.COM,
		C: Casing.ANDESITE,
		X: "#forge:plates/stone",
	}).id("create:crafting/kinetics/windmill_bearing")

	// 水车
	kubejs.shaped("create:water_wheel", [
		" A ",
		"ABA",
		" A "
	], {
		A: "immersiveengineering:waterwheel_segment",
		B: "create:andesite_casing"
	}).id("create:crafting/kinetics/water_wheel")

	// 大水车
	kubejs.shaped("create:large_water_wheel", [
		"A A",
		" B ",
		"A A"
	], {
		A: "immersiveengineering:waterwheel_segment",
		B: "create:water_wheel"
	}).id("create:crafting/kinetics/large_water_wheel")

	kubejs.shaped("create:large_water_wheel", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "immersiveengineering:waterwheel_segment",
		B: "create:andesite_casing"
	})

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

	let materials = [
		{
			id: "bronze",
			block: "tconstruct:seared_bricks"
		},
		{
			id: "cast_iron",
			block: "tconstruct:scorched_bricks"
		},
		{
			id: "steel",
			block: "immersiveengineering:blastbrick"
		}
	]
	materials.forEach((material) => {
		let ingot = `#forge:ingots/${material.id}`
		let plate = `#forge:plates/${material.id}`

		// 锅炉
		kubejs.shaped(`steampowered:${material.id}_boiler`, [
			"AAA",
			"ACA",
			"ABA"
		], {
			A: [plate, ingot],
			B: "create:fluid_pipe",
			C: "create:fluid_tank"
		})

		// 燃烧室
		kubejs.shaped(`steampowered:${material.id}_burner`, [
			"AAA",
			"ABA",
			"CCC"
		], {
			A: [plate, ingot],
			B: ["minecraft:furnace", "minecraft:smoker", "minecraft:blast_furnace"],
			C: material.block
		})

		// 蒸汽引擎
		kubejs.shaped(`steampowered:${material.id}_steam_engine`, [
			"ABC",
			"EDF",
			"ABC"
		], {
			A: plate,
			B: ingot,
			C: "create:andesite_alloy",
			D: "cmi:bronze_mechanism",
			E: "create:fluid_pipe",
			F: "create:shaft"
		})

		// 飞轮
		kubejs.shaped(`steampowered:${material.id}_flywheel`, [
			"AB ",
			"BCB",
			"AB "
		], {
			A: "createdieselgenerators:engine_piston",
			B: plate,
			C: "create:flywheel"
		})
	})

	// 蒸汽引擎
	create.sequenced_assembly("create:steam_engine", [
		"create:copper_casing"
	], [
		create.deploying(Inc.ENGINE, [
			Inc.ENGINE,
			"cmi:bronze_mechanism"
		]),
		create.cutting(Inc.ENGINE, [
			Inc.ENGINE
		]),
		create.deploying(Inc.ENGINE, [
			Inc.ENGINE,
			"createdieselgenerators:engine_piston"
		]),
		create.deploying(Inc.ENGINE, [
			Inc.ENGINE,
			"#forge:plates/steel"
		]),
		create.deploying(Inc.ENGINE, [
			Inc.ENGINE,
			"create:precision_mechanism"
		])
	]).loops(1).transitionalItem(Inc.ENGINE)
		.id("create:crafting/kinetics/steam_engine")

	// 增产机壳
	let casingFrame = [
		"andesite",
		"brass",
		"copper"
	]
	casingFrame.forEach((frame) => {
		event.stonecutting(
			`4x cmi:${frame}_casing_framework`,
			`#forge:plates/${frame}`
		)
	})

	// 传动
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
			"#forge:hammers"
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
			"#forge:hammers"
		])

		create.cutting(`cmi:incomplete_${material}_large_cogwheel`, `#forge:gears/${material}`)

		create.cutting(`2x cmi:incomplete_${material}_cogwheel`, `cmi:incomplete_${material}_large_cogwheel`)

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

	create.cutting("2x cmi:incomplete_cogwheel", [
		"cmi:incomplete_large_cogwheel"
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

	create.cutting("2x cmi:incomplete_large_cogwheel", [
		"#forge:gears/wooden"
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

	// 齿轮箱
	kubejs.shaped("create:gearbox", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#create:incomplete_cogwheels",
		B: Casing.ANDESITE
	}).id("create:crafting/kinetics/gearbox")

	kubejs.shaped("create:vertical_gearbox", [
		"A A",
		" B ",
		"A A"
	], {
		A: "#create:incomplete_cogwheels",
		B: Casing.ANDESITE
	}).id("create:crafting/kinetics/vertical_gearbox")

	kubejs.shapeless("create_connected:parallel_gearbox", [
		"create:gearbox",
		"#create:incomplete_large_cogwheels"
	]).id("create_connected:crafting/kinetics/parallel_gearbox")

	kubejs.shapeless("create_connected:six_way_gearbox", [
		"create_connected:parallel_gearbox",
		"#create:incomplete_large_cogwheels"
	]).id("create_connected:crafting/kinetics/six_way_gearbox_from_parallel")

	kubejs.shapeless("create_connected:six_way_gearbox", [
		"create:gearbox",
		"2x #create:incomplete_large_cogwheels"
	]).id("create_connected:crafting/kinetics/six_way_gearbox_from_gearbox")

	kubejs.shaped("create_connected:six_way_gearbox", [
		"AB ",
		"BCB",
		" BA"
	], {
		A: "#create:incomplete_large_cogwheels",
		B: "#create:incomplete_cogwheels",
		C: Casing.ANDESITE
	}).id("create_connected:crafting/kinetics/six_way_gearbox")

	kubejs.shapeless("create_connected:encased_chain_cogwheel", [
		"create:encased_chain_drive",
		"#create:incomplete_cogwheels"
	]).id("create_connected:crafting/kinetics/encased_chain_cogwheel")

	kubejs.shapeless("create_connected:crank_wheel", [
		"create:hand_crank",
		"#create:incomplete_cogwheels"
	]).id("create_connected:crafting/kinetics/crank_wheel")

	kubejs.shapeless("create_connected:large_crank_wheel", [
		"create:hand_crank",
		"#create:incomplete_large_cogwheels"
	]).id("create_connected:crafting/kinetics/large_crank_wheel")

	// 过应力离合器
	kubejs.shapeless("create_connected:overstress_clutch", [
		Casing.ANDESITE,
		"create:electron_tube",
		"create:shaft",
		"#forge:plates/iron"
	])

})
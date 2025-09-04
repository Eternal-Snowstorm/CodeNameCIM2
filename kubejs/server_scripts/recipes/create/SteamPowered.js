ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 青铜齿轮
	kubejs.shapeless("steampowered:bronze_cogwheel", [
		"create:shaft",
		"#forge:ingots/bronze"
	])

	// 青铜齿轮
	kubejs.shapeless("steampowered:bronze_large_cogwheel", [
		"create:shaft",
		"#forge:ingots/bronze",
		"#forge:ingots/bronze"
	])

	// 青铜锅炉
	kubejs.shaped("steampowered:bronze_boiler", [
		"AAA",
		"ACA",
		"ABA"
	], {
		A: "#forge:plates/bronze",
		B: "create:fluid_pipe",
		C: "create:fluid_tank"
	})

	// 青铜燃烧室
	kubejs.shaped("steampowered:bronze_burner", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: [
			"#forge:plates/bronze",
			"#forge:ingots/bronze"
		],
		B: [
			"minecraft:furnace",
			"minecraft:smoker",
			"minecraft:blast_furnace"
		],
		C: "tconstruct:seared_bricks"
	})

	// 青铜引擎
	kubejs.shaped("steampowered:bronze_steam_engine", [
		"ABC",
		"EDF",
		"ABC"
	], {
		A: "#forge:plates/bronze",
		B: "#forge:ingots/bronze",
		C: "create:andesite_alloy",
		D: "cmi:bronze_mechanism",
		E: "create:fluid_pipe",
		F: "create:shaft"
	})

	// 青铜飞轮
	kubejs.shaped("steampowered:bronze_flywheel", [
		"AB ",
		"BCB",
		"AB "
	], {
		A: "createdieselgenerators:engine_piston",
		B: "#forge:plates/bronze",
		C: "create:flywheel"
	})

	// 铸铁齿轮
	kubejs.shapeless("steampowered:cast_iron_cogwheel", [
		"create:shaft",
		"#forge:ingots/cast_iron"
	])

	// 铸铁齿轮
	kubejs.shapeless("steampowered:cast_iron_large_cogwheel", [
		"create:shaft",
		"#forge:ingots/cast_iron",
		"#forge:ingots/cast_iron"
	])

	// 铸铁锅炉
	kubejs.shaped("steampowered:cast_iron_boiler", [
		"AAA",
		"ACA",
		"ABA"
	], {
		A: [
			"#forge:plates/cast_iron",
			"#forge:ingots/cast_iron"
		],
		B: "create:fluid_pipe",
		C: "create:fluid_tank"
	})

	// 铸铁燃烧室
	kubejs.shaped("steampowered:cast_iron_burner", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: [
			"#forge:plates/cast_iron",
			"#forge:ingots/cast_iron"
		],
		B: [
			"minecraft:furnace",
			"minecraft:smoker",
			"minecraft:blast_furnace"
		],
		C: "tconstruct:scorched_bricks"
	})

	// 铸铁引擎
	kubejs.shaped("steampowered:cast_iron_steam_engine", [
		"ABC",
		"EDD",
		"ABC"
	], {
		A: "#forge:plates/cast_iron",
		B: "#forge:ingots/cast_iron",
		C: "create:andesite_alloy",
		D: "cmi:bronze_mechanism",
		E: "create:fluid_pipe",
		F: "create:shaft"
	})

	// 铸铁飞轮
	kubejs.shaped("steampowered:cast_iron_flywheel", [
		"AB ",
		"BCB",
		"AB "
	], {
		A: "createdieselgenerators:engine_piston",
		B: "#forge:plates/cast_iron",
		C: "create:flywheel"
	})

	// 钢齿轮
	kubejs.shapeless("steampowered:steel_cogwheel", [
		"create:shaft",
		"#forge:ingots/steel"
	])

	//钢齿轮
	kubejs.shapeless("steampowered:steel_large_cogwheel", [
		"create:shaft",
		"#forge:ingots/steel",
		"#forge:ingots/steel"
	])

	// 钢锅炉
	kubejs.shaped("steampowered:steel_boiler", [
		"AAA",
		"ACA",
		"ABA"
	], {
		A: "#forge:plates/steel",
		B: "create:fluid_pipe",
		C: "create:fluid_tank"
	})

	// 钢燃烧室
	kubejs.shaped("steampowered:steel_burner", [
		"AAA",
		"ABA",
		"CCC"
	], {
		A: [
			"#forge:plates/steel",
			"#forge:ingots/steel"
		],
		B: [
			"minecraft:furnace",
			"minecraft:smoker",
			"minecraft:blast_furnace"
		],
		C: "immersiveengineering:blastbrick"
	})

	// 钢引擎
	kubejs.shaped("steampowered:steel_steam_engine", [
		"ABC",
		"EDF",
		"ABC"
	], {
		A: "#forge:plates/steel",
		B: "#forge:ingots/steel",
		C: "create:andesite_alloy",
		D: "cmi:bronze_mechanism",
		E: "create:fluid_pipe",
		F: "create:shaft"
	})

	// 钢飞轮
	kubejs.shaped("steampowered:steel_flywheel", [
		"AB ",
		"BCB",
		"AB "
	], {
		A: "createdieselgenerators:engine_piston",
		B: "#forge:plates/steel",
		C: "create:flywheel"
	})
})
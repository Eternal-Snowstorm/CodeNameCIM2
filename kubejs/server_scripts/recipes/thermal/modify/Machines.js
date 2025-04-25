ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes

	const COPPER_MECH = "ue_addons:copper_mechanism"
	const IRON_MECH = "ue_addons:iron_mechanism"
	const THERMAL_MECH = "ue_addons:thermal_mechanism"

	const REDSTONE_MOD = "vintageimprovements:redstone_module"

	const COPPER_INGOT = "#forge:ingots/copper"
	const IRON_INGOT = "#forge:ingots/iron"
	const SILVER_INGOT = "#forge:ingots/silver"

	const GLASS = "#forge:glass"
	const PLANK = "#minecraft:planks"

	const FRAME = "thermal:machine_frame"

	// 流体单元框架
	kubejs.shaped("thermal:fluid_cell_frame", [
		"ABA",
		"C C",
		"CDC"
	], {
		A: COPPER_INGOT,
		B: COPPER_MECH,
		C: GLASS,
		D: THERMAL_MECH
	}).id("thermal:fluid_cell_frame")

	// 机器框架
	kubejs.shaped("thermal:machine_frame", [
		"ABA",
		"BCB",
		"DBD"
	], {
		A: IRON_MECH,
		B: GLASS,
		C: "#forge:gears/tin",
		D: IRON_INGOT
	}).id("thermal:machine_frame")

	// 
	kubejs.shaped("thermal:device_potion_diffuser", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: SILVER_INGOT,
		B: THERMAL_MECH,
		C: GLASS,
		D: "minecraft:glass_bottle",
		E: REDSTONE_MOD
	}).id("thermal:device_potion_diffuser")

	// 
	kubejs.shaped("thermal:device_nullifier", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: SILVER_INGOT,
		B: REDSTONE_MOD,
		C: GLASS,
		D: "minecraft:lava_bucket",
		E: THERMAL_MECH
	}).id("thermal:device_nullifier")

	// 
	kubejs.shaped("thermal:device_xp_condenser", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: SILVER_INGOT,
		B: "ue_addons:enchanted_mechanism",
		C: GLASS,
		D: "thermal:xp_crystal",
		E: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:device_collector", [
		"A A",
		"BCB",
		"ADA"
	], {
		A: "#forge:ingots/tin",
		B: GLASS,
		C: "minecraft:hopper",
		D: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:redstone_servo", [
		"A  ",
		" B ",
		"  C"
	], {
		A: REDSTONE_MOD,
		B: IRON_INGOT,
		C: "minecraft:redstone"
	})

	// 
	kubejs.shaped("thermal:device_composter", [
		"ABC",
		"DED",
		"CFC"
	], {
		A: "ue_addons:wooden_mechanism",
		B: IRON_MECH,
		C: PLANK,
		D: GLASS,
		E: "minecraft:composter",
		F: REDSTONE_MOD
	})

	// 
	kubejs.shaped("thermal:device_fisher", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: PLANK,
		B: COPPER_MECH,
		C: GLASS,
		D: "minecraft:fishing_rod",
		E: THERMAL_MECH
	})

	// 
	kubejs.shaped("16x thermal:rf_coil", [
		"A  ",
		" B ",
		"  A"
	], {
		A: "ue_addons:gold_mechanism",
		B: "minecraft:redstone"
	})

	// 
	kubejs.shaped("thermal:dynamo_stirling", [
		" A ",
		"B B",
		"CDC"
	], {
		A: "minecraft:redstone",
		B: "minecraft:stone",
		C: "ue_addons:stone_mechanism",
		D: "minecraft:flint"
	})

	// 
	kubejs.shaped("thermal:machine_pulverizer", [
		" A ",
		" B ",
		" C "
	], {
		A: "create:chute",
		B: FRAME,
		C: IRON_MECH
	})

	// 
	kubejs.shaped("thermal:machine_sawmill", [
		" A ",
		" B ",
		" C "
	],{
		A: "create:mechanical_saw",
		B: FRAME,
		C: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:dynamo_gourmand", [
		"   ",
		" A ",
		"BCB"
	],{
		A: "ue_addons:pigiron_mechanism",
		B: "minecraft:bone",
		C: "thermal:dynamo_compression"
	})

	// 
	kubejs.shaped("thermal:machine_crafter", [
		" A ",
		" B ",
		"CDC"
	],{
		A: "minecraft:crafting_table",
		B: FRAME,
		C: "#forge:ingots/tin",
		D: COPPER_MECH
	})

	// 
	kubejs.shaped("thermal:machine_bottler", [
		" A ",
		" B ",
		" C "
	],{
		A: FRAME,
		B: "create:spout",
		C: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:machine_press", [
		"   ",
		"ABC",
		" D "
	],{
		A: FRAME,
		B: "create:mechanical_press",
		C: "createaddition:electric_motor",
		D: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:machine_centrifuge", [
		" A ",
		" B ",
		" C "
	],{
		A: "ue_addons:coil_mechanism",
		B: "vintageimprovements:centrifuge",
		C: FRAME
	})

	// 
	kubejs.shaped("thermal:machine_furnace", [
		" A ",
		" B ",
		" C "
	],{
		A: REDSTONE_MOD,
		B: FRAME,
		C: "minecraft:furnace"
	})

	// 
	create.item_application("thermal:dynamo_compression", [
		"thermal:dynamo_stirling",
		"ue_addons:thermal_mechanism"
	])

	// 
	create.item_application("thermal:dynamo_disenchantment", [
		"thermal:dynamo_compression",
		"ue_addons:enchanted_mechanism"
	])

	// 
	create.item_application("thermal:dynamo_magmatic", [
		"thermal:dynamo_compression",
		"ue_addons:feinforced_mechanism"
	])

	// 
	create.item_application("thermal:machine_crucible", [
		"thermal:machine_frame",
		"ue_addons:nether_mechanism"
	])

	// 
	create.item_application("thermal:machine_pyrolyzer", [
		"thermal:machine_crucible",
		"ue_addons:feinforced_mechanism"
	])

})
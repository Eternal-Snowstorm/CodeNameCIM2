ServerEvents.recipes((event) => {
	let { create, kubejs, thermal } = event.recipes

	const ANDESITE_MECH = "cmi:andesite_mechanism"
	const COPPER_MECH = "cmi:copper_mechanism"
	const IRON_MECH = "cmi:iron_mechanism"
	const THERMAL_MECH = "cmi:thermal_mechanism"
	const FEIN_MECH = "cmi:feinforced_mechanism"

	const REDSTONE_MOD = "vintageimprovements:redstone_module"

	const COPPER_INGOT = "#forge:ingots/copper"
	const LEAD_INGOT = "#forge:ingots/lead"
	const IRON_INGOT = "#forge:ingots/iron"
	const SILVER_INGOT = "#forge:ingots/silver"

	const GLASS = "#forge:glass"
	const PLANK = "#minecraft:planks"

	const FRAME = "thermal:machine_frame"

	// 流体单元框架
	kubejs.shaped("thermal:fluid_cell_frame", [
		"ACA",
		"CDC",
		"ACA"
	], {
		A: COPPER_INGOT,
		C: GLASS,
		D: COPPER_MECH
	}).id("thermal:fluid_cell_frame")

	// RF单元框架
	kubejs.shaped("thermal:energy_cell_frame", [
		"ACA",
		"CDC",
		"ACA"
	], {
		A: LEAD_INGOT,
		C: GLASS,
		D: FEIN_MECH
	}).id("thermal:energy_cell_frame")

	// 机器框架
	kubejs.shaped("thermal:machine_frame", [
		"ABA",
		"B B",
		"ABA"
	], {
		B: GLASS,
		A: "#forge:ingots/invar",
	}).id("thermal:machine_frame")

	// 造石机
	kubejs.shaped("thermal:device_rock_gen", [
		" A ",
		"BCB",
		" D "
	], {
		A: "create:andesite_casing",
		B: "minecraft:bucket",
		C: ANDESITE_MECH,
		D: "#forge:plates/iron"
	})

	// 
	kubejs.shaped("thermal:device_potion_diffuser", [
		"ABA",
		"CMC",
		"ADA"
	], {
		A: SILVER_INGOT,
		B: THERMAL_MECH,
		C: GLASS,
		D: "minecraft:glass_bottle",
		M: "thermal:machine_frame"
	}).id("thermal:device_potion_diffuser")

	// 
	kubejs.shaped("thermal:device_nullifier", [
		"ADA",
		"CMC",
		"AEA"
	], {
		A: PLANK,
		C: GLASS,
		D: "minecraft:lava_bucket",
		M: "create:andesite_casing",
		E: ANDESITE_MECH
	}).id("thermal:device_nullifier")

	// 
	kubejs.shaped("thermal:device_xp_condenser", [
		"ADA",
		"CMC",
		"ABA"
	], {
		A: SILVER_INGOT,
		B: "cmi:enchanted_mechanism",
		C: GLASS,
		D: "thermal:xp_crystal",
		M: "thermal:machine_frame"
	})

	// 
	kubejs.shaped("thermal:device_collector", [
		"ACA",
		"BMB",
		"ADA"
	], {
		A: "#forge:ingots/tin",
		B: GLASS,
		C: "minecraft:hopper",
		D: THERMAL_MECH,
		M: "thermal:machine_frame"
	})

	// 
	kubejs.shaped("thermal:redstone_servo", [
		"A",
		"B",

	], {
		A: REDSTONE_MOD,
		B: "#forge:rods/iron",
	})

	// 
	kubejs.shaped("thermal:device_composter", [
		"CAC",
		"DED",
		"CFC"
	], {
		A: "cmi:andesite_mechanism",
		C: PLANK,
		D: GLASS,
		E: "minecraft:composter",
		F: "minecraft:dirt"
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
		E: "cmi:andesite_mechanism",
	})

	// 
	kubejs.shaped("thermal:machine_pulverizer", [
		" A ",
		"CBC",
		" M "
	], {
		A: "thermal:rf_coil",
		B: FRAME,
		M: "cmi:thermal_mechanism",
		C: "create:crushing_wheel"
	})

	// 
	kubejs.shaped("thermal:machine_sawmill", [
		"A",
		"B",
		"C"
	], {
		A: "create:mechanical_saw",
		B: FRAME,
		C: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:machine_crafter", [
		"A",
		"B",
		"M"
	], {
		A: "minecraft:crafting_table",
		B: FRAME,
		M: "cmi:thermal_mechanism"
	})

	// 
	kubejs.shaped("thermal:machine_bottler", [
		"B",
		"A",
		"C"
	], {
		A: FRAME,
		B: "create:spout",
		C: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:machine_press", [
		"B",
		"A",
		"D"
	], {
		A: FRAME,
		B: "create:mechanical_press",
		D: THERMAL_MECH
	})

	// 
	kubejs.shaped("thermal:machine_centrifuge", [
		"B",
		"C",
		"M"
	], {
		M: THERMAL_MECH,
		B: "vintageimprovements:centrifuge",
		C: FRAME
	})

	// 
	kubejs.shaped("thermal:machine_furnace", [
		"C",
		"B",
		"A"
	], {
		A: THERMAL_MECH,
		B: FRAME,
		C: "minecraft:furnace"
	})

	// 
	kubejs.shaped("thermal:machine_crucible", [
		" C ",
		" B ",
		" A "
	], {
		A: THERMAL_MECH,
		B: FRAME,
		C: "cmi:nether_mechanism"
	})

	// 
	kubejs.shaped("thermal:machine_pyrolyzer", [
		" C ",
		" B ",
		" A "
	], {
		A: FEIN_MECH,
		B: FRAME,
		C: "create:blaze_burner"
	})

	// 
	kubejs.shaped("thermal:machine_smelter", [
		"C",
		"B",
		"A"
	], {
		A: FEIN_MECH,
		B: FRAME,
		C: "thermal:machine_furnace"
	})

	// 
	kubejs.shaped("thermal:machine_insolator", [
		"C",
		"B",
		"A"
	], {
		A: FEIN_MECH,
		B: FRAME,
		C: "cmi:nature_mechanism"
	})

	// 
	kubejs.shaped("thermal:machine_chiller", [
		"C",
		"B",
		"A"
	], {
		A: THERMAL_MECH,
		B: FRAME,
		C: "ratatouille:frozen_block"
	})

	// 
	kubejs.shaped("thermal:machine_refinery", [
		"C",
		"B",
		"A"
	], {
		A: FEIN_MECH,
		B: FRAME,
		C: "createdieselgenerators:distillation_controller"
	})

	// 
	kubejs.shaped("thermal:machine_brewer", [
		"C",
		"B",
		"A"
	], {
		A: THERMAL_MECH,
		B: FRAME,
		C: "minecraft:brewing_stand"
	})

	// 
	kubejs.shaped("thermal:machine_crystallizer", [
		"C",
		"B",
		"A"
	], {
		A: "cmi:resonant_mechanism",
		B: FRAME,
		C: "minecraft:diamond"
	})

	// 
	kubejs.shaped("thermal:device_tree_extractor", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: PLANK,
		B: COPPER_MECH,
		C: GLASS,
		D: "#cmi:faucet",
		E: "cmi:andesite_mechanism",
	})

	// 
	kubejs.shaped("thermal:device_water_gen", [
		" A ",
		"BCB",
		" D "
	], {
		A: "create:copper_casing",
		B: "minecraft:bucket",
		C: COPPER_MECH,
		D: "#forge:plates/copper"
	})

	// 
	kubejs.shaped("thermal_extra:advanced_refinery", [
		"C",
		"B",
		"A"
	], {
		A: "cmi:resonant_mechanism",
		B: "thermal:machine_refinery",
		C: "#forge:dusts/soul_infused"
	})

	// 硝化起爆器
	kubejs.shaped("thermal_extra:nitratic_igniter", [
		"ECE",
		"DBD",
		"EAE"
	], {
		A: "cmi:resonant_mechanism",
		B: "thermal:machine_frame",
		C: "cmi:flame_retardant_plastic",
		D: "cmi:nitrocellulose",
		E: "cmi:siltsteel_plate"
	})

	// 
	kubejs.shaped("thermal_extra:fluid_mixer", [
		"C",
		"B",
		"A"
	], {
		A: "cmi:resonant_mechanism",
		B: "thermal:machine_bottler",
		C: "#forge:dusts/twinite"
	})

	// 
	kubejs.shaped("thermal_extra:component_assembly", [
		"C",
		"B",
		"A"
	], {
		A: "cmi:resonant_mechanism",
		B: "thermal:machine_crafter",
		C: "#forge:dusts/twinite"
	})

	// 
	kubejs.shaped("thermal_extra:endothermic_dehydrator", [
		"C",
		"B",
		"A"
	], {
		A: "cmi:resonant_mechanism",
		B: "thermal:machine_crucible",
		C: "#forge:dusts/soul_infused"
	})
})
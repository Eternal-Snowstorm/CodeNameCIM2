ServerEvents.recipes((event) => {
	let { create, kubejs, vintageimprovements } = event.recipes
	let MECH = "cmi:coil_mechanism"

	// kubejs.shaped("immersiveengineering:dynamo", [
	// 	"EDE",
	// 	"ECE",
	// 	"ABA"
	// ], {
	// 	A: BATTERIES,
	// 	B: "#forge:dusts/redstone",
	// 	C: "immersiveengineering:component_iron",
	// 	D: "immersiveengineering:coil_lv",
	// 	E: "#forge:plates/iron"
	// })

	// kubejs.shaped("immersiveengineering:thermoelectric_generator", [
	// 	"CCC",
	// 	"BDB",
	// 	"AAA"
	// ], {
	// 	A: BATTERIES,
	// 	B: "#forge:plates/constantan",
	// 	C: "#forge:ingots/steel",
	// 	D: "immersiveengineering:coil_lv"
	// })

	// kubejs.shaped("8x immersiveengineering:generator", [
	// 	"DBD",
	// 	"BCB",
	// 	"ABA"
	// ], {
	// 	A: BATTERIES,
	// 	B: "immersiveengineering:sheetmetal_steel",
	// 	C: "cmi:heavy_engineering_mechanism",
	// 	D: "immersiveengineering:component_iron"
	// })

	// Poetality发电机
	kubejs.shaped("portality:generator", [
		" A ",
		"ACA",
		" B "
	], {
		A: "portality:frame",
		B: "cmi:nether_mechanism",
		C: MECH
	})

	// 电磁线圈
	kubejs.shaped("mekanismgenerators:electromagnetic_coil", [
		"ADA",
		"BCB",
		"ADA"
	], {
		A: "#forge:plates/steel",
		B: "immersiveengineering:coil_mv",
		C: "mekanism:steel_casing",
		D: MECH
	})
		.id("mekanismgenerators:electromagnetic_coil")

	// 水晶共振生成器
	kubejs.shaped("ae2:crystal_resonance_generator", [
		"ABA",
		"ACA",
		"DED"
	], {
		A: "createaddition:copper_spool",
		B: "ae2:fluix_block",
		C: MECH,
		D: "#forge:plates/silver",
		E: "cmi:sky_stone_casing"
	})
		.id("ae2:network/crystal_resonance_generator")

	// 谐振仓
	kubejs.shaped("ae2:vibration_chamber", [
		"ABA",
		"CDC",
		"EFE"
	], {
		A: "#forge:ingots/copper",
		B: "ae2:fluix_crystal",
		C: "ae2:quartz_fiber",
		D: MECH,
		E: "cmi:sky_stone_casing",
		F: "cmi:nether_mechanism"
	})
		.id("ae2:network/blocks/energy_vibration_chamber")

	// 红石通量线圈
	let incGoldRod = "createaddition:gold_rod"
	create.sequenced_assembly("thermal:rf_coil", [
		"#forge:rods/gold"
	], [
		create.deploying(incGoldRod, [incGoldRod, "#forge:dusts/redstone"]),
		vintageimprovements.laser_cutting(incGoldRod, [incGoldRod], 1000, 50),
	]).transitionalItem(incGoldRod).loops(1)
})
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

	// 电磁铁
	kubejs.shaped("immersiveengineering:electromagnet", [
		"ABA",
		"CDC",
		"AAA"
	], {
		A: "#forge:plates/steel",
		B: "immersiveengineering:coil_lv",
		C: "immersiveengineering:component_steel",
		D: MECH
	}).id("immersiveengineering:crafting/electromagnet")

	// 过热元件
	kubejs.shaped("mekanism:superheating_element", [
		"ABA",
		"CDC",
		"FEF"
	], {
		A: "#forge:plates/stainless_steel",
		B: "#forge:ingots/constantan",
		C: "#vintageimprovements:springs/constantan",
		D: MECH,
		E: "mekanism:steel_casing",
		F: "cmi:advanced_mekanism_mechanism"
	}).id("mekanism:superheating_element")

	// 电阻加热器
	kubejs.shaped("mekanism:resistive_heater", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "#forge:plates/invar",
		B: MECH,
		C: "mekanism:steel_casing",
		D: "cmi:basic_mekanism_mechanism",
		E: "mekanism:energy_tablet",
	}).id("mekanism:resistive_heater")

	// 热力发电机
	kubejs.shaped("mekanismgenerators:heat_generator", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "#forge:plates/osmium",
		B: "#forge:ingots/stainless_steel",
		C: "cmi:coil_mechanism",
		D: "cmi:basic_mekanism_mechanism",
		E: "cmi:nether_mechanism"
	}).id("mekanismgenerators:generator/heat")

	// 燃气发电机
	kubejs.shaped("mekanismgenerators:gas_burning_generator", [
		"A A",
		"ABA",
		"CDC"
	], {
		A: "#forge:plates/stainless_steel",
		B: "cmi:coil_mechanism",
		C: "cmi:advanced_mekanism_mechanism",
		D: "cmi:osmium_mechanism"
	}).id("mekanismgenerators:generator/gas_burning")

	// 生物能发电机
	kubejs.shaped("mekanismgenerators:bio_generator", [
		"ABA",
		"ACA",
		"DED"
	], {
		A: "#forge:plates/stainless_steel",
		B: "#forge:glass",
		C: "cmi:coil_mechanism",
		D: "cmi:advanced_mekanism_mechanism",
		E: "cmi:nature_mechanism"
	}).id("mekanismgenerators:generator/bio")

	// 风力发电机
	kubejs.shaped("mekanismgenerators:wind_generator", [
		" A ",
		"BCB",
		"BDB"
	], {
		A: "create:propeller",
		B: "#forge:plates/steel",
		C: "cmi:coil_mechanism",
		D: "cmi:basic_mekanism_mechanism"
	}).id("mekanismgenerators:generator/wind")

	// 斯特林
	kubejs.shaped("thermal:dynamo_stirling", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:nether_mechanism"
	})

	// 饕餮
	kubejs.shaped("thermal:dynamo_gourmand", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:pigiron_mechanism"
	})

	// 压缩
	kubejs.shaped("thermal:dynamo_compression", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:copper_mechanism"
	})

	// 驱魔
	kubejs.shaped("thermal:dynamo_disenchantment", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:enchanted_mechanism"
	})

	// 热力
	kubejs.shaped("thermal:dynamo_magmatic", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:stone_mechanism"
	})

	// 通货
	kubejs.shaped("thermal:dynamo_numismatic", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:gold_mechanism"
	})

	// 珠宝
	kubejs.shaped("thermal:dynamo_lapidary", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:photosensitive_mechanism"
	})

	// 霜冻
	kubejs.shaped("thermal_extra:dynamo_frost", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: "cmi:coil_mechanism",
		D: "cmi:simple_battery",
		E: "cmi:cobalt_mechanism"
	})

})
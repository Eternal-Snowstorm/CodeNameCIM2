ServerEvents.recipes((event) => {
	let { create, kubejs, vintageimprovements } = event.recipes
	const MECH = "cmi:coil_mechanism"
	const LMECH = "cmi:photosensitive_mechanism"

	// 一级太阳能板
	kubejs.shaped("mekanismgenerators:solar_panel", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "#forge:glass",
		B: "ae2:printed_silicon",
		C: LMECH,
		D: "#forge:plates/steel",
		E: "cmi:simple_battery"
	}).id("mekanismgenerators:solar_panel")

	// 二级太阳能板
	kubejs.shaped("ad_astra:photovoltaic_etrium_cell", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "#forge:glass",
		B: "ae2:printed_silicon",
		C: LMECH,
		D: "#forge:plates/invar",
		E: "cmi:thermal_mechanism"
	}).id("ad_astra:photovoltaic_etrium_cell")

	// 三级太阳能板
	kubejs.shaped("ad_astra:photovoltaic_vesnium_cell", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "#forge:glass",
		B: "ae2:printed_silicon",
		C: LMECH,
		D: "#forge:plates/stainless_steel",
		E: "cmi:basic_mekanism_mechanism"
	}).id("ad_astra:photovoltaic_vesnium_cell")

	// 小型太阳能板
	kubejs.shaped("mekanismgenerators:solar_generator", [
		" A ",
		"BCB",
		" D "
	], {
		A: "mekanismgenerators:solar_panel",
		B: "#forge:plates/steel",
		C: "immersiveengineering:component_steel",
		D: "cmi:simple_battery"
	}).id("mekanismgenerators:generator/solar")

	// 太阳能发电机
	kubejs.shaped("ad_astra:solar_panel", [
		" A ",
		" B ",
		"CDC"
	], {
		A: "ad_astra:photovoltaic_etrium_cell",
		B: "#forge:gears/invar",
		C: "#forge:plates/invar",
		D: "cmi:thermal_mechanism"
	}).id("ad_astra:solar_panel")

	// 大型太阳能板
	kubejs.shaped("mekanismgenerators:advanced_solar_generator", [
		"A A",
		" B ",
		"CDC"
	], {
		A: "ad_astra:photovoltaic_vesnium_cell",
		B: "cmi:basic_mekanism_mechanism",
		C: "#forge:plates/stainless_steel",
		D: "immersiveengineering:steel_post"
	}).id("mekanismgenerators:generator/advanced_solar")

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
		vintageimprovements.laser_cutting(incGoldRod, [incGoldRod])
			.energy(100).maxChargeRate(500),
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
		F: "cmi:basic_mekanism_mechanism"
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

	// 固体燃料加热器
	kubejs.shaped("mekanism:fuelwood_heater", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: ["#forge:ingots/stainless_steel", "#forge:plates/stainless_steel"],
		B: "cmi:basic_mekanism_mechanism",
		C: ["minecraft:furnace", "minecraft:smoker", "minecraft:blast_furnace"],
		D: "mekanism:steel_casing"
	}).id("mekanism:fuelwood_heater")

	// 热力发电机
	kubejs.shaped("mekanismgenerators:heat_generator", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "#forge:plates/osmium",
		B: "#forge:ingots/stainless_steel",
		C: MECH,
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
		B: MECH,
		C: "cmi:advanced_mekanism_mechanism",
		D: "cmi:air_tight_mechanism"
	}).id("mekanismgenerators:generator/gas_burning")

	// 生物能发电机
	kubejs.shaped("mekanismgenerators:bio_generator", [
		"ABA",
		"ACA",
		"DED"
	], {
		A: "#forge:plates/stainless_steel",
		B: "#forge:glass",
		C: MECH,
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
		B: "#forge:plates/aluminum",
		C: MECH,
		D: "immersiveengineering:alu_post"
	}).id("mekanismgenerators:generator/wind")

	// 斯特林
	kubejs.shaped("thermal:dynamo_stirling", [
		" A ",
		"BCB",
		"DED"
	], {
		A: "cmi:thermal_mechanism",
		B: "#forge:plates/invar",
		C: MECH,
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
		C: MECH,
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
		C: MECH,
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
		C: MECH,
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
		C: MECH,
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
		C: MECH,
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
		C: MECH,
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
		C: MECH,
		D: "cmi:simple_battery",
		E: "cmi:cobalt_mechanism"
	})

	// 电力接口
	kubejs.shaped("2x createaddition:portable_energy_interface", [
		"AB",
		"C "
	], {
		A: "create:brass_casing",
		B: "create:chute",
		C: MECH
	}).id("createaddition:crafting/portable_energy_interface")
})
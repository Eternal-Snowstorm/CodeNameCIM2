ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	let casing = "mekanism:steel_casing"
	let alloyB = "minecraft:redstone"
	let alloyA = "mekanism:alloy_infused"
	let alloyE = "mekanism:alloy_reinforced"
	let alloyU = "mekanism:alloy_atomic"
	let mechB = "cmi:basic_mekanism_mechanism"
	let mechA = "cmi:advanced_mekanism_mechanism"
	let mechE = "cmi:elite_mekanism_mechanism"
	let mechU = "cmi:ultimate_mekanism_mechanism"

	// Os压缩机
	kubejs.shaped("mekanism:osmium_compressor", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyA,
		B: mechA,
		C: "minecraft:bucket",
		D: casing,
	}).id("mekanism:osmium_compressor")

	// 融合机
	kubejs.shaped("mekanism:combiner", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyE,
		B: mechE,
		C: "minecraft:cobblestone",// 故意没有标签
		D: casing,
	}).id("mekanism:combiner")

	// 粉碎机
	kubejs.shaped("mekanism:crusher", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyB,
		B: mechB,
		C: "create:crushing_wheel",
		D: casing,
	}).id("mekanism:crusher")

	// 提纯仓
	kubejs.shaped("mekanism:purification_chamber", [
		"ACA",
		"ABA",
		"ACA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "thermal_extra:nitratic_igniter",
		C: mechB
	}).id("mekanism:purification_chamber")

	// 炉子
	kubejs.shaped("mekanism:energized_smelter", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyB,
		B: mechB,
		C: "#forge:glass",
		D: casing,
	}).id("mekanism:energized_smelter")

	// 压射
	kubejs.shaped("mekanism:chemical_injection_chamber", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyE,
		B: mechE,
		C: "#forge:ingots/gold",
		D: "mekanism:enrichment_chamber",
	}).id("mekanism:chemical_injection_chamber")

	// 灌注
	kubejs.shaped("mekanism:chemical_infuser", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyB,
		B: mechB,
		C: "mekanism:basic_chemical_tank",
		D: casing,
	}).id("mekanism:chemical_infuser")

	// 气液
	kubejs.shaped("mekanism:rotary_condensentrator", [
		"ABA",
		"CDE",
		"ABA"
	], {
		A: alloyB,
		B: mechB,
		C: "mekanism:basic_chemical_tank",
		E: "mekanism:basic_fluid_tank",
		D: casing,
	}).id("mekanism:rotary_condensentrator")

	// 锯木
	kubejs.shaped("mekanism:precision_sawmill", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyB,
		B: mechB,
		C: "thermal:saw_blade",
		D: casing,
	}).id("mekanism:precision_sawmill")

	// 溶解
	kubejs.shaped("mekanism:chemical_dissolution_chamber", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyU,
		B: mechU,
		C: "mekanism:basic_chemical_tank",
		D: casing,
	}).id("mekanism:chemical_dissolution_chamber")

	// 清洗
	kubejs.shaped("mekanism:chemical_washer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyU,
		B: mechU,
		C: "mekanism:basic_fluid_tank",
		D: casing,
	}).id("mekanism:chemical_washer")

	// 结晶
	kubejs.shaped("mekanism:chemical_crystallizer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyU,
		B: mechU,
		C: "minecraft:diamond",
		D: casing,
	}).id("mekanism:chemical_crystallizer")

	// 吃饭
	kubejs.shaped("mekanism:nutritional_liquifier", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyB,
		B: mechB,
		C: "cmi:pigiron_mechanism",
		D: casing,
	}).id("mekanism:nutritional_liquifier")

	// 反物质
	kubejs.shaped("mekanism:antiprotonic_nucleosynthesizer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyU,
		B: mechU,
		C: "mekanism:pellet_antimatter",
		D: casing,
	}).id("mekanism:antiprotonic_nucleosynthesizer")

	// 维度稳定
	kubejs.shaped("mekanism:dimensional_stabilizer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: alloyU,
		B: mechU,
		C: "minecraft:diamond_block",
		D: casing,
	}).id("mekanism:dimensional_stabilizer")

	// 热力发电机
	kubejs.shaped("mekanismgenerators:heat_generator", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "#forge:ingots/iron",
		B: "cmi:stone_mechanism",
		C: mechB,
		D: "#forge:ingots/copper",
		E: casing
	}).id("mekanismgenerators:generator/heat")

	// 电池
	kubejs.shaped("mekanism:energy_tablet", [
		"A",
		"B",
		"A"
	], {
		A: alloyA,
		B: "cmi:gold_mechanism",
	}).id("mekanism:energy_tablet")
})
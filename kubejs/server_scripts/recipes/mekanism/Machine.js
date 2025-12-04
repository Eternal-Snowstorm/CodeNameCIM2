ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	const CASING = "mekanism:steel_casing"
	let Ingot = {
		STAINLESS: "#forge:ingots/stainless_steel",
		INFUSED: "#forge:alloys/advanced",
		REINFORCED: "#forge:alloys/elite",
		ATOMIC: "#forge:alloys/ultimate",
		OBSIDIAN: "#forge:ingots/refined_obsidian",
		GLOWSTONE: "#forge:ingots/refined_glowstone"
	}
	let Mech = {
		T1: "cmi:basic_mekanism_mechanism",
		T2: "cmi:advanced_mekanism_mechanism",
		T3: "cmi:elite_mekanism_mechanism",
		T4: "cmi:ultimate_mekanism_mechanism"
	}

	// Os压缩机
	kubejs.shaped("mekanism:osmium_compressor", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.INFUSED,
		B: Mech.T2,
		C: "minecraft:bucket",
		D: CASING,
	}).id("mekanism:osmium_compressor")

	// 融合机
	kubejs.shaped("mekanism:combiner", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.INFUSED,
		B: Mech.T1,
		C: "#forge:stone",
		D: CASING,
	}).id("mekanism:combiner")

	// 粉碎机
	kubejs.shaped("mekanism:crusher", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.STAINLESS,
		B: Mech.T1,
		C: "create:crushing_wheel",
		D: CASING,
	}).id("mekanism:crusher")

	// 提纯仓
	kubejs.shaped("mekanism:purification_chamber", [
		"ACA",
		"ABA",
		"ACA"
	], {
		A: "#forge:plates/stainless_steel",
		B: "thermal_extra:nitratic_igniter",
		C: Mech.T1
	}).id("mekanism:purification_chamber")

	// 炉子
	kubejs.shaped("mekanism:energized_smelter", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.STAINLESS,
		B: Mech.T1,
		C: "#forge:glass",
		D: CASING,
	}).id("mekanism:energized_smelter")

	// 压射
	kubejs.shaped("mekanism:chemical_injection_chamber", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.REINFORCED,
		B: Mech.T3,
		C: "#forge:ingots/gold",
		D: "mekanism:purification_chamber",
	}).id("mekanism:chemical_injection_chamber")

	// 灌注
	kubejs.shaped("mekanism:chemical_infuser", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.INFUSED,
		B: Mech.T2,
		C: "mekanism:basic_chemical_tank",
		D: CASING,
	}).id("mekanism:chemical_infuser")

	// 气液
	kubejs.shaped("mekanism:rotary_condensentrator", [
		"ABA",
		"CDE",
		"ABA"
	], {
		A: Ingot.STAINLESS,
		B: Mech.T1,
		C: "mekanism:basic_chemical_tank",
		E: "mekanism:basic_fluid_tank",
		D: CASING,
	}).id("mekanism:rotary_condensentrator")

	// 锯木
	kubejs.shaped("mekanism:precision_sawmill", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.STAINLESS,
		B: Mech.T1,
		C: "thermal:saw_blade",
		D: CASING,
	}).id("mekanism:precision_sawmill")

	// 溶解
	kubejs.shaped("mekanism:chemical_dissolution_chamber", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.INFUSED,
		B: Mech.T2,
		C: "mekanism:basic_chemical_tank",
		D: CASING,
	}).id("mekanism:chemical_dissolution_chamber")

	// 清洗
	kubejs.shaped("mekanism:chemical_washer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.ATOMIC,
		B: Mech.T4,
		C: "mekanism:basic_fluid_tank",
		D: CASING,
	}).id("mekanism:chemical_washer")

	// 结晶
	kubejs.shaped("mekanism:chemical_crystallizer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.ATOMIC,
		B: Mech.T4,
		C: "minecraft:diamond",
		D: CASING,
	}).id("mekanism:chemical_crystallizer")

	// 吃饭
	kubejs.shaped("mekanism:nutritional_liquifier", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.STAINLESS,
		B: Mech.T1,
		C: "cmi:pigiron_mechanism",
		D: CASING,
	}).id("mekanism:nutritional_liquifier")

	// 反物质
	kubejs.shaped("mekanism:antiprotonic_nucleosynthesizer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.ATOMIC,
		B: Mech.T4,
		C: "mekanism:pellet_antimatter",
		D: CASING,
	}).id("mekanism:antiprotonic_nucleosynthesizer")

	// 维度稳定
	kubejs.shaped("mekanism:dimensional_stabilizer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.ATOMIC,
		B: Mech.T4,
		C: "minecraft:diamond_block",
		D: CASING,
	}).id("mekanism:dimensional_stabilizer")

	// 合成
	kubejs.shaped("mekanism:formulaic_assemblicator", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.INFUSED,
		C: Mech.T2,
		B: "minecraft:crafting_table",
		D: CASING,
	}).id("mekanism:formulaic_assemblicator")

	//氧化
	kubejs.shaped("mekanism:chemical_oxidizer", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.INFUSED,
		B: Mech.T2,
		C: "mekanism:basic_chemical_tank",
		D: CASING,
	}).id("mekanism:chemical_oxidizer")

	//加压
	kubejs.shaped("mekanism:pressurized_reaction_chamber", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: Ingot.INFUSED,
		B: Mech.T2,
		C: "cmi:air_tight_mechanism",
		D: CASING,
	}).id("mekanism:pressurized_reaction_chamber")

	//同位素
	kubejs.shaped("mekanism:isotopic_centrifuge", [
		"EAE",
		"ECE",
		"BDB"
	], {
		A: Ingot.INFUSED,
		B: Mech.T2,
		C: "mekanism:basic_chemical_tank",
		D: CASING,
		E: "#forge:ingots/lead"
	}).id("mekanism:isotopic_centrifuge")
})
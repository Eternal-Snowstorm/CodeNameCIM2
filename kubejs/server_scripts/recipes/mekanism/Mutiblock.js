ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const CASING = "mekanism:steel_casing"
	const MECH = {
		T1: "cmi:basic_mekanism_mechanism",
		T2: "cmi:advanced_mekanism_mechanism",
		T3: "cmi:elite_mekanism_mechanism",
		T4: "cmi:ultimate_mekanism_mechanism",
		COPPER: "cmi:copper_mechanism",
		AIR: "cmi:air_tight_mechanism",
		BRONZE: "cmi:bronze_mechanism"
	}

	// 动态储罐
	kubejs.shaped("8x mekanism:dynamic_tank", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/stainless_steel",
		B: MECH.COPPER
	}).id("mekanism:dynamic_tank")

	kubejs.shaped("mekanism:dynamic_valve", [
		"ABA"
	], {
		A: "2x mekanism:dynamic_tank",
		B: MECH.COPPER
	}).id("mekanism:dynamic_valve")

	// 蒸馏
	kubejs.shaped("8x mekanism:thermal_evaporation_block", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/constantan",
		B: CASING
	}).id("mekanism:thermal_evaporation/block")

	kubejs.shaped("mekanism:thermal_evaporation_controller", [
		" B ",
		" A ",
		" C "
	], {
		A: "mekanism:thermal_evaporation_block",
		B: MECH.T1,
		C: MECH.BRONZE
	}).id("mekanism:thermal_evaporation/controller")

	kubejs.shaped("2x mekanism:thermal_evaporation_valve", [
		"ABA"
	], {
		A: "mekanism:thermal_evaporation_block",
		B: MECH.COPPER
	}).id("mekanism:thermal_evaporation/valve")

	// 锅炉
	kubejs.shaped("8x mekanism:boiler_casing", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/stainless_steel",
		B: MECH.BRONZE
	}).id("mekanism:boiler_casing")

	kubejs.shaped("mekanism:pressure_disperser", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:wires/steel",
		B: "ad_astra:vent"
	}).id("mekanism:pressure_disperser")

	kubejs.shaped("mekanism:boiler_valve", [
		"ABA",
		"C C",
		"ABA"
	], {
		A: "mekanism:boiler_casing",
		B: MECH.AIR,
		C: MECH.COPPER
	}).id("mekanism:boiler_valve")
	// 裂变
	kubejs.shaped("8x mekanismgenerators:fission_reactor_casing", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:ingots/lead"],
		M: MECH.AIR,
	}).id("mekanismgenerators:fission_reactor/casing")

	// 涡轮
	kubejs.shaped("8x mekanismgenerators:turbine_casing", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:ingots/osmium"],
		M: MECH.AIR,
	}).id("mekanismgenerators:turbine/casing")

	// 玻璃
	kubejs.shaped("8x mekanism:structural_glass", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:glass"],
		M: "cmi:air_tight_mechanism",
	}).id("mekanism:structural_glass")
})
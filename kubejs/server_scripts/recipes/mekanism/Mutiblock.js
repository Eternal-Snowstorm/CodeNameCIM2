ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

    // 动态储罐
	kubejs.shaped("8x mekanism:dynamic_tank", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:ingots/stainless_steel"],
		M: "cmi:air_tight_mechanism",
	}).id("mekanism:dynamic_tank")

    // 蒸馏
	kubejs.shaped("8x mekanism:thermal_evaporation_block", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:ingots/copper"],
		M: "cmi:air_tight_mechanism",
	}).id("mekanism:thermal_evaporation/block")

    // 裂变
	kubejs.shaped("8x mekanismgenerators:fission_reactor_casing", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:ingots/lead"],
		M: "cmi:air_tight_mechanism",
	}).id("mekanismgenerators:fission_reactor/casing")

    // 锅炉
	kubejs.shaped("8x mekanism:boiler_casing", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:ingots/steel"],
		M: "cmi:air_tight_mechanism",
	}).id("mekanism:boiler_casing")

    // 涡轮
	kubejs.shaped("8x mekanismgenerators:turbine_casing", [
		" A ",
		"AMA",
		" A "
	], {
		A: ["#forge:ingots/osmium"],
		M: "cmi:air_tight_mechanism",
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
ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 集装箱
	kubejs.shaped("mekanism:cardboard_box", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/dense_obsidian"
	}).id("mekanism:cardboard_box")

	// 动态储罐
	kubejs.shaped("2x mekanism:dynamic_tank", [
		"A",
		"B",
		"A"
	], {
		A: "#forge:plates/industrial_iron",
		B: "#create:fluid_tanks"
	}).id("mekanism:dynamic_tank")

	// 动态储罐阀门
	kubejs.shapeless("mekanism:dynamic_valve", [
		"mekanism:dynamic_tank",
		"fluidlogistics:fluid_hatch"
	]).id("mekanism:dynamic_valve")

	// 涡轮叶片
	kubejs.shaped("mekanismgenerators:turbine_blade", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/aluminum_alloy",
		B: "#forge:ingots/stainless_steel"
	}).id("mekanismgenerators:turbine/blade")

	// 涡轮转子
	kubejs.shaped("mekanismgenerators:turbine_rotor", [
		"BAB",
		"A A",
		"BAB"
	], {
		A: "#create:shaft",
		B: "#forge:ingots/black_tungsten_alloy"
	}).id("mekanismgenerators:turbine/rotor")
})
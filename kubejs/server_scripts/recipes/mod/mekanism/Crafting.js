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
})
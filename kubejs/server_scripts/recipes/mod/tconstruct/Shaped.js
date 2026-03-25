ServerEvents.recipes((event) => {
	let { kubejs } = event.getRecipes()

	// 冶炼炉控制器
	kubejs.shaped("tconstruct:smeltery_controller", [
		"AAA",
		"BCB",
		"DED"
	], {
		A: "tconstruct:seared_bricks",
		B: "tconstruct:seared_brick",
		C: Mechanism.COPPER.COM,
		D: "thermal:cured_rubber",
		E: Mechanism.IRON.COM
	}).id("tconstruct:smeltery/casting/seared/smeltery_controller")

	// 模具
	kubejs.shaped("4x tconstruct:pattern", [
		"AB",
		"BA"
	], {
		A: "#minecraft:planks",
		B: "#forge:rods/wooden"
	}).id("tconstruct:tables/pattern")

	kubejs.shaped("16x tconstruct:pattern", [
		"ABA",
		"B B",
		"ABA"
	], {
		A: "#minecraft:planks",
		B: "#forge:rods/wooden"
	}).id("tconstruct:tables/pattern_2")

	kubejs.shaped("16x tconstruct:pattern", [
		"ABA",
		"B B",
		"ABA"
	], {
		A: "#forge:rods/wooden",
		B: "#minecraft:planks"
	}).id("tconstruct:tables/pattern_3")
})
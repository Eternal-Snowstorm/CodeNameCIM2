ServerEvents.recipes((event) => {
	let { treetap, kubejs } = event.getRecipes()

	// 橡胶树
	treetap.tap_extract(
		"4x thermal:rubber",
		"#forge:rubberwood_logs",
		"thermal:latex"
	).processing_time(60 * 20 * 3)

	// 龙头
	kubejs.shaped("treetap:tap", [
		"ABA",
		"AAA"
	], {
		A: "#minecraft:planks",
		B: "#forge:tools/knives"
	}).id("treetap:tap").damageIngredient("#forge:tools/knives")
})
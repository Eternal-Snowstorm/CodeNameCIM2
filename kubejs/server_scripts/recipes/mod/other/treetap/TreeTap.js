ServerEvents.recipes((event) => {
	let { treetap, kubejs } = event.getRecipes()

	// 橡胶树
	treetap.tap_extract(
		"thermal:latex_bucket",
		"#forge:rubberwood_logs",
		"thermal:latex"
	).processing_time(60 * 20 * 3)

	// 龙头
	kubejs.shaped("treetap:tap", [
		"AA ",
		"AAA"
	], {
		A: "#minecraft:planks"
	}).id("treetap:tap")
})
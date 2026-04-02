ServerEvents.recipes((event) => {
	let { treetap, kubejs } = event.getRecipes()

	// 橡胶树
	treetap.tap_extract(
		"3x thermal:rubber",
		"#forge:rubberwood_logs",
		"thermal:latex"
	).processing_time(4000)

	// 龙头
	kubejs.shaped("treetap:tap", [
		"AA ",
		"AAA"
	], {
		A: "#minecraft:planks"
	}).id("treetap:tap")
})
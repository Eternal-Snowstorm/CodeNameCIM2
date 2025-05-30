ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 模具
	kubejs.shaped("4x tconstruct:pattern", [
		"AB",
		"BA"
	], {
		A: "#minecraft:planks",
		B: "#forge:rods/wooden"
	}).id("tconstruct:tables/pattern")
})
ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("4x minecraft:chest", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#minecraft:logs"
	})

	kubejs.shaped("create:crushing_wheel", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "create:andesite_alloy_block",
		B: "thermal:iron_gear",
		C: "cmi:andesite_mechanism"
	})
	
})
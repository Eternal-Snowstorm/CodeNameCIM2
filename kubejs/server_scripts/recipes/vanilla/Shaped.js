ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("4x minecraft:chest", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#minecraft:logs"
	})
})
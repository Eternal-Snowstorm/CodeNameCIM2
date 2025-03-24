ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("mekanism:cardboard_box", [
		"AAA",
		"A A",
		"AAA"
	], {
		A: "#forge:plates/obsidian"
	}).id("mekanism:cardboard_box")
})
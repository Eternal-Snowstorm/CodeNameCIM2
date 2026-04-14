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
})
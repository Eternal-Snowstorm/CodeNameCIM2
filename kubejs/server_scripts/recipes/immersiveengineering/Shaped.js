ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("immersiveengineering:hammer", [
		" A ",
		" BA",
		"B  "
	], {
		"A": "minecraft:flint",
		"B": "minecraft:stick"
	}).id("immersiveengineering:crafting/hammer")
})
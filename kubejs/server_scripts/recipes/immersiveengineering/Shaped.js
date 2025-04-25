ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped(Item.of("immersiveengineering:hammer", "{Damage:75}"), [
		" A ",
		" BA",
		"B  "
	], {
		A: "minecraft:flint",
		B: "minecraft:stick"
	})
})
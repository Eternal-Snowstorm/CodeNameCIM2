ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped(Item.of("immersiveengineering:hammer", "{Damage:75}"), [
		" AB",
		" CA",
		"C  "
	], {
		A: "minecraft:flint",
		B: "#forge:string",
		C: "#forge:rods/wooden"
	})
})
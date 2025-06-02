ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.crushing([
		"minecraft:netherrack",
		Item.of("create:cinder_flour").withChance(0.2)
	], "#forge:netherrack")
})
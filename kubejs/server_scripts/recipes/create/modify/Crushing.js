ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.crushing([
		"minecraft:netherrack",
		Item.of("create:cinder_flour").withChance(0.2)
	], "#forge:netherrack")

	create.milling([
		"ae2:certus_quartz_dust",
		Item.of("ae2:certus_quartz_dust", 2).withChance(0.5)
	], "ae2:certus_quartz_crystal"
	).id("create:milling/compat/ae2/certus_quartz")
})
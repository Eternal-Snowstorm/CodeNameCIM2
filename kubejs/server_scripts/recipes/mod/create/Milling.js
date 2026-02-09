ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.milling("thermal_extra:amethyst_dust", [
		"minecraft:amethyst_shard"
	])

	create.milling([
		"mekanism:dust_coal",
		Item.of("thermal:sulfur_dust").withChance(0.15)
	], "minecraft:coal")
	create.crushing([
		"mekanism:dust_coal",
		Item.of("2x mekanism:dust_coal").withChance(0.5),
		Item.of("thermal:sulfur_dust").withChance(0.3)
	], "minecraft:coal")

	create.crushing([
		Item.of("minecraft:obsidian"),
		Item.of("mekanism:dust_obsidian").withChance(0.5)
	], "minecraft:obsidian")

	create.milling("cmi:lime_dust", [
		"create:limestone"
	])
})
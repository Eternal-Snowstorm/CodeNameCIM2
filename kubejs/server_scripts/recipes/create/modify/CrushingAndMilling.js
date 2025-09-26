ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.milling("mekanism:dust_coal", [
		"minecraft:coal"
	])
	create.milling("thermal_extra:amethyst_dust", [
		"minecraft:amethyst_shard"
	])

	create.milling("9x mekanism:dust_coal", [
		"#forge:storage_blocks/coal"
	])

	create.crushing([
		"mekanism:dust_coal",
		Item.of("2x mekanism:dust_coal").withChance(0.5)
	], [
		"minecraft:coal"
	])

	create.crushing([
		"9x mekanism:dust_coal",
		Item.of("2x mekanism:dust_coal").withChance(0.5)
	], [
		"#forge:storage_blocks/coal"
	])

	create.crushing([
		Item.of("minecraft:obsidian"),
		Item.of("mekanism:dust_obsidian").withChance(0.5)
	], [
		"minecraft:obsidian",
	])

	create.milling("cmi:lime_dust", [
		"create:limestone"
	])
})
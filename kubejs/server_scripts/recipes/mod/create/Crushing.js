ServerEvents.recipes((event) => {
	let { create } = event.getRecipes()

	create.crushing([
		"minecraft:netherrack",
		Item.of("create:cinder_flour").withChance(0.2)
	], "#forge:netherrack")

	create.crushing([
		"2x ae2:certus_quartz_crystal",
		Item.of("ae2:certus_quartz_crystal").withChance(0.25),
		Item.of("create:experience_nugget").withChance(0.75),
		Item.of("minecraft:cobblestone").withChance(0.12)
	], "cmi:certus_quartz_ore")

	create.crushing([
		"2x ae2:certus_quartz_crystal",
		Item.of("ae2:certus_quartz_crystal").withChance(0.25),
		Item.of("create:experience_nugget").withChance(0.75),
		Item.of("minecraft:cobbled_deepslate").withChance(0.12)
	], "cmi:deepslate_certus_quartz_ore")

	// 硫磺粉
	create.crushing([
		"thermal:sulfur_dust",
		Item.of("2x thermal:sulfur_dust").withChance(0.1),
	], [
		"#forge:gems/sulfur"
	])

	// 安山岩粉
	create.crushing("4x cmi:andesite_dust", [
		"#create:stone_types/andesite"
	])

	create.crushing("mekanism:dust_charcoal", [
		"minecraft:charcoal"
	]).id("create:crushing/charcoal")

	create.crushing([
		"mekanism:dust_coal",
		Item.of("2x mekanism:dust_coal").withChance(0.5),
		Item.of("thermal:sulfur_dust").withChance(0.3)
	], "minecraft:coal")

	create.crushing([
		Item.of("minecraft:obsidian"),
		Item.of("mekanism:dust_obsidian").withChance(0.5)
	], "minecraft:obsidian")
})
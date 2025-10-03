ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.crushing([
		"minecraft:netherrack",
		Item.of("create:cinder_flour").withChance(0.2)
	], "#forge:netherrack")

	create.milling("minecraft:sugar", [
		"minecraft:sugar_cane"
	])

	create.milling(Item.of("minecraft:sugar").withChance(0.5), [
		"minecraft:beetroot"
	])

	create.milling([
		"ae2:certus_quartz_dust",
		Item.of("ae2:certus_quartz_dust", 2).withChance(0.5)
	], "ae2:certus_quartz_crystal")
		.id("create:milling/compat/ae2/certus_quartz")

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

	// 焦煤粉
	create.milling([
		"immersiveengineering:dust_coke",
	], [
		"#forge:coal_coke"
	])

	// 木炭粉
	create.milling([
		"mekanism:dust_charcoal",
	], [
		"minecraft:charcoal"
	]).id("create:milling/charcoal")

	create.crushing([
		"mekanism:dust_charcoal",
	], [
		"minecraft:charcoal"
	]).id("create:milling/charcoal")
})
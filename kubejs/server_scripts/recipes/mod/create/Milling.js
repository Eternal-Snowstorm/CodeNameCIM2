ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.milling(Item.of("minecraft:sugar").withChance(0.5), [
		"minecraft:beetroot"
	])

	create.milling([
		"ae2:certus_quartz_dust",
		Item.of("ae2:certus_quartz_dust", 2).withChance(0.5)
	], "ae2:certus_quartz_crystal")
		.id("create:milling/compat/ae2/certus_quartz")

	create.milling("thermal_extra:amethyst_dust", [
		"minecraft:amethyst_shard"
	])

	create.milling([
		"mekanism:dust_coal",
		Item.of("thermal:sulfur_dust").withChance(0.15)
	], "minecraft:coal")

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

	// 安山岩粉
	create.milling([
		"2x cmi:andesite_dust",
		Item.of("cmi:andesite_dust", 2).withChance(0.5)
	], "#create:stone_types/andesite")

	// 糖
	create.milling(
		"minecraft:sugar",
		"minecraft:sugar_cane"
	).id("create:milling/sugar_cane")

	// 青金石粉
	create.milling([
		"thermal:lapis_dust"
	], [
		"minecraft:lapis_lazuli"
	]).id("create:milling/lapis_lazuli")

	// 青金石粉进一步磨碎
	create.milling([
		Item.of("minecraft:blue_dye", 2),
		Item.of("minecraft:blue_dye").withChance(0.1)
	], [
		"thermal:lapis_dust"
	])
})
ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.milling("mekanism:dust_coal", [
		"minecraft:coal"
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
})
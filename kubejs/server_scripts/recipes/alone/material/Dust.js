ServerEvents.recipes((event) => {
	let { create, mekanism, thermal } = event.recipes

	create.crushing([
		Item.of("4x cmi:end_stone_dust"),
		Item.of("3x cmi:end_stone_dust").withChance(0.5),
		Item.of("5x cmi:end_stone_dust").withChance(0.25),
		Item.of("minecraft:end_stone").withChance(0.1)
	], [
		"#forge:end_stones"
	])

	create.milling([
		Item.of("cmi:end_stone_dust"),
		Item.of("4x cmi:end_stone_dust").withChance(0.5),
		Item.of("3x cmi:end_stone_dust").withChance(0.25),
	], [
		"#forge:end_stones"
	])

	thermal.pulverizer([
		Item.of("4x cmi:end_stone_dust"),
		Item.of("3x cmi:end_stone_dust").withChance(0.5),
		Item.of("5x cmi:end_stone_dust").withChance(0.25),
		Item.of("minecraft:end_stone").withChance(0.1)
	], [
		"#forge:end_stones"
	]).energy(4000)

	mekanism.crushing("6x cmi:end_stone_dust", [
		"#forge:end_stones"
	])

	event.custom({
		"type": "immersiveengineering:crusher",
		"energy": 1600,
		"input": {
			"tag": "forge:end_stones"
		},
		"result": {
			"count": 6,
			"item": "cmi:end_stone_dust"
		},
		"secondaries": [
			{
				"chance": 0.5,
				"output": {
					"count": 3,
					"item": "cmi:end_stone_dust"
				}
			}
		]
	})
})
ServerEvents.recipes((event) => {
	let { create, vintageimprovements, tconstruct } = event.recipes

	// 石灰粉
	create.crushing([
		Item.of("2x cmi:lime_dust"),
		Item.of("cmi:lime_dust").withChance(0.5),
		Item.of("cmi:lime_dust").withChance(0.5),
	], [
		["#create:stone_types/limestone", "minecraft:pointed_dripstone"]
	])

	create.milling("2x cmi:lime_dust", [
		["#create:stone_types/limestone", "minecraft:pointed_dripstone"]
	])

	// 熔融铸铁
	vintageimprovements.pressurizing(Fluid.of("cmi:molten_cast_iron", 90), [
		["#create:crushed_raw_materials/iron", "#forge:dusts/iron"],
		"#forge:dusts/coal_coke"
	]).heated()

	// 精炼铁方坯
	event.custom({
		"type": "immersiveindustry:crucible",
		"inputs": [
			[
				Ingredient.of("#forge:ingots/cast_iron").toJson(),
				Ingredient.of("#forge:dusts/cast_iron").toJson()
			],
			Ingredient.of("#forge:dusts/lime").toJson()
		],
		"result": Item.of("cmi:refined_iron_bloom").toJson(),
		"time": 1200,
		"temperature": 1370
	})

	// 熔融钢
	vintageimprovements.pressurizing(Fluid.of("tconstruct:molten_steel", 90), [
		"cmi:refined_iron_bloom"
	]).processingTime(10 * 20).superheated()
})
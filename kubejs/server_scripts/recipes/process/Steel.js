ServerEvents.recipes((event) => {
	let { create, vintageimprovements, tconstruct } = event.recipes

	// 熔融铸铁
	vintageimprovements.pressurizing(
		Fluid.of("cmi:molten_cast_iron", 90), [
		Fluid.of("tconstruct:molten_iron", 90),
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
		"time": 15 * 20,
		"temperature": 1370
	})

	// 熔融钢
	vintageimprovements.pressurizing(
		Fluid.of("tconstruct:molten_steel", 90), [
		"cmi:refined_iron_bloom"
	]).processingTime(10 * 20).superheated()
})
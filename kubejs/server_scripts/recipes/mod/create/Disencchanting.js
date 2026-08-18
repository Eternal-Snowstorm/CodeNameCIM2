ServerEvents.recipes((event) => {
	event.custom({
		"type": "create_enchantment_industry:grinding",
		"ingredients": [
			Ingredient.of("cmi:enchanted_mechanism").toJson()
		],
		"results": [
			Fluid.of("create_enchantment_industry:experience", 500).toJson(),
			Item.of("cmi:enchanted_mechanism").toJson()
		]
	})
})
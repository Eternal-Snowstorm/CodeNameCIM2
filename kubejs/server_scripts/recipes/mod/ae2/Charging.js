ServerEvents.recipes((event) => {
	// 充能紫水晶
	event.custom({
		"type": "ae2:charger",
		"ingredient": Ingredient.of("#forge:gems/amethyst").toJson(),
		"result": Item.of(Ingredient.getFirstItemId("#forge:gems/charged_amethyst")).toJson()
	})
})
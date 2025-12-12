ServerEvents.recipes((event) => {

	// 火箭框架
	event.custom({
		"type": "ad_astra:nasa_workbench",
		"ingredients": [
			Ingredient.of("#forge:treated_wood").toJson(),
			Ingredient.of("immersiveengineering:treated_scaffold").toJson(),
			Ingredient.of("immersiveengineering:treated_scaffold").toJson(),
			Ingredient.of("immersiveengineering:treated_scaffold").toJson(),
			Ingredient.of("immersiveengineering:treated_scaffold").toJson(),
			Ingredient.of("immersiveengineering:treated_scaffold").toJson(),
			Ingredient.of("immersiveengineering:treated_scaffold").toJson(),
			Ingredient.of("immersiveengineering:treated_fence").toJson(),
			Ingredient.of("immersiveengineering:wooden_barrel").toJson(),
			Ingredient.of("immersiveengineering:wooden_barrel").toJson(),
			Ingredient.of("immersiveengineering:treated_fence").toJson(),
			Ingredient.of("immersiveengineering:treated_fence").toJson(),
			Ingredient.of("immersiveengineering:treated_scaffold").toJson(),
			Ingredient.of("immersiveengineering:treated_fence").toJson()
		],
		"result": {
			"count": 1,
			"id": "cmi:rocket_pattern"
		}
	})
})
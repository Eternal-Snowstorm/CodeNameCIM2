ServerEvents.recipes((event) => {

	let metalTier = [
		"tungsten_steel",
		"desh",
		"ostrum",
		"calorite"
	]

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

	// 火箭
	for (let i = 1; i <= 4; i++) {

		let metalPlate = `#forge:plates/${metalTier[i - 1]}`
		event.custom({
			"type": "ad_astra:nasa_workbench",
			"ingredients": [
				Ingredient.of(`cmi:tier_${i.toString()}_rocket_frame`).toJson(),
				Ingredient.of(metalPlate).toJson(),
				Ingredient.of(metalPlate).toJson(),
				Ingredient.of(metalPlate).toJson(),
				Ingredient.of(metalPlate).toJson(),
				Ingredient.of(metalPlate).toJson(),
				Ingredient.of(metalPlate).toJson(),
				Ingredient.of(`#cmi:rocket_fins/tier_${i.toString()}`).toJson(),
				Ingredient.of(`#create:mechanisms/tier_${i.toString()}_aviation`).toJson(),
				Ingredient.of(`#create:mechanisms/tier_${i.toString()}_aviation`).toJson(),
				Ingredient.of(`#cmi:rocket_fins/tier_${i.toString()}`).toJson(),
				Ingredient.of(`#cmi:rocket_fins/tier_${i.toString()}`).toJson(),
				Ingredient.of(`cmi:tier_${i.toString()}_aviation_complete_cell`).toJson(),
				Ingredient.of(`#cmi:rocket_fins/tier_${i.toString()}`).toJson()
			],
			"result": {
				"count": 1,
				"id": `ad_astra:tier_${i.toString()}_rocket`
			}
		})
	}
})
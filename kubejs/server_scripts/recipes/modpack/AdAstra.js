ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	event.custom({
		"type": "ad_astra:alloying",
		"cookingtime": 100,
		"energy": 20,
		"ingredients": [
			Ingredient.of("#forge:storage_blocks/iron").toJson(),
			Ingredient.of("#forge:coal_coke").toJson()
		],
		"result": {
			"count": 1,
			"id": "tconstruct:steel_block"
		}
	})

	// Tier1
	create.sequenced_assembly("cmi:tier_1_rocket_frame", [
		"cmi:rocket_patten"
	], [
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"#forge:storage_blocks/steel"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"#forge:storage_blocks/steel"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:incomplete_tier_1_rocket_frame")

	// Tier2
	create.sequenced_assembly("cmi:tier_2_rocket_frame", [
		"cmi:rocket_patten"
	], [
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"#forge:storage_blocks/desh"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"#forge:storage_blocks/desh"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:incomplete_tier_2_rocket_frame")

	// Tier3
	create.sequenced_assembly("cmi:tier_3_rocket_frame", [
		"cmi:rocket_patten"
	], [
		create.deploying("cmi:incomplete_tier_3_rocket_frame", [
			"cmi:incomplete_tier_3_rocket_frame",
			"#forge:storage_blocks/ostrum"
		]),
		create.deploying("cmi:incomplete_tier_3_rocket_frame", [
			"cmi:incomplete_tier_3_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_3_rocket_frame", [
			"cmi:incomplete_tier_3_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_3_rocket_frame", [
			"cmi:incomplete_tier_3_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_3_rocket_frame", [
			"cmi:incomplete_tier_3_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_3_rocket_frame", [
			"cmi:incomplete_tier_3_rocket_frame",
			"#forge:storage_blocks/ostrum"
		]),
		create.deploying("cmi:incomplete_tier_3_rocket_frame", [
			"cmi:incomplete_tier_3_rocket_frame",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:incomplete_tier_3_rocket_frame")

	// Tier4
	create.sequenced_assembly("cmi:tier_4_rocket_frame", [
		"cmi:rocket_patten"
	], [
		create.deploying("cmi:incomplete_tier_4_rocket_frame", [
			"cmi:incomplete_tier_4_rocket_frame",
			"#forge:storage_blocks/calorite"
		]),
		create.deploying("cmi:incomplete_tier_4_rocket_frame", [
			"cmi:incomplete_tier_4_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_4_rocket_frame", [
			"cmi:incomplete_tier_4_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_4_rocket_frame", [
			"cmi:incomplete_tier_4_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_4_rocket_frame", [
			"cmi:incomplete_tier_4_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_4_rocket_frame", [
			"cmi:incomplete_tier_4_rocket_frame",
			"#forge:storage_blocks/calorite"
		]),
		create.deploying("cmi:incomplete_tier_4_rocket_frame", [
			"cmi:incomplete_tier_4_rocket_frame",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:incomplete_tier_4_rocket_frame")

	// Tier1 r
	create.sequenced_assembly("ad_astra:tier_1_rocket", [
		"cmi:tier_1_rocket_frame"
	], [
		create.deploying("cmi:incomplete_tier_1_rocket", [
			"cmi:incomplete_tier_1_rocket",
			"cmi:tier_1_aviation_mechanism"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket", [
			"cmi:incomplete_tier_1_rocket",
			"ad_astra:steel_engine"
		]),
		vintageimprovements.laser_cutting("cmi:incomplete_tier_1_rocket", [
			"cmi:incomplete_tier_1_rocket"
		]).energy(100)
	]).loops(1).transitionalItem("cmi:incomplete_tier_1_rocket")

	// Tier2 r
	create.sequenced_assembly("ad_astra:tier_2_rocket", [
		"cmi:tier_2_rocket_frame"
	], [
		create.deploying("cmi:incomplete_tier_2_rocket", [
			"cmi:incomplete_tier_2_rocket",
			"cmi:tier_2_aviation_mechanism"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket", [
			"cmi:incomplete_tier_2_rocket",
			"ad_astra:desh_engine"
		]),
		vintageimprovements.laser_cutting("cmi:incomplete_tier_2_rocket", [
			"cmi:incomplete_tier_2_rocket"
		]).energy(100)
	]).loops(1).transitionalItem("cmi:incomplete_tier_2_rocket")

	// Tier3 r
	create.sequenced_assembly("ad_astra:tier_3_rocket", [
		"cmi:tier_3_rocket_frame"
	], [
		create.deploying("cmi:incomplete_tier_3_rocket", [
			"cmi:incomplete_tier_3_rocket",
			"cmi:tier_3_aviation_mechanism"
		]),
		create.deploying("cmi:incomplete_tier_3_rocket", [
			"cmi:incomplete_tier_3_rocket",
			"ad_astra:ostrum_engine"
		]),
		vintageimprovements.laser_cutting("cmi:incomplete_tier_3_rocket", [
			"cmi:incomplete_tier_3_rocket"
		]).energy(100)
	]).loops(1).transitionalItem("cmi:incomplete_tier_3_rocket")

	// Tier4 r
	create.sequenced_assembly("ad_astra:tier_4_rocket", [
		"cmi:tier_4_rocket_frame"
	], [
		create.deploying("cmi:incomplete_tier_4_rocket", [
			"cmi:incomplete_tier_4_rocket",
			"cmi:tier_4_aviation_mechanism"
		]),
		create.deploying("cmi:incomplete_tier_4_rocket", [
			"cmi:incomplete_tier_4_rocket",
			"ad_astra:calorite_engine"
		]),
		vintageimprovements.laser_cutting("cmi:incomplete_tier_4_rocket", [
			"cmi:incomplete_tier_4_rocket"
		]).energy(100)
	]).loops(1).transitionalItem("cmi:incomplete_tier_4_rocket")

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
			"id": "cmi:rocket_patten"
		}
	})
})
ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes

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
		"cmi:rocket_pattern"
	], [
		create.deploying("cmi:tungsten_steel_block", [
			"cmi:tungsten_steel_block",
			"#forge:storage_blocks/tungsten_steel"
		]),
		create.deploying("cmi:tungsten_steel_block", [
			"cmi:tungsten_steel_block",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:tungsten_steel_block", [
			"cmi:tungsten_steel_block",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:tungsten_steel_block", [
			"cmi:tungsten_steel_block",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:tungsten_steel_block", [
			"cmi:tungsten_steel_block",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:tungsten_steel_block", [
			"cmi:tungsten_steel_block",
			"#forge:storage_blocks/tungsten_steel"
		]),
		create.deploying("cmi:tungsten_steel_block", [
			"cmi:tungsten_steel_block",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:tungsten_steel_block")

	// Tier2
	create.sequenced_assembly("cmi:tier_2_rocket_frame", [
		"cmi:rocket_pattern"
	], [
		create.deploying("ad_astra:desh_pillar", [
			"ad_astra:desh_pillar",
			"#forge:storage_blocks/desh"
		]),
		create.deploying("ad_astra:desh_pillar", [
			"ad_astra:desh_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:desh_pillar", [
			"ad_astra:desh_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:desh_pillar", [
			"ad_astra:desh_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:desh_pillar", [
			"ad_astra:desh_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:desh_pillar", [
			"ad_astra:desh_pillar",
			"#forge:storage_blocks/desh"
		]),
		create.deploying("ad_astra:desh_pillar", [
			"ad_astra:desh_pillar",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:rocket_pattern")

	// Tier3
	create.sequenced_assembly("cmi:tier_3_rocket_frame", [
		"cmi:rocket_pattern"
	], [
		create.deploying("ad_astra:ostrum_pillar", [
			"ad_astra:ostrum_pillar",
			"#forge:storage_blocks/ostrum"
		]),
		create.deploying("ad_astra:ostrum_pillar", [
			"ad_astra:ostrum_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:ostrum_pillar", [
			"ad_astra:ostrum_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:ostrum_pillar", [
			"ad_astra:ostrum_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:ostrum_pillar", [
			"ad_astra:ostrum_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:ostrum_pillar", [
			"ad_astra:ostrum_pillar",
			"#forge:storage_blocks/ostrum"
		]),
		create.deploying("ad_astra:ostrum_pillar", [
			"ad_astra:ostrum_pillar",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("ad_astra:ostrum_pillar")

	// Tier4
	create.sequenced_assembly("cmi:tier_4_rocket_frame", [
		"cmi:rocket_pattern"
	], [
		create.deploying("ad_astra:calorite_pillar", [
			"ad_astra:calorite_pillar",
			"#forge:storage_blocks/calorite"
		]),
		create.deploying("ad_astra:calorite_pillar", [
			"ad_astra:calorite_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:calorite_pillar", [
			"ad_astra:calorite_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:calorite_pillar", [
			"ad_astra:calorite_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:calorite_pillar", [
			"ad_astra:calorite_pillar",
			"ad_astra:rocket_fin"
		]),
		create.deploying("ad_astra:calorite_pillar", [
			"ad_astra:calorite_pillar",
			"#forge:storage_blocks/calorite"
		]),
		create.deploying("ad_astra:calorite_pillar", [
			"ad_astra:calorite_pillar",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("ad_astra:calorite_pillar")

	// Tier1 r
	create.sequenced_assembly("ad_astra:tier_1_rocket", [
		"cmi:tier_1_rocket_frame"
	], [
		create.deploying("cmi:tier_1_rocket_frame", [
			"cmi:tier_1_rocket_frame",
			"cmi:tier_1_aviation_mechanism"
		]),
		create.deploying("cmi:tier_1_rocket_frame", [
			"cmi:tier_1_rocket_frame",
			"ad_astra:steel_engine"
		]),
		vintageimprovements.laser_cutting("cmi:tier_1_rocket_frame", [
			"cmi:tier_1_rocket_frame"
		]).energy(1000).maxChargeRate(100)
	]).loops(1).transitionalItem("cmi:tier_1_rocket_frame")

	// Tier2 r
	create.sequenced_assembly("ad_astra:tier_2_rocket", [
		"cmi:tier_2_rocket_frame"
	], [
		create.deploying("cmi:tier_2_rocket_frame", [
			"cmi:tier_2_rocket_frame",
			"cmi:tier_2_aviation_mechanism"
		]),
		create.deploying("cmi:tier_2_rocket_frame", [
			"cmi:tier_2_rocket_frame",
			"ad_astra:desh_engine"
		]),
		vintageimprovements.laser_cutting("cmi:tier_2_rocket_frame", [
			"cmi:tier_2_rocket_frame"
		]).energy(1000).maxChargeRate(100)
	]).loops(1).transitionalItem("cmi:tier_2_rocket_frame")

	// Tier3 r
	create.sequenced_assembly("ad_astra:tier_3_rocket", [
		"cmi:tier_3_rocket_frame"
	], [
		create.deploying("cmi:tier_3_rocket_frame", [
			"cmi:tier_3_rocket_frame",
			"cmi:tier_3_aviation_mechanism"
		]),
		create.deploying("cmi:tier_3_rocket_frame", [
			"cmi:tier_3_rocket_frame",
			"ad_astra:ostrum_engine"
		]),
		vintageimprovements.laser_cutting("cmi:tier_3_rocket_frame", [
			"cmi:tier_3_rocket_frame"
		]).energy(1000).maxChargeRate(100)
	]).loops(1).transitionalItem("cmi:tier_3_rocket_frame")

	// Tier4 r
	create.sequenced_assembly("ad_astra:tier_4_rocket", [
		"cmi:tier_4_rocket_frame"
	], [
		create.deploying("cmi:tier_4_rocket_frame", [
			"cmi:tier_4_rocket_frame",
			"cmi:tier_4_aviation_mechanism"
		]),
		create.deploying("cmi:tier_4_rocket_frame", [
			"cmi:tier_4_rocket_frame",
			"ad_astra:calorite_engine"
		]),
		vintageimprovements.laser_cutting("cmi:tier_4_rocket_frame", [
			"cmi:tier_4_rocket_frame"
		]).energy(1000).maxChargeRate(100)
	]).loops(1).transitionalItem("cmi:tier_4_rocket_frame")
})
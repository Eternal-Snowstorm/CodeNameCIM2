ServerEvents.recipes((event) => {
	// 量子缠绕态奇点
	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "explosion"
		},
		"ingredients": [
			Item.of("ae2:singularity").toJson(),
			Item.of("cmi:ender_mechanism").toJson()
		],
		"result": Item.of("ae2:quantum_entangled_singularity", 4).toJson()
	}).id("ae2:transform/entangled_singularity")

	// 砖泥
	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "fluid",
			"tag": "minecraft:water"
		},
		"ingredients": [
			Ingredient.of("#minecraft:sand").toJson(),
			Ingredient.of("#forge:clay").toJson(),
			Item.of("minecraft:gravel").toJson()
		],
		"result": Item.of("tconstruct:grout", 2).toJson()
	}).id("cmi:ae2/transform/tconstruct/grout")

	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "fluid",
			"tag": "minecraft:water"
		},
		"ingredients": [
			Ingredient.of("#minecraft:sand").toJson(),
			Ingredient.of("#forge:storage_blocks/clay").toJson(),
			Item.of("minecraft:gravel").toJson()
		],
		"result": Item.of("tconstruct:grout", 8).toJson()
	}).id("cmi:ae2/transform/tconstruct/grout2")

	// 下界砖泥
	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "fluid",
			"tag": "tconstruct:liquid_soul"
		},
		"ingredients": [
			[
				Item.of("minecraft:soul_sand").toJson(),
				Item.of("minecraft:soul_soil").toJson()
			],
			Item.of("minecraft:magma_cream").toJson(),
			Item.of("minecraft:gravel").toJson()
		],
		"result": Item.of("tconstruct:nether_grout", 2).toJson()
	}).id("cmi:ae2/transform/tconstruct/nether_grout")

	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "fluid",
			"tag": "tconstruct:liquid_soul"
		},
		"ingredients": [
			[
				Item.of("minecraft:soul_sand").toJson(),
				Item.of("minecraft:soul_soil").toJson()
			],
			Item.of("minecraft:magma_block").toJson(),
			Item.of("minecraft:gravel").toJson()
		],
		"result": Item.of("tconstruct:nether_grout", 8).toJson()
	}).id("cmi:ae2/transform/tconstruct/nether_grout2")
})
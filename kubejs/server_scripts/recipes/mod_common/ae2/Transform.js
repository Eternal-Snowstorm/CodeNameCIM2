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
	}).id("tconstruct:smeltery/seared/grout")
})
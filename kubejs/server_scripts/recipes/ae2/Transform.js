ServerEvents.recipes((event) => {
	// 量子缠绕态奇点
	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "explosion"
		},
		"ingredients": [
			Ingredient.of("ae2:singularity").toJson(),
			Ingredient.of("cmi:ender_mechanism").toJson()
		],
		"result": Item.of("ae2:quantum_entangled_singularity").toJson()
	}).id("ae2:transform/entangled_singularity")
})
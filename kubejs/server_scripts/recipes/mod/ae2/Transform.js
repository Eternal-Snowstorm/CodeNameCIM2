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
})
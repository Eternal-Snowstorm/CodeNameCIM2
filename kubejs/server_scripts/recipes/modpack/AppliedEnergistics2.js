ServerEvents.recipes((event) => {
	// 充能紫水晶
	event.custom(aeCharger("#forge:gems/charged_amethyst", "#forge:gems/amethyst"))

	event.custom({
		"type": "ae2:transform",
		"circumstance": {
			"type": "explosion"
		},
		"ingredients": [
			{
				"item": "ae2:singularity"
			},
			{
				"tag": "create:mechanisms/ender"
			}
		],
		"result": {
			"count": 2,
			"item": "ae2:quantum_entangled_singularity"
		}
	}).id("ae2:transform/entangled_singularity")
})
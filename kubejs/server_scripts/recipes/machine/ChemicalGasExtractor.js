ServerEvents.recipes((event) => {
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:chemical_gas_extractor`,
		"time": 1,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:gas",
				"mode": "output",
				"chemical": "mekanism:antimatter",
				"amount": 500
			},
			{
				"type": "custommachinery:dimension",
				"filter": "minecraft:the_nether"
			}
		]
	})
})
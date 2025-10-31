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
				"chemical": "cmi:sulfide_gas_mixture",
				"amount": 2
			},
			{
				"type": "custommachinery:dimension",
				"filter": "minecraft:the_nether"
			}
		]
	})

	// 氡气
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:chemical_gas_extractor`,
		"time": 1,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:gas",
				"mode": "output",
				"chemical": "cmi:radon",
				"amount": 6
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"A"
					],
					[
						"m"
					]
				],
				"keys": {
					"A": "alexscaves:geothermal_vent[smoke_type=3]"
				}
			},
			{
				"type": "custommachinery:dimension",
				"filter": "cmi:dionysus"
			}
		]
	})

	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:chemical_gas_extractor`,
		"time": 1,
		"hidden": true,
		"requirements": [
			{
				"type": "custommachinery:gas",
				"mode": "output",
				"chemical": "cmi:radon",
				"amount": 4
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"A"
					],
					[
						"m"
					]
				],
				"keys": {
					"A": "alexscaves:geothermal_vent[smoke_type=2]"
				}
			},
			{
				"type": "custommachinery:dimension",
				"filter": "cmi:dionysus"
			}
		]
	})

	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:chemical_gas_extractor`,
		"time": 1,
		"hidden": true,
		"requirements": [
			{
				"type": "custommachinery:gas",
				"mode": "output",
				"chemical": "cmi:radon",
				"amount": 2
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"A"
					],
					[
						"m"
					]
				],
				"keys": {
					"A": "alexscaves:geothermal_vent[smoke_type=1]"
				}
			},
			{
				"type": "custommachinery:dimension",
				"filter": "cmi:dionysus"
			}
		]
	})
})
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
	}).id("cmi:chemical_gas_extractor/sulfide_gas_mixture")

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
					"A": "alexscaves:geothermal_vent[smoke_type=3]"
				}
			},
			{
				"type": "custommachinery:dimension",
				"filter": "cmi:dionysus"
			}
		]
	}).id("cmi:chemical_gas_extractor/radon")

	// 汞
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:chemical_gas_extractor`,
		"time": 1,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:gas",
				"mode": "output",
				"chemical": "cmi:mercury",
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
					"A": "cmi:mercury_geothermal_vent[smoke_type=3]"
				}
			},
			{
				"type": "custommachinery:dimension",
				"filter": "cmi:mercury"
			}
		]
	}).id("cmi:chemical_gas_extractor/mercury")
})
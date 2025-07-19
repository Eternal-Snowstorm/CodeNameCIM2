ServerEvents.recipes((event) => {
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:steam_boiler`,
		"time": 1,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:fluid",
				"mode": "input",
				"fluid": "minecraft:water",
				"amount": 1
			},
			{
				"type": "custommachinery:fluid",
				"mode": "output",
				"fluid": "cmi:steam",
				"amount": 2
			},
			{
				"type": "custommachinery:fuel",
				"amount": 1
			}
		]
	})

	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:large_steam_boiler`,
		"time": 1,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:fluid",
				"mode": "input",
				"fluid": "minecraft:water",
				"amount": 1
			},
			{
				"type": "custommachinery:fluid",
				"mode": "output",
				"fluid": "cmi:steam",
				"amount": 2
			},
			{
				"type": "custommachinery:fuel",
				"amount": 1
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"AAA",
						"DAD",
						"AAA"
					],
					[
						"BBB",
						"B B",
						"BmB"
					],
					[
						"BBB",
						"B B",
						"BBB"
					],
					[
						"AAA",
						"AEA",
						"AAA"
					]
				],
				"keys": {
					"B": "cmi:bronze_casing",
					"A": "tconstruct:seared_bricks",
					"E": "minecraft:barrel",
					"D": "tconstruct:seared_fuel_tank"
				}
				// "jei": false
			}
		]
	})
})
ServerEvents.recipes((event) => {
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:simple_centrifuge`,
		"time": 200,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "#forge:sand",
				"amount": 1
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "#forge:sand",
				"amount": 1
			},
			{
				"type": "custommachinery:fluid",
				"mode": "input",
				"fluid": "minecraft:water",
				"amount": 500
			},
			{
				"type": "custommachinery:fluid",
				"mode": "output",
				"fluid": "minecraft:water",
				"amount": 500
			},
			{
				"type": "custommachinery:item",
				"mode": "output",
				"item": "minecraft:clay_ball",
				"amount": 4
			},
			{
				"type": "custommachinery:contraption",
				"mode": "input",
				"speed": 64,
				"stress": 4,
				"scaling": true
			}
		]
	})
})
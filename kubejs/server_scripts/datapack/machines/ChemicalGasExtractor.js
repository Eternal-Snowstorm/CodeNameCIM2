ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/chemical_gas_extractor.json`, {
		"name": "block.cmi.chemical_gas_extractor",
		"appearance": {
			"idle": {
				"block": "cmi:machine/chemical_gas_extractor/off"
			},
			"running": {
				"block": "cmi:machine/chemical_gas_extractor/on"
			},
			"errored": {
				"block": "cmi:machine/chemical_gas_extractor/off"
			},
			"paused": {
				"block": "cmi:machine/chemical_gas_extractor/off"
			},
			"interaction_sound": "minecraft:furnace",
			"requires_tool": true,
			"mining_level": "minecraft:needs_diamond_tool"
		},
		"components": [
			{
				"type": "custommachinery:gas",
				"mode": "output",
				"capacity": 100000,
				"id": "output",
				"maxInput": 1000,
				"maxOutput": 2000,
				"config": {
					"default": "both"
				}
			}
		],
		// "gui": [
		// 	{
		// 		"type": "custommachinery:text",
		// 		"text": "machine.cmi.chemical_gas_extractor",
		// 		"x": 110,
		// 		"y": 5
		// 	},
		// 	{
		// 		"type": "custommachinery:texture",
		// 		"texture": "custommachinery:textures/gui/base_background.png",
		// 		"x": 0,
		// 		"y": 0
		// 	},
		// 	{
		// 		"type": "custommachinery:player_inventory",
		// 		"x": 47,
		// 		"y": 80
		// 	},
		// 	{
		// 		"type": "custommachinery:gas",
		// 		"id": "output",
		// 		"x": 119,
		// 		"y": 30
		// 	}
		// ],
		"jei": [
			{
				"type": "custommachinery:text",
				"text": "machine.cmi.chemical_gas_extractor",
				"x": 110,
				"y": 5
			},
			{
				"type": "custommachinery:texture",
				"texture": "custommachinery:textures/gui/base_background.png",
				"x": 0,
				"y": 0
			},
			{
				"type": "custommachinery:player_inventory",
				"x": 47,
				"y": 80
			},
			{
				"type": "custommachinery:gas",
				"id": "output",
				"x": 119,
				"y": 30
			}
		]
	})
})
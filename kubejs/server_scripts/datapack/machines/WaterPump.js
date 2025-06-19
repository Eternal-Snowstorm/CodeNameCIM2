ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/water_pump.json`, {
		"name": "block.cmi.water_pump",
		"appearance": {
			"idle": {
				"block": "cmi:machine/water_pump/off"
			},
			"running": {
				"block": "cmi:machine/water_pump/on"
			},
			"errored": {
				"block": "cmi:machine/water_pump/off"
			},
			"paused": {
				"block": "cmi:machine/water_pump/off"
			},
			"interaction_sound": "minecraft:oak_planks",
			"requires_tool": true,
			"mining_level": "minecraft:needs_wooden_tool"
		},
		"components": [
			{
				"type": "custommachinery:fluid",
				"id": "output",
				"mode": "output",
				"capacity": 2147483647
			}
		],
		"gui": [
			{
				"type": "custommachinery:text",
				"text": "machine.cmi.water_pump",
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
				"type": "custommachinery:fluid",
				"id": "output",
				"x": 119,
				"y": 30
			}
		],
		"jei": [
			{
				"type": "custommachinery:text",
				"text": "machine.cmi.water_pump",
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
				"type": "custommachinery:fluid",
				"id": "output",
				"x": 119,
				"y": 30
			}
		]
	})
})
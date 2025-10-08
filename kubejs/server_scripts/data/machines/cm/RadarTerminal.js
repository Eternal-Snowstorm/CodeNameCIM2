ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/radar_terminal.json`, {
		"name": "block.cmi.radar_terminal",
		"appearance": {
			"running": {
				"block": "cmi:machine/radar_terminal/on"
			},
			"errored": {
				"block": "cmi:machine/radar_terminal/off"
			},
			"paused": {
				"block": "cmi:machine/radar_terminal/off"
			},
			"hardness": -1,
			"interaction_sound": {},
			"mining_level": "minecraft:needs_diamond_tool",
			"tool_type": "minecraft:mineable/pickaxe",
			"resistance": 114514,
			"idle": {
				"block": "cmi:machine/radar_terminal/off"
			}
		},
		"components": [
			{
				"type": "custommachinery:energy",
				"capacity": 100000,
				"config": {
					"TOP": "BOTH",
					"BOTTOM": "BOTH",
					"FRONT": "BOTH",
					"RIGHT": "BOTH",
					"BACK": "BOTH",
					"LEFT": "BOTH"
				}
			},
			{
				"type": "custommachinery:item",
				"filter": [
					"cmi:empty_cell"
				],
				"whitelist": true,
				"id": "cell_input",
				"mode": "input"
			},
			{
				"type": "custommachinery:item",
				"id": "output",
				"mode": "output"
			},
			{
				"type": "custommachinery:item",
				"variant": "custommachinery:energy",
				"id": "battery",
				"mode": "input"
			}
		],
		"gui": [
			{
				"type": "custommachinery:background",
				"width": 256,
				"height": 166
			},
			{
				"type": "custommachinery:player_inventory",
				"x": 47,
				"y": 80
			},
			{
				"type": "custommachinery:status",
				"x": 236,
				"y": 5
			},
			{
				"type": "custommachinery:slot",
				"id": "output",
				"x": 150,
				"y": 44
			},
			{
				"type": "custommachinery:progress",
				"x": 120,
				"y": 45
			},
			{
				"type": "custommachinery:slot",
				"id": "cell_input",
				"texture": "cmi:textures/gui/cell_slot.png",
				"x": 99,
				"y": 44
			},
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"x": 78,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"id": "battery",
				"texture": "cmi:textures/gui/battery_slot.png",
				"x": 52,
				"y": 44
			}
		],
		"jei": [
			{
				"type": "custommachinery:background",
				"width": 256,
				"height": 166
			},
			{
				"type": "custommachinery:player_inventory",
				"x": 47,
				"y": 80
			},
			{
				"type": "custommachinery:status",
				"x": 236,
				"y": 5
			},
			{
				"type": "custommachinery:slot",
				"id": "output",
				"x": 150,
				"y": 44
			},
			{
				"type": "custommachinery:progress",
				"x": 120,
				"y": 45
			},
			{
				"type": "custommachinery:slot",
				"id": "cell_input",
				"texture": "cmi:textures/gui/cell_slot.png",
				"x": 99,
				"y": 44
			},
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"x": 78,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"id": "battery",
				"texture": "cmi:textures/gui/battery_slot.png",
				"x": 52,
				"y": 44
			}
		]
	})
})
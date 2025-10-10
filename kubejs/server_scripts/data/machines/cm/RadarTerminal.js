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
			"hardness": -1.0,
			"interaction_sound": {},
			"mining_level": "minecraft:needs_diamond_tool",
			"resistance": 114514.0,
			"tool_type": [
				"minecraft:mineable/pickaxe"
			],
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
				"id": "cell_input",
				"texture": "cmi:textures/gui/cell_slot.png",
				"x": 104,
				"y": 55
			},
			{
				"type": "custommachinery:slot",
				"id": "battery",
				"texture": "cmi:textures/gui/battery_slot.png",
				"x": 104,
				"y": 31
			},
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"x": 82,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/cell_slot.png",
				"id": "output",
				"x": 134,
				"y": 55
			},
			{
				"type": "custommachinery:progress",
				"texture": "cmi:textures/gui/progress_empty.png",
				"x": 128,
				"y": 36,
				"texture_empty": "cmi:textures/gui/progress_empty.png",
				"texture_filled": "cmi:textures/gui/progress_filled.png"
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
				"id": "cell_input",
				"texture": "cmi:textures/gui/cell_slot.png",
				"x": 104,
				"y": 55
			},
			{
				"type": "custommachinery:slot",
				"id": "battery",
				"texture": "cmi:textures/gui/battery_slot.png",
				"x": 104,
				"y": 31
			},
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"x": 82,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/cell_slot.png",
				"id": "output",
				"x": 134,
				"y": 55
			},
			{
				"type": "custommachinery:progress",
				"texture": "cmi:textures/gui/progress_empty.png",
				"x": 128,
				"y": 36,
				"texture_empty": "cmi:textures/gui/progress_empty.png",
				"texture_filled": "cmi:textures/gui/progress_filled.png"
			}
		]
	})
})
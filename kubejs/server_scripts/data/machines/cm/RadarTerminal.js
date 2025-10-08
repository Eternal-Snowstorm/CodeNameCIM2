ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/radar_terminal.json`, {
		"name": "block.cmi.radar_terminal",
		"appearance": {
			"idle": {
				"block": "cmi:machine/radar_terminal/off"
			},
			"running": {
				"block": "cmi:machine/radar_terminal/on"
			},
			"errored": {
				"block": "cmi:machine/radar_terminal/off"
			},
			"paused": {
				"block": "cmi:machine/radar_terminal/off"
			},
			"interaction_sound": "minecraft:iron_block",
			"requires_tool": true,
			"mining_level": "minecraft:needs_diamond_tool"
		},
		"components": [
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"mode": "input",
				"capacity": 100000,
				"config": {
					"default": "both"
				}
			},
			{
				"type": "custommachinery:item",
				"id": "cell_input",
				"mode": "input",
				"filter": [
					"#cmi:cells"
				]
			}
		],
		"gui": [
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
				"type": "custommachinery:progress",
				"x": 110,
				"y": 45
			},
			{
				"type": "custommachinery:status",
				"x": 236,
				"y": 5
			},
			{
				"type": "custommachinery:slot",
				"texture": "cmi:textures/gui/cell_slot.png",
				"id": "cell_input",
				"x": 69,
				"y": 34
			},
			{
				"type": "custommachinery:slot",
				"id": "output",
				"x": 140,
				"y": 44
			},
			{
				"type": "custommachinery:energy",
				"id": "energy_input",
				"x": 165,
				"y": 30
			}
		]
	})
})
ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/simple_centrifuge`, {
		"name": "block.cmi.simple_centrifuge",
		"appearance": {
			"idle": {
				"block": "cmi:machine/simple_centrifuge/off"
			},
			"running": {
				"block": "cmi:machine/simple_centrifuge/on"
			},
			"errored": {
				"block": "cmi:machine/simple_centrifuge/off"
			},
			"paused": {
				"block": "cmi:machine/simple_centrifuge/off"
			},
			"interaction_sound": "create:andesite_casing",
			"mining_level": "minecraft:needs_stone_tool",
			"requires_tool": true
		},
		"components": [
			{
				"type": "custommachinery:fluid",
				"id": "input0",
				"mode": "input",
				"capacity": 5000
			},
			{
				"type": "custommachinery:item",
				"id": "input1",
				"mode": "input"
			},
			{
				"type": "custommachinery:item",
				"id": "input2",
				"mode": "input"
			},
			{
				"type": "custommachinery:contraption",
				"config": {
					"default": "none",
					"left": "both",
					"right": "both"
				},
				"stress_impact": 4
			},
			{
				"type": "custommachinery:fluid",
				"id": "output0",
				"mode": "output",
				"capacity": 5000
			},
			{
				"type": "custommachinery:item",
				"id": "output1",
				"mode": "output"
			}
		],
		"gui": [
			{
				"type": "custommachinery:text",
				"text": "machine.cmi.simple_centrifuge",
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
				"type": "custommachinery:fluid",
				"id": "input0",
				"x": 65,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"id": "input1",
				"x": 85,
				"y": 54
			},
			{
				"type": "custommachinery:slot",
				"id": "input2",
				"x": 85,
				"y": 34
			},
			{
				"type": "custommachinery:slot",
				"id": "output1",
				"x": 140,
				"y": 44
			},
			{
				"type": "custommachinery:fluid",
				"id": "output0",
				"x": 160,
				"y": 31
			}
		],
		"jei": [
			{
				"type": "custommachinery:text",
				"text": "machine.cmi.simple_centrifuge",
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
				"type": "custommachinery:fluid",
				"id": "input0",
				"x": 65,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"id": "input1",
				"x": 85,
				"y": 54
			},
			{
				"type": "custommachinery:slot",
				"id": "input2",
				"x": 85,
				"y": 34
			},
			{
				"type": "custommachinery:slot",
				"id": "output1",
				"x": 140,
				"y": 44
			},
			{
				"type": "custommachinery:fluid",
				"id": "output0",
				"x": 160,
				"y": 31
			}
		]
	})
})
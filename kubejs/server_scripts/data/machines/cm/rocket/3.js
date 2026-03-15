ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/rocket_3`, {
		"name": "block.cmi.rocket_3",
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
				"capacity": 3000
			},
			{
				"type": "custommachinery:item",
				"id": "input1",
				"mode": "input"
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
			}
		]
	})
})
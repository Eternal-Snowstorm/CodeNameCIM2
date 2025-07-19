ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/large_steam_boiler`, {
		"name": "block.cmi.large_steam_boiler",
		"appearance": {
			"idle": {
				"block": "cmi:machine/large_steam_boiler/off"
			},
			"running": {
				"block": "cmi:machine/large_steam_boiler/on"
			},
			"errored": {
				"block": "cmi:machine/large_steam_boiler/off"
			},
			"paused": {
				"block": "cmi:machine/large_steam_boiler/off"
			},
			"interaction_sound": "minecraft:iron_block",
			"mining_level": "minecraft:needs_iron_tool",
			"requires_tool": true
		},
		"components": [
			{
				"type": "custommachinery:fluid",
				"id": "water",
				"mode": "input",
				"capacity": 10000,
				"config": {
					"default": "both"
				}
			},
			{
				"type": "custommachinery:item",
				"variant": "custommachinery:fuel",
				"mode": "input",
				"id": "fuel",
				"config": {
					"default": "both"
				}
			},
			{
				"type": "custommachinery:fluid",
				"id": "steam",
				"mode": "output",
				"capacity": 10000,
				"config": {
					"default": "both"
				}
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
				"y": 35
			},
			{
				"type": "custommachinery:status",
				"x": 236,
				"y": 5
			},
			{
				"type": "custommachinery:fluid",
				"id": "water",
				"x": 80,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"id": "fuel",
				"x": 112,
				"y": 55
			},
			{
				"type": "custommachinery:fluid",
				"id": "steam",
				"x": 145,
				"y": 31
			}
		],
		"jei": [
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
				"y": 35
			},
			{
				"type": "custommachinery:status",
				"x": 236,
				"y": 5
			},
			{
				"type": "custommachinery:fluid",
				"id": "water",
				"x": 80,
				"y": 31
			},
			{
				"type": "custommachinery:slot",
				"id": "fuel",
				"x": 112,
				"y": 55
			},
			{
				"type": "custommachinery:fluid",
				"id": "steam",
				"x": 145,
				"y": 31
			}
		]
	})
})
ServerEvents.highPriorityData((event) => {
	event.addJson(`${global.namespace}:machines/steam_boiler`, {
		"name": "block.cmi.steam_boiler",
		"appearance": {
			"idle": {
				"block": "cmi:machine/steam_boiler/off"
			},
			"running": {
				"block": "cmi:machine/steam_boiler/on"
			},
			"errored": {
				"block": "cmi:machine/steam_boiler/off"
			},
			"paused": {
				"block": "cmi:machine/steam_boiler/off"
			},
			"interaction_sound": "minecraft:iron_block",
			"mining_level": "minecraft:needs_stone_tool",
			"requires_tool": true
		},
		"components": [
			{
				"type": "custommachinery:fluid",
				"id": "water",
				"mode": "input",
				"filter": [
					"minecraft:water"
				],
				"whitelist": true,
				"capacity": 10000
			},
			{
				"type": "custommachinery:item",
				"variant": "custommachinery:fuel",
				"mode": "input",
				"id": "fuel"
			},
			{
				"type": "custommachinery:fluid",
				"id": "steam",
				"mode": "output",
				"filter": [
					"mekanism:steam"
				],
				"whitelist": true,
				"capacity": 10000,
				"config": {
					"top": "output",
					"enabled": false
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
ServerEvents.highPriorityData((event) => {
	// event.addJson("cmi:advancements/start.json", {
	// 	"criteria": {
	// 		"0": {
	// 			"conditions": {},
	// 			"trigger": "minecraft:inventory_changed"
	// 		}
	// 	},
	// 	"display": {
	// 		"announce_to_chat": false,
	// 		"background": "cmi:textures/gui/advancements/main.png",
	// 		"description": {
	// 			"color": "#DBA213",
	// 			"translate": "advancement.cmi.start.desc"
	// 		},
	// 		"frame": "task",
	// 		"hidden": false,
	// 		"icon": {
	// 			"item": "create:wrench"
	// 		},
	// 		"show_toast": true,
	// 		"title": {
	// 			"translate": "advancement.cmi.start"
	// 		}
	// 	},
	// 	"requirements": [
	// 		[
	// 			"0"
	// 		]
	// 	],
	// 	"sends_telemetry_event": true
	// })

	event.addJson("cmi:advancements/meet.json", {
		"parent": "ad_astra:astronaut",
		"criteria": {
			"0": {
				"conditions": {
					"items": [
						{
							"items": [
								"cmi:parchment"
							]
						}
					]
				},
				"trigger": "minecraft:inventory_changed"
			}
		},
		"display": {
			"announce_to_chat": false,
			"description": {
				"color": "#DBA213",
				"translate": "advancement.cmi.meet.desc"
			},
			"frame": "challenge",
			"hidden": true,
			"icon": {
				"item": "minecraft:cherry_sapling"
			},
			"show_toast": true,
			"title": {
				"translate": "advancement.cmi.meet"
			}
		},
		"requirements": [
			[
				"0"
			]
		],
		"rewards": {
			"experience": 100
		},
		"sends_telemetry_event": true
	})
})
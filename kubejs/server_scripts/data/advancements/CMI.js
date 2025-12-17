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

	event.addJson("cmi:loot_table/torn_parchment_a.json", {
		type: "generic",
		pools: [
			{
				bonus_rolls: 0.0,
				rolls: 1,
				entries: [
					{
						"type": "minecraft:alternatives",
						"children": [
							{
								"type": "minecraft:item",
								"name": "cmi:torn_parchment_a"
							}
						]
					}
				]
			}
		]
	})

	event.addJson("cmi:loot_table/torn_parchment_b.json", {
		type: "generic",
		pools: [
			{
				bonus_rolls: 0.0,
				rolls: 1,
				entries: [
					{
						"type": "minecraft:alternatives",
						"children": [
							{
								"type": "minecraft:item",
								"name": "cmi:torn_parchment_b"
							}
						]
					}
				]
			}
		]
	})

	event.addJson("cmi:advancements/echoes_north_star.json", {
		criteria: {
			"0": {
				conditions: {
					items: [
						{
							items: [
								"cmi:water_pump"
							]
						}
					]
				},
				trigger: "minecraft:inventory_changed"
			}
		},
		rewards: {
			loot: [
				"cmi:torn_parchment_b"
			]
		},
		display: {
			announce_to_chat: false,
			background: "cmi:textures/gui/advancements/main.png",
			description: {
				"color": "#00b7ffff",
				"translate": "advancements.cmi.north_star.desc"
			},
			frame: "goal",
			hidden: true,
			icon: {
				item: "cmi:torn_parchment_b"
			},
			show_toast: true,
			title: {
				translate: "advancements.cmi.north_star"
			},
			requirements: [
				[
					"0"
				]
			]

		}
	})

	event.addJson("cmi:advancements/echoes_south_cross.json", {
		parent: "cmi:echoes_north_star",
		criteria: {
			"0": {
				"conditions": {
					"items": [
						{
							"items": [
								"cmi:accelerator"
							]
						}
					]
				},
				"trigger": "minecraft:inventory_changed"
			}
		},
		rewards: {
			loot: [
				"cmi:torn_parchment_a"
			]
		},
		display: {
			announce_to_chat: false,
			description: {
				"color": "#fdba00ff",
				"translate": "advancements.cmi.south_cross.desc"
			},
			frame: "goal",
			hidden: true,
			icon: {
				item: "cmi:torn_parchment_a"
			},
			show_toast: true,
			title: {
				translate: "advancements.cmi.south_cross"
			},
			requirements: [
				[
					"0"
				]
			]
		}
	})

	event.addJson("cmi:advancements/meet.json", {
		"parent": "cmi:echoes_south_cross",
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
				"item": "ae2:quantum_entangled_singularity"
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
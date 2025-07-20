ServerEvents.highPriorityData((event) => {
	event.addJson("cmi:advancements/start.json", {
		"criteria": {
			"0": {
				"conditions": {},
				"trigger": "minecraft:inventory_changed"
			}
		},
		"display": {
			"announce_to_chat": false,
			"background": "cmi:textures/gui/advancements/main.png",
			"description": {
				"color": "#DBA213",
				"translate": "advancement.cmi.start.desc"
			},
			"frame": "task",
			"hidden": false,
			"icon": {
				"item": "create:wrench"
			},
			"show_toast": true,
			"title": {
				"translate": "advancement.cmi.start"
			}
		},
		"requirements": [
			[
				"0"
			]
		],
		"sends_telemetry_event": true
	})
})
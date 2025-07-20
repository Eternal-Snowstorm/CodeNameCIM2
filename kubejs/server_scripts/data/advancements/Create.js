ServerEvents.highPriorityData((event) => {
	event.addJson("create:advancements/fluid_fuel.json", {
		"parent": "create:burner",
		"criteria": {
			"0": {
				"conditions": {
					"items": [
						{
							"items": [
								"createaddition:straw"
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
				"translate": "advancement.create.fluid_fuel.desc"
			},
			"frame": "task",
			"hidden": false,
			"icon": {
				"item": "create:blaze_burner"
			},
			"show_toast": true,
			"title": {
				"translate": "advancement.create.fluid_fuel"
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
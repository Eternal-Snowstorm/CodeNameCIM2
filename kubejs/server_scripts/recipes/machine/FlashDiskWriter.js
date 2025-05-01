ServerEvents.recipes((event) => {
	global.mechanismGroup.forEach((material) => {
		event.custom({
			"type": "custommachinery:custom_machine",
			"machine": `${global.namespace}:flash_disk_writer`,
			"time": 400,
			"hidden": false,
			"requirements": [
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `ue_addons:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `ue_addons:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `ue_addons:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `ue_addons:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": "ue_addons:programmed_flash_drive",
					"amount": 1
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": `ue_addons:${material}_mechanism_flash_drive`,
					"amount": 1
				},
				{
					"type": "custommachinery:energy",
					"mode": "input",
					"amount": 2000000
				}
			]
		})
	})
})
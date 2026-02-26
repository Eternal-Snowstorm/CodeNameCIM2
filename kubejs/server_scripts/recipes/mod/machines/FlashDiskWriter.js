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
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": `cmi:${material}_mechanism`,
					"amount": 64
				},
				{
					"type": "custommachinery:item",
					"mode": "input",
					"item": "cmi:programmed_flash_drive",
					"amount": 1
				},
				{
					"type": "custommachinery:item",
					"mode": "output",
					"item": `cmi:${material}_mechanism_flash_drive`,
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

	// 精密和红石
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:flash_disk_writer`,
		"time": 400,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "vintageimprovements:redstone_module",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "cmi:programmed_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:item",
				"mode": "output",
				"item": "cmi:redstone_mechanism_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:energy",
				"mode": "input",
				"amount": 2000000
			}
		]
	})

	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:flash_disk_writer`,
		"time": 400,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "create:precision_mechanism",
				"amount": 64
			},
			{
				"type": "custommachinery:item",
				"mode": "input",
				"item": "cmi:programmed_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:item",
				"mode": "output",
				"item": "cmi:precision_mechanism_flash_drive",
				"amount": 1
			},
			{
				"type": "custommachinery:energy",
				"mode": "input",
				"amount": 2000000
			}
		]
	})

	let dataType = [
		"orbit",
		"mass",
		"radius",
		"atmosphere"
	]
	for (let tier = 1; tier <= 4; tier++) {
		event.custom({
			type: "custommachinery:custom_machine",
			machine: `${global.namespace}:flash_disk_writer`,
			time: 400,
			hidden: false,
			requirements: [
				{
					type: "custommachinery:item",
					mode: "input",
					item: "cmi:empty_cell",
					amount: 1
				},
				{
					type: "custommachinery:item",
					mode: "input",
					item: `cmi:tier_${tier}_aviation_cell`,
					nbt: `{data:${dataType[0]}}`,
					amount: 1
				},
				{
					type: "custommachinery:item",
					mode: "input",
					item: `cmi:tier_${tier}_aviation_cell`,
					nbt: `{data:${dataType[1]}}`,
					amount: 1
				},
				{
					type: "custommachinery:item",
					mode: "input",
					item: `cmi:tier_${tier}_aviation_cell`,
					nbt: `{data:${dataType[2]}}`,
					amount: 1
				},
				{
					type: "custommachinery:item",
					mode: "input",
					item: `cmi:tier_${tier}_aviation_cell`,
					nbt: `{data:${dataType[3]}}`,
					amount: 1
				},
				{
					type: "custommachinery:item",
					mode: "output",
					item: `cmi:tier_${tier}_aviation_complete_cell`,
					amount: 1
				},
				{
					type: "custommachinery:energy",
					mode: "input",
					amount: 2000000
				}
			]
		})
	}

	// Citron
	let recipes = [
		["#cmi:torch", "torcherino:torcherino", 1, 2],
		["#cmi:torch", "torcherino:compressed_torcherino", 3, 4],
		["#cmi:torch", "torcherino:double_compressed_torcherino", 5, 6],
		["#cmi:lantern", "torcherino:lantern", 1, 2],
		["#cmi:lantern", "torcherino:compressed_lantern", 3, 4],
		["#cmi:lantern", "torcherino:double_compressed_lantern", 5, 6],
		["#cmi:pumpkin", "torcherino:lanterino", 1, 2],
		["#cmi:pumpkin", "torcherino:compressed_lanterino", 3, 4],
		["#cmi:pumpkin", "torcherino:double_compressed_lanterino", 5, 6]
	]
	recipes.forEach((value) => {
		event.custom({
			type: "custommachinery:custom_machine",
			machine: `${global.namespace}:flash_disk_writer`,
			time: 400,
			hidden: false,
			requirements: [
				{ type: "custommachinery:item", mode: "input", item: "minecraft:clock", amount: 64 },
				{ type: "custommachinery:item", mode: "input", item: "minecraft:clock", amount: 64 },
				{ type: "custommachinery:item", mode: "input", item: "minecraft:clock", amount: 64 },
				{ type: "custommachinery:item", mode: "input", item: "minecraft:clock", amount: 64 },
				{ type: "custommachinery:item", mode: "input", item: value[0], amount: 1 },
				{ type: "custommachinery:item", mode: "output", item: value[1], amount: 1 },
				{ type: "custommachinery:energy", mode: "input", amount: 114514 },
				{
					type: "custommachinery:position",
					x: ClientSeedHandler.getValue(value[2]).toString(),
					y: "*",
					z: ClientSeedHandler.getValue(value[3]).toString()
				}
			]
		}).id(value[1])
	})
})
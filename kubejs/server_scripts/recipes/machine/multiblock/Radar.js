ServerEvents.recipes((event) => {
	let dataType = [
		"orbit",
		"mass",
		"radius",
		"atmosphere"
	]

	let dimensionTier = [
		"minecraft:overworld",
		"ad_astra:moon",
		"ad_astra:mars",
		"ad_astra:mercury"
	]

	for (let a = 1; a <= 4; a++) {
		for (let b = 1; b <= 4; b++) {
			event.custom({
				"type": "custommachinery:custom_machine",
				"machine": `${global.namespace}:radar_terminal`,
				"time": 1000,
				"hidden": false,
				"requirements": [
					{
						"type": "custommachinery:item",
						"mode": "input",
						"item": "cmi:empty_cell",
						"amount": 1
					},
					{
						"type": "custommachinery:item",
						"mode": "output",
						"item": `cmi:tier_${a.toString()}_aviation_cell`,
						"nbt": `{data:${dataType[b - 1]}}`,
						"amount": 1
					},
					{
						"type": "custommachinery:dimension",
						"filter": dimensionTier[a - 1]
					},
					{
						"type": "custommachinery:energy",
						"mode": "input",
						"amount": 100000
					},
					{
						"type": "custommachinery:structure",
						"pattern": [
							[
								"AAA",
								"AAA",
								"AAA",
								"   ",
								"   ",
								" m "
							],
							[
								"BCB",
								"CDC",
								"BCB",
								"   ",
								"   ",
								"   "
							],
							[
								"BCB",
								"CEC",
								"BCB",
								"   ",
								"   ",
								"   "
							],
							[
								"BCB",
								"CFC",
								"BCB",
								"   ",
								"   ",
								"   "
							],
							[
								"BCB",
								"CGC",
								"BCB",
								"   ",
								"   ",
								"   "
							],
							[
								"AHA",
								"IJK",
								"ALA",
								"   ",
								"   ",
								"   "
							]
						],
						"jei": false,
						"keys": {
							"A": "cmi:gray_reinforced_concrete",
							"B": "cmi:white_reinforced_concrete",
							"C": "minecraft:orange_concrete",
							"D": "cmi:power_supply",
							"E": "cmi:transformer",
							"F": "cmi:tracking_array",
							"G": "cmi:modem",
							"H": "cmi:white_reinforced_concrete_stairs[facing=north,half=bottom]",
							"I": "cmi:white_reinforced_concrete_stairs[facing=west,half=bottom]",
							"J": `cmi:radar_${b.toString()}`,
							"K": "cmi:white_reinforced_concrete_stairs[facing=east,half=bottom]",
							"L": "cmi:white_reinforced_concrete_stairs[facing=south,half=bottom]"
						}
					}
				]
			})
		}
	}
})
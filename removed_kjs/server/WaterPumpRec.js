/*
ServerEvents.recipes((event) => {
	// CM的KubeJS配方并不好用, 还不如custom
	event.custom({
		"type": "custommachinery:custom_machine",
		"machine": `${global.namespace}:water_pump`,
		"time": 1,
		"hidden": false,
		"requirements": [
			{
				"type": "custommachinery:fluid",
				"mode": "output",
				"fluid": "minecraft:water",
				"amount": 1073741823
			},
			{
				"type": "custommachinery:structure",
				"pattern": [
					[
						"AAA",
						"AmA",
						"AAA"
					],
					[
						"B B",
						"   ",
						"B B"
					],
					[
						"B B",
						"   ",
						"B B"
					],
					[
						"CDC",
						"F G",
						"CHC"
					]
				],
				"jei": false,
				"keys": {
					"F": "immersiveengineering:stairs_treated_wood_horizontal[facing=west,half=top,shape=straight,waterlogged=false]",
					"A": "immersiveengineering:treated_wood_horizontal",
					"B": "immersiveengineering:treated_fence[east=false,north=false,south=false,waterlogged=false,west=false]",
					"C": "immersiveengineering:treated_scaffold[waterlogged=false]",
					"H": "immersiveengineering:stairs_treated_wood_horizontal[facing=south,half=top,shape=straight,waterlogged=false]",
					"G": "immersiveengineering:stairs_treated_wood_horizontal[facing=east,half=top,shape=straight,waterlogged=false]",
					"D": "immersiveengineering:stairs_treated_wood_horizontal[facing=north,half=top,shape=straight,waterlogged=false]"
				}
			}
		]
	})
})
*/
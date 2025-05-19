ServerEvents.recipes((event) => {
	// 德尔塔溶液
	event.custom({
		"type": "immersiveindustry:chemical",
		"inputs": [
			{
				"base_ingredient": {
					"item": "ue_addons:blockstone_source_alpha"
				},
				"count": 1
			},
			{
				"base_ingredient": {
					"item": "ue_addons:blockstone_source_beta"
				},
				"count": 1
			},
			{
				"base_ingredient": {
					"item": "ue_addons:blockstone_source_gamma"
				},
				"count": 1
			}
		],
		"result_fluids": [
			{
				"fluid": "ue_addons:delta_unstable_solution",
				"amount": 500
			},
		],
		"time": 600
	})

	// 粗制铂微粒
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"fluid": {
			"tag": "ue_addons:delta_unstable_solution",
			"amount": 1000
		},
		"result_fluid": {
			"fluid": "ue_addons:turbid_waste_liquid",
			"amount": 1000
		},
		"input": {
			"item": "ue_addons:compression_end_stone_dust_block"
		},
		"result": {
			"item": "ue_addons:raw_platinum_particles",
			"count": 2
		},
		"large_only": true,
		"time": 600
	})

	// 铂溶液
	event.custom({
		"type": "immersiveengineering:mixer",
		"energy": 10000,
		"fluid": {
			"amount": 1000,
			"tag": "forge:glowstone"
		},
		"inputs": [
			{
				"base_ingredient": {
					"item": "ue_addons:platinum_crystal_nucleus"
				},
				"count": 4
			},
			{
				"base_ingredient": {
					"tag": "forge:dusts/redstone"
				},
				"count": 6
			}
		],
		"result": {
			"amount": 500,
			"fluid": "ue_addons:platinum_solution"
		}
	})
})

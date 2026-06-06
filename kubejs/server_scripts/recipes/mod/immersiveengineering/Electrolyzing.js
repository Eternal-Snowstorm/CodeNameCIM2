ServerEvents.recipes((event) => {
	// 钢齿轮镀铬
	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"input": {
			"tag": "forge:gears/steel"
		},
		"fluid": {
			"tag": "cmi:plating_solution",
			"amount": 1000
		},
		"result_fluid": {
			"fluid": "mekanism:sulfuric_acid",
			"amount": 500
		},
		"result": {
			"item": "cmi:chromeplated_steel_gear",
			"count": 1
		},
		"large_only": true,
		"time": 100
	})


})
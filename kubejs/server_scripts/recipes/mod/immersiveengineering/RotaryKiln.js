ServerEvents.recipes((event) => {

	// 生产硝酸
	event.custom({
		"type": "immersiveindustry:rotary_kiln",
		"input": {
			"tag": "forge:dusts/niter",
			"count": 4
		},
		"result": {
			"item": "thermal:slag",
			"count": 1
		},
		"result_fluid": {
			"fluid": "cmi:nitric_acid",
			"amount": 200
		},
		"time": 200
	})
})
ServerEvents.recipes((event) => {

	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"input": {
			"tag": "cmi:aluminum_oxide"
		},
		"fluid": {
			"tag": "forge:redstone_acid",
			"amount": 100
		},
		"result": {
			"item": "neoecoae:aluminum_dust",
			"count": 1
		},
		"large_only": false,
		"time": 1000
	})
})
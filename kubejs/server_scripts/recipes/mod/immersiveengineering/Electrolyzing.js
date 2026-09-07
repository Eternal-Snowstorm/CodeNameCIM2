ServerEvents.recipes((event) => {

	event.custom({
		"type": "immersiveindustry:electrolyzer",
		"input": {
			"item": "cmi:red_mud"
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
	}).id("immersiveindustry:electrolyzer/aluminum")
})
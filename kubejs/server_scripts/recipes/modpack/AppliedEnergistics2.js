ServerEvents.recipes((event) => {
	// 充能紫水晶
	event.custom({
		"type": "ae2:charger",
		"ingredient": {
			"tag": "forge:gems/amethyst"
		},
		"result": {
			"item": "cmi:charged_amethyst"
		}
	})
})
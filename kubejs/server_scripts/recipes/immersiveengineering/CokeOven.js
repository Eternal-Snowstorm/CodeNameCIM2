ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	immersiveengineering.coke_oven("#forge:coal_coke")
		.input("minecraft:charcoal")
		.creosote(500)

	event.custom({
		"type": "immersiveindustry:rotary_kiln",
		"input": {
			"item": "minecraft:charcoal"
		},
		"result": {
			"item": "thermal:coal_coke"
		},
		"result_fluid": {
			"fluid": "immersiveengineering:creosote",
			"amount": 500
		},
		"time": 900,
		"tickEnergy": 56
	})
})
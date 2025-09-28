ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	// immersiveengineering.coke_oven("#forge:coal_coke")
	// 	.time(900 * 0.75)
	// 	.input("minecraft:charcoal")
	// 	.creosote(500)

	immersiveengineering.coke_oven("minecraft:charcoal")
		.time(900 * 0.75)
		.input("#minecraft:logs")
		.creosote(250)
		.id("immersiveengineering:cokeoven/charcoal")

	immersiveengineering.coke_oven("#forge:coal_coke")
		.time(500 * 0.75)
		.input(["minecraft:coal", "minecraft:charcoal"])
		.creosote(500)
		.id("immersiveengineering:cokeoven/coke")

	immersiveengineering.coke_oven("#forge:storage_blocks/coal_coke")
		.time(16200 * 0.75)
		.input(["#forge:storage_blocks/coal", "#forge:storage_blocks/charcoal"])
		.creosote(5000)
		.id("immersiveengineering:cokeoven/coke_block")

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
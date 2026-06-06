ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.getRecipes()

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

	immersiveengineering.coke_oven("mekanism:dust_charcoal")
		.input("#forge:dusts/wood")
		.creosote(125)
		.time(250 * 0.75)

	event.custom({
		"type": "immersiveindustry:rotary_kiln",
		"input": Item.of("minecraft:charcoal").toJson(),
		"result": Item.of("thermal:coal_coke").toJson(),
		"result_fluid": Fluid.of("immersiveengineering:creosote").toJson(),
		"time": 900,
		"tickEnergy": 56
	})
})
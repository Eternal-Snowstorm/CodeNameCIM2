ServerEvents.recipes((event) => {
	let { create, kubejs } = event.getRecipes()

	create.deploying("minecraft:redstone_torch", [
		"#forge:rods/wooden",
		"#forge:dusts/redstone"
	])

	// 机壳增产
	create.deploying(`create:andesite_casing`, [
		"#minecraft:planks",
		"cmi:andesite_casing_framework"
	])

	create.deploying(`create:brass_casing`, [
		"#minecraft:planks",
		"cmi:brass_casing_framework"
	])

	create.deploying(`create:copper_casing`, [
		"#forge:treated_wood",
		"cmi:copper_casing_framework"
	])

	// 鼓风机触媒
	create.deploying("create_connected:empty_fan_catalyst", [
		"minecraft:iron_bars",
		"#cmi:casing_framework/brass"
	]).id("create_connected:crafting/kinetics/empty_fan_catalyst")
})
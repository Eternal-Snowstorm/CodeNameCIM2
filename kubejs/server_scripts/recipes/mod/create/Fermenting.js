ServerEvents.recipes((event) => {
	let { createdieselgenerators } = event.getRecipes()

	let biodiesel = Fluid.of("createdieselgenerators:biodiesel")

	event.remove({
		id: "immersiveengineering:refinery/biodiesel"
	})
	event.remove({
		id: "thermal:compat/immersiveengineering/press_ie_hemp_to_plantoil"
	})
	event.remove({
		id: "immersiveengineering:squeezer/beetroot_seeds"
	})
	event.remove({
		id: "immersiveengineering:squeezer/melon_seeds"
	})
	event.remove({
		id: "immersiveengineering:squeezer/pumpkin_seeds"
	})
	event.remove({
		id: "farmersdelight:integration/immersiveengineering/squeezer/cabbage_seeds"
	})
	event.remove({
		id: "farmersdelight:integration/immersiveengineering/squeezer/tomato_seeds"
	})
	event.remove({
		id: "immersiveengineering:squeezer/hemp_seeds"
	})
	event.remove({
		id: "immersiveengineering:squeezer/wheat_seeds"
	})

	// 生物柴油
	createdieselgenerators.basin_fermenting(biodiesel.withAmount(100), [
		"8x minecraft:sugar",
		Fluid.of("immersiveengineering:creosote", 100)
	]).processingTime(20 * 10).heatRequirement(CmiHeatLevel.GRILLED)

	// 血液
	createdieselgenerators.basin_fermenting(Fluid.of("cmi:blood", 250), [
		"create:cinder_flour",
		"minecraft:nether_wart",
		["minecraft:warped_fungus", "minecraft:crimson_fungus"]
	]).processingTime(20 * 5)
})
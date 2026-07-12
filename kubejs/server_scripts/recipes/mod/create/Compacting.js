ServerEvents.recipes((event) => {
	let { create } = event.getRecipes()

	// 泥土
	create.compacting([
		"minecraft:dirt",
		Fluid.of("minecraft:water", 50)
	], Fluid.of("cmi:sludge_suspension", 100))

	// 植物油
	create.compacting(Fluid.of("createdieselgenerators:plant_oil", 100), [
		"#forge:seeds"
	])

	// 烈焰蛋糕胚
	create.compacting("create:blaze_cake_base", [
		Fluid.of("minecraft:milk", 250),
		"create:cinder_flour",
		"minecraft:sugar"
	]).id("create:compacting/blaze_cake")

	// 高定向热解石墨
	create.compacting("immersiveengineering:dust_hop_graphite", [
		"8x #forge:dusts/coal_coke"
	])
		.superheated()
		.id("immersiveengineering:squeezer/graphite_dust")
})
ServerEvents.recipes((event) => {
	let { create, thermal } = event.recipes

	// 光合反应液
	create.mixing(Fluid.of("cmi:photosyn_fluid", 125), [
		Fluid.of("minecraft:water", 500),
		"minecraft:glowstone_dust",
		"16x #minecraft:leaves",
		"16x createaddition:biomass"
	]).heated()

	create.mixing(Fluid.of("cmi:photosyn_fluid", 125), [
		Fluid.of("minecraft:water", 500),
		"minecraft:glowstone_dust",
		"32x #minecraft:saplings",
		"16x createaddition:biomass"
	]).heated()

	// 少量氧气
	let oxygen = IngrUtils.getFirstFluidId("forge:oxygen")
	thermal.refinery(Fluid.of(oxygen, 25), [
		Fluid.of("cmi:photosyn_fluid", 500)
	]).energy(2000)

	// 燃油
	event.custom({
		"type": "immersiveengineering:refinery",
		"catalyst": Ingredient.of("#forge:dusts/charcoal").toJson(),
		"energy": 120,
		"input0": {
			"amount": 25,
			"tag": "forge:oxygen"
		},
		"input1": {
			"amount": 250,
			"tag": "forge:kerosene"
		},
		"result": {
			"amount": 50,
			"fluid": "ad_astra:fuel",
		}
	})
})
ServerEvents.recipes((event) => {
	let { create, createdieselgenerators, thermal, thermal_extra, tconstruct } = event.recipes

	// 蒸馏
	createdieselgenerators.distillation([
		Fluid.of("cmi:molten_bitumen", 100),
		Fluid.of("thermal:heavy_oil", 100),
		Fluid.of("cmi:lubricating_oil", 100),
		Fluid.of("createdieselgenerators:diesel", 100),
		Fluid.of("cmi:kerosene", 100),
		Fluid.of("cmi:naphtha", 100)
	], Fluid.of("ad_astra:oil", 1000))
		.heatRequirement("heated")
		.id("createdieselgenerators:distillation/crude_oil")

	// 蒸馏
	createdieselgenerators.distillation([
		Fluid.of("cmi:molten_bitumen", 100),
		Fluid.of("thermal:heavy_oil", 100),
		Fluid.of("cmi:lubricating_oil", 100),
		Fluid.of("createdieselgenerators:diesel", 100),
		Fluid.of("cmi:kerosene", 100),
		Fluid.of("cmi:naphtha", 100)
	], Fluid.of("thermal:crude_oil", 1000))
		.heatRequirement("heated")
		.id("createdieselgenerators:distillation/crude_oil2")

	// 蒸馏
	createdieselgenerators.distillation([
		Fluid.of("cmi:molten_bitumen", 100),
		Fluid.of("thermal:heavy_oil", 100),
		Fluid.of("cmi:lubricating_oil", 100),
		Fluid.of("createdieselgenerators:diesel", 100),
		Fluid.of("cmi:kerosene", 100),
		Fluid.of("cmi:naphtha", 100)
	], Fluid.of("createdieselgenerators:crude_oil", 1000))
		.heatRequirement("heated")
		.id("createdieselgenerators:distillation/crude_oil3")

	// 油页岩粉
	create.milling("cmi:oil_shale_dust", [
		"cmi:oil_shale"
	])

	create.crushing([
		"2x cmi:oil_shale_dust",
		Item.of("cmi:oil_shale_dust").withChance(0.2)
	], "cmi:oil_shale")

	// 油页岩蒸汽
	thermal.pyrolyzer([
		Fluid.of("cmi:oil_shale_steam", 20),
		Item.of("immersiveengineering:slag").withChance(0.26),
		Item.of("thermal:bitumen").withChance(0.05)
	], "#forge:dusts/oil_shale")
		.energy(4000)

	// 蒸汽处理
	thermal_extra.advanced_refinery([
		Fluid.of("ad_astra:oil", 100),
		Fluid.of("cmi:steam", 500),
		Fluid.of("cmi:turbid_waste_liquid", 400)
	], Fluid.of("cmi:oil_shale_steam", 1000))
		.energy(10000)

	// 烈焰人烧煤油
	event.custom({
		"type": "createaddition:liquid_burning",
		"input": {
			"fluid": "cmi:kerosene",
			"amount": 1000
		},
		"burnTime": 48000,
		"superheated": true
	})

	// 沥青冷却
	thermal.chiller("thermal:bitumen", [
		Fluid.of("cmi:molten_bitumen", 250)
	]).energy(2000)
	
	tconstruct.casting_table("thermal:bitumen")
		.fluid(Fluid.of("cmi:molten_bitumen", 250))
		.cooling_time(20)

	// 热力烧煤油
	thermal.compression_fuel("cmi:kerosene", 2000000)
})
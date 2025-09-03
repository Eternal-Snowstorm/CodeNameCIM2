ServerEvents.recipes((event) => {
	let { thermal_extra, thermal } = event.recipes

	thermal_extra.advanced_refinery([
		"4x cmi:sludge_extract",
		Item.of("cmi:siltsteel_dust").withChance(0.01),
		Fluid.of("minecraft:water", 900)
	], Fluid.of("deepdrilling:sludge")).energy(5000)

	thermal.refinery([
		"1x cmi:sludge_extract",
		Item.of("cmi:siltsteel_dust").withChance(0.01),
		Fluid.of("minecraft:water", 900)
	], Fluid.of("deepdrilling:sludge")).energy(5000)

	//石化柴油来自重油
	thermal_extra.advanced_refinery([
		"thermal:tar",
		Fluid.of("createdieselgenerators:diesel", 80)
	], Fluid.of("thermal:heavy_oil"))
		.energy(4000)
		.id("thermal_extra:machine/advanced_refinery/heavy_oil")

	//石化柴油来自轻油
	thermal_extra.advanced_refinery([
		"#forge:dusts/sulfur",
		Fluid.of("createdieselgenerators:diesel", 80)
	], Fluid.of("thermal:light_oil"))
		.energy(4000)
		.id("thermal_extra:machine/advanced_refinery/light_oil")

	// 石化含硫柴油提纯柴油
	thermal.refinery([
		"thermal:sulfur_dust",
		Fluid.of("createdieselgenerators:diesel", 100)
	], Fluid.of("cmi:sulfric_diesel", 100))
		.energy(4000)

	// 三硝基甲苯提纯
	thermal_extra.advanced_refinery([
		"4x cmi:trinitrotoluene",
		Fluid.of("cmi:benzene", 150),
		Fluid.of("cmi:nitric_acid", 20)
	], Fluid.of("cmi:trinitrotoluene_solution", 1000))
		.energy(8000)

	//柴油压缩炉统一
	thermal.compression_fuel("createdieselgenerators:diesel", 2000000)
})
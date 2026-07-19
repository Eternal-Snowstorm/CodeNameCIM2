ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	// 盐水处理
	cmi.electrolyzer()
		.outputGases("100x mekanism:chlorine")
		.outputGases("100x mekanism:sodium")
		.inputFluids(MBDUtils.withFluidTag("forge:brine", 1000))
		.inputFE(1000 * 20)
		.duration(20)

	// 水处理
	cmi.electrolyzer()
		.outputGases("500x mekanism:hydrogen")
		.outputGases("1000x mekanism:oxygen")
		.inputFluids(MBDUtils.withFluidTag("minecraft:water", 1000))
		.inputFE(1000 * 20)
		.duration(20)

	// 重水处理
	cmi.electrolyzer()
		.outputGases("500x mekanismgenerators:deuterium")
		.outputGases("1000x mekanism:oxygen")
		.inputFluids(MBDUtils.withFluidTag("forge:heavy_water", 1000))
		.inputFE(1000 * 20)
		.duration(20)
})
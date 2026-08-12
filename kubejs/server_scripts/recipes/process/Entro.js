ServerEvents.recipes((event) => {
	let { cmi, mekanism, thermal, thermal_extra } = event.getRecipes()

	// 电解
	cmi.electrolyzer()
		.inputItems("cmi:spiritcore_ore")
		.outputItems([
			"cmi:entro_peroxide_crystal",
			"cmi:ionized_entro_crystal"
		])
		.duration(20 * 2)

	// 氧化恩特罗水晶线
	// 粉碎
	mekanism.crushing(
		"cmi:entro_peroxide_dust",
		"cmi:entro_peroxide_crystal"
	)

	// 反应釜
	cmi.chemical_reactor()
		.inputItems("cmi:entro_peroxide_dust")
		.inputFluids([
			Fluid.of("cmi:crystal_etching_solution", 100)
		])
		.outputFluids([
			Fluid.of("cmi:entro_peroxide_solution", 100)
		])
		.duration(20 * 2)

	// 电离恩特罗水晶线
	// 热解
	thermal.pyrolyzer(Fluid.of("cmi:molten_ionized_entro", 200), [
		"cmi:ionized_entro_crystal"
	])

	// 精炼
	thermal.refinery([
		"cmi:crystal_molten_entro",
		Fluid.of("cmi:molten_ionized_entro", 100)
	], Fluid.of("cmi:molten_ionized_entro", 200))

	thermal_extra.advanced_refinery([
		"cmi:crystal_molten_entro",
		Fluid.of("cmi:molten_ionized_entro", 50)
	], Fluid.of("cmi:molten_ionized_entro", 100))

	// 钠还原剂
	cmi.chemical_reactor()
		.inputItems("2x cmi:electrolized_redstone")
		.inputFluids([
			Fluid.of("cmi:molten_ionized_entro", 100),
			Fluid.tag("tag", "forge:sodium", 100)
		])
		.outputItems("4x cmi:sodium_reducing_agent")
		.duration(20 * 2)

	// 还原恩特罗水晶线
	// 还原
	thermal.crystallizer("cmi:reduced_entro_crystal", [
		"cmi:sodium_reducing_agent",
		Fluid.of("cmi:entro_peroxide_solution", 100)
	])

	// 粉碎
	mekanism.crushing(
		"cmi:reduced_entro_dust",
		"cmi:reduced_entro_crystal"
	)

})
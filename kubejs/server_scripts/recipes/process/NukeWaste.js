ServerEvents.recipes((event) => {
	let { thermal, cmi, mekanism } = event.getRecipes()

	// 核废料
	cmi.electrolyzer()
		.inputItems("alexscaves:unrefined_waste")
		.outputItems("5x alexscaves:toxic_paste")
		.outputGases(MekType.Gas.of("mekanism:antimatter", 100)) // nuclear_waste
		.duration(20 * 5)

	// 含钋/钚电解液
	cmi.electrolyzer()
		.inputGases(MekType.Gas.of("mekanism:antimatter", 100)) // nuclear_waste
		.outputFluids([
			Fluid.of("cmi:polonium_containing_electrolyte", 100),
			Fluid.of("cmi:plutonium_containing_electrolyte", 100)
		])
		.outputGases(MekType.Gas.of("mekanism:antimatter", 100)) // spent_nuclear_waste
		.duration(20 * 5)

	// 放射性酸溶液
	cmi.electrolyzer()
		.inputFluids([
			Fluid.of("cmi:plutonium_extract_solution", 100),
			Fluid.of("tag", "cmi:hydrochloric_acid", 100)
		])
		.outputFluids([
			Fluid.of("cmi:radioactive_acid_solution", 100)
		])
		.outputGases(MekType.Gas.of("cmi:radioactive_mixture", 100))
		.duration(20 * 5)

	// 钚线
	// 钚电离结晶
	thermal.crystallizer("cmi:plutonium_ionized_crystal", [
		"2x #forge:dusts/fluorite",
		Fluid.of("cmi:plutonium_containing_electrolyte", 100)
	])

	// 含钚溶液
	cmi.chemical_reactor()
		.inputItems([
			"cmi:radioactive_sediment",
			"cmi:plutonium_ionized_crystal"
		])
		.inputFluids([
			Fluid.tag("tag", "cmi:nitric_acid", 100)
		])
		.outputFluids([
			Fluid.of("cmi:plutonium_containing_solution", 100)
		])
		.duration(20 * 5)

	// 钚萃取液
	cmi.chemical_reactor()
		.inputFluids([
			Fluid.of("cmi:plutonium_containing_solution", 100),
			Fluid.tag("tag", "forge:molten_uranium", 180)
		])
		.outputItems("immersiveengineering:raw_uranium")
		.outputFluids([
			Fluid.of("cmi:plutonium_extract_solution", 200)
		])
		.duration(20 * 5)

	// 钚混合物
	mekanism.activating(
		MekType.Gas.of("cmi:radioactive_mixture", 1),
		MekType.Gas.of("cmi:plutonium_mixture", 1)
	).id("mekanism:processing/lategame/polonium")

	// 钚
	mekanism.centrifuging(
		MekType.Gas.of("cmi:plutonium_mixture", 1),
		MekType.Gas.of("mekanism:plutonium", 1)
	).id("mekanism:processing/lategame/plutonium")

	// 钋线
	// 含钋溶液
	cmi.chemical_reactor()
		.inputItems("2x #forge:dusts/fluorite")
		.inputFluids([
			Fluid.of("cmi:polonium_containing_electrolyt", 100)
		])
		.outputItems("cmi:radioactive_sediment")
		.outputFluids([
			Fluid.of("cmi:polonium_containing_solution", 100)
		])
		.duration(20 * 5)

	// 粗钋
	thermal.crystallizer("cmi:raw_polonium_dust", [ // cmi:raw_polonium
		Fluid.of("cmi:polonium_containing_solution")
	])

	// 粗钋粉
	/*
	mekanism.crushing(
		"cmi:raw_polonium_dust",
		"cmi:raw_polonium"
	)
	 */

	// 钋溶液
	cmi.chemical_reactor()
		.inputItems("cmi:raw_polonium_dust")
		.inputFluids([
			Fluid.of("cmi:radioactive_acid_solution", 100)
		])
		.outputItems("cmi:sludge_extract")
		.outputFluids([
			Fluid.of("cmi:polonium_solution", 100)
		])
		.duration(20 * 5)

	// 还原钋
	cmi.chemical_reactor()
		.inputItems("5x #forge:dusts/zinc")
		.inputFluids([
			Fluid.of("cmi:polonium_solution", 100)
		])
		.outputItems([
			"5x cmi:dirty_zinc_dust",
			"cmi:reduced_polonium"
		])
		.duration(20 * 5)

	// 钋
	mekanism.oxidizing(
		"cmi:reduced_polonium",
		Mek.Gas.of("mekanism:polonium", 100)
	)


})
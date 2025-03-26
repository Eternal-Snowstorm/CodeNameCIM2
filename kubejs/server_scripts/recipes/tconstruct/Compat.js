ServerEvents.recipes((event) => {
	let { create, tconstruct } = event.recipes

	// 砖块
	create.mixing(Fluid.of("tconstruct:seared_stone", 250), [
		"tconstruct:grout"
	]).processingTime(150).heatLevel("grilled")

	create.mixing(Fluid.of("tconstruct:scorched_stone", 250), [
		"tconstruct:nether_grout"
	]).processingTime(150).heatLevel("grilled")

	// 机壳
	tconstruct.casting_basin(
		"create:andesite_casing",
		Fluid.of("ue_addons:molten_andesite_alloy", 90),
		40,
		"#minecraft:logs",
		true
	)

	tconstruct.casting_basin(
		"create:copper_casing",
		Fluid.of("tconstruct:molten_copper", 90),
		40,
		"#minecraft:logs",
		true
	)

	tconstruct.casting_basin(
		"create:brass_casing",
		Fluid.of("tconstruct:molten_brass", 90),
		40,
		"#minecraft:logs",
		true
	)

	tconstruct.casting_basin(
		"create:railway_casing",
		Fluid.of("tconstruct:molten_obsidian", 90),
		40,
		"create:brass_casing",
		true
	)
	// 安山合金
	tconstruct.casting_basin(
		"ue_addons:andesite_alloy_ingot",
		Fluid.of("tconstruct:molten_iron", 30),
		20,
		"minecraft:andesite",
		true
	).id("tconstruct:compat/create/andesite_alloy_iron")

	tconstruct.casting_basin(
		"ue_addons:andesite_alloy_ingot",
		Fluid.of("tconstruct:molten_zinc", 30),
		0,
		"minecraft:andesite",
		true
	).id("tconstruct:compat/create/andesite_alloy_zinc")

})
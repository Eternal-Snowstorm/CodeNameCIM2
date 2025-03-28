ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

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

	tconstruct.casting_basin(
		"create:andesite_alloy",
		Fluid.of("tconstruct:molten_iron", 30),
		20,
		"minecraft:andesite",
		true
	)

	tconstruct.casting_basin(
		"create:andesite_alloy",
		Fluid.of("tconstruct:molten_zinc", 10),
		0,
		"minecraft:andesite",
		true
	)
})
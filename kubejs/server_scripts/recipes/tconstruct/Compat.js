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
		"#minecraft:logs"
	).cast_consumed(true).cooling_time(40)

	tconstruct.casting_basin(
		"create:copper_casing",
		Fluid.of("tconstruct:molten_copper", 90),
		"#minecraft:logs"
	).cast_consumed(true).cooling_time(40)

	tconstruct.casting_basin(
		"create:brass_casing",
		Fluid.of("tconstruct:molten_brass", 90),
		"#minecraft:logs"
	).cast_consumed(true).cooling_time(40)

	tconstruct.casting_basin(
		"create:railway_casing",
		Fluid.of("tconstruct:molten_obsidian", 90),
		"create:brass_casing"
	).cast_consumed(true).cooling_time(40)
})
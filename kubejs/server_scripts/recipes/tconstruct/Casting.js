ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	let castingMechanismMaterials = [
		["tconstruct:molten_iron", "ue_addons:incomplete_iron_mechanism"],
		["tconstruct:molten_gold", "ue_addons:incomplete_gold_mechanism"],
		["tconstruct:molten_copper", "ue_addons:incomplete_copper_mechanism"],
		["ue_addons:molten_andesite_alloy", "ue_addons:incomplete_andesite_mechanism"]
	]
	castingMechanismMaterials.forEach(([input, output]) => {
		tconstruct.casting_table(output, Fluid.of(input, 90))
			.cast("#tconstruct:casts/multi_use/mechanism")
			.cooling_time(50)

		tconstruct.casting_table(output, Fluid.of(input, 90))
			.cast("#tconstruct:casts/single_use/mechanism")
			.cooling_time(50)
			.cast_consumed(true)
	})

	tconstruct.casting_table("ue_addons:mechanism_cast", Fluid.of("tconstruct:molten_gold", 90))
		.cast("#create:mechanisms")
		.cooling_time(57)
		.cast_consumed(true)

	let castingMetarialGroup = [
		["andesite_alloy", 30],
		["vanadium", 50]
	]
	castingMetarialGroup.forEach(([material, time]) => {
		tconstruct.casting_table(
			`ue_addons:${material}_ingot`,
			Fluid.of(`ue_addons:molten_${material}`, 90)
		).cast("#tconstruct:casts/multi_use/ingot").cooling_time(time)

		tconstruct.casting_table(`ue_addons:${material}_ingot`,
			Fluid.of(`ue_addons:molten_${material}`, 90)
		).cast("#tconstruct:casts/single_use/ingot").cooling_time(time).cast_consumed(true)

		tconstruct.casting_table(
			`ue_addons:${material}_plate`,
			Fluid.of(`ue_addons:molten_${material}`, 90)
		).cast("#tconstruct:casts/multi_use/plate").cooling_time(time)

		tconstruct.casting_table(
			`ue_addons:${material}_plate`,
			Fluid.of(`ue_addons:molten_${material}`, 90)
		).cast("#tconstruct:casts/single_use/plate").cooling_time(time).cast_consumed(true)

		tconstruct.casting_basin(
			`ue_addons:${material}_block`,
			Fluid.of(`ue_addons:molten_${material}`, 810)
		).cooling_time(3 * time)
	})

	tconstruct.molding_table(
		"ue_addons:mechanism_sand_cast",
		"#create:mechanisms",
		"#tconstruct:casts/sand"
	)

	tconstruct.molding_table(
		"ue_addons:mechanism_red_sand_cast",
		"#create:mechanisms",
		"#tconstruct:casts/red_sand"
	)
})
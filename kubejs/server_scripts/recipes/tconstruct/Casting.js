ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	let castingMechanismMaterials = [
		//["tconstruct:molten_iron", "cmi:incomplete_iron_mechanism"],
		["tconstruct:molten_gold", "cmi:incomplete_gold_mechanism"],
		["tconstruct:molten_copper", "cmi:incomplete_copper_mechanism"],
		["cmi:molten_andesite_alloy", "cmi:incomplete_andesite_mechanism"]
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

	tconstruct.casting_basin("tconstruct:smeltery_controller", Fluid.of("tconstruct:molten_copper", 360))
		.cast("tconstruct:seared_melter")
		.cast_consumed(true)
		.cooling_time(100)
		.id("tconstruct:smeltery/casting/seared/smeltery_controller")

	tconstruct.casting_table("cmi:mechanism_cast", Fluid.of("tconstruct:molten_gold", 90))
		.cast("#create:mechanisms")
		.cooling_time(57)
		.cast_consumed(true)

	tconstruct.molding_table(
		"cmi:mechanism_sand_cast",
		"#create:mechanisms",
		"#tconstruct:casts/sand"
	)

	tconstruct.molding_table(
		"cmi:mechanism_red_sand_cast",
		"#create:mechanisms",
		"#tconstruct:casts/red_sand"
	)

	tconstruct.casting_table(
		"create:andesite_alloy",
		Fluid.of("cmi:molten_andesite_alloy", 90)
	).cast("tconstruct:ingot_cast").cooling_time(40).cast_consumed(false)

	tconstruct.casting_table(
		"create:andesite_alloy",
		Fluid.of("cmi:molten_andesite_alloy", 90)
	).cast("tconstruct:ingot_sand_cast").cooling_time(40).cast_consumed(true)


	tconstruct.casting_table(
		"create:andesite_alloy",
		Fluid.of("cmi:molten_andesite_alloy", 90)
	).cast("tconstruct:ingot_sand_cast").cooling_time(40).cast_consumed(true)
})

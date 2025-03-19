ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	let castingMechanicalMaterials = [
		["tconstruct:molten_iron", "ue_addons:incomplete_iron_mechanism"],
		["tconstruct:molten_gold", "ue_addons:incomplete_gold_mechanism"],
		["tconstruct:molten_copper", "ue_addons:incomplete_copper_mechanism"],
		["ue_addons:molten_andesite_alloy", "ue_addons:incomplete_andesite_mechanism"]
	]
	castingMechanicalMaterials.forEach(([input, output]) => {
		tconstruct.casting_table(
			output,
			Fluid.of(input, 180),
			"#tconstruct:casts/multi_use/mechanism"
		).cooling_time(50)

		tconstruct.casting_table(
			output,
			Fluid.of(input, 180),
			"#tconstruct:casts/single_use/mechanism"
		).cooling_time(50).cast_consumed(true)
	})
	tconstruct.casting_table(
		"ue_addons:mechanism_cast",
		Fluid.of("tconstruct:molten_gold", 90),
		"#create:mechanisms"
	).switch_slots(true).cooling_time(57).cast_consumed(true)

	tconstruct.casting_basin(
		"create:andesite_alloy",
		Fluid.of("tconstruct:molten_iron",30),
		"minecraft:andesite"
	).cooling_time(20).cast_consumed(true).id("tconstruct:compat/create/andesite_alloy_iron")
	tconstruct.casting_basin(
		"create:andesite_alloy",
		Fluid.of("tconstruct:molten_zinc",30),
		"minecraft:andesite"
	).cooling_time(0).cast_consumed(true).id("tconstruct:compat/create/andesite_alloy_zinc")

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
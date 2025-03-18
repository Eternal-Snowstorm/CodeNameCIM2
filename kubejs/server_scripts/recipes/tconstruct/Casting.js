ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	let castingMechanicalMaterials = [
		["tconstruct:molten_iron", "ue_addons:incomplete_iron_mechanism"],
		["tconstruct:molten_gold", "ue_addons:incomplete_gold_mechanism"],
		["tconstruct:molten_copper", "ue_addons:incomplete_copper_mechanism"]
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

	tconstruct.molding_table("ue_addons:mechanism_sand_cast", "#create:mechanisms", "#tconstruct:casts/sand")
	tconstruct.molding_table("ue_addons:mechanism_red_sand_cast", "#create:mechanisms", "#tconstruct:casts/red_sand")
})
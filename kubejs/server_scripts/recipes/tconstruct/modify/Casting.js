ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	tconstruct.casting_table("tconstruct:emerald_reinforcement")
		.cast("#forge:plates/dense_obsidian")
		.fluid(Fluid.of("tconstruct:molten_emerald", 50))
		.cooling_time(20 * 5)
		.id("tconstruct:tools/modifiers/emerald_reinforcement")

	tconstruct.casting_table("tconstruct:slimesteel_reinforcement")
		.cast("#forge:plates/dense_obsidian")
		.fluid(Fluid.of("tconstruct:molten_slimesteel", 50))
		.cooling_time(20 * 5)
		.id("tconstruct:tools/modifiers/slimesteel_reinforcement")
})
ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 终章构件零件
	mekanism.nucleosynthesizing(
		"#forge:ingots/plasma",
		MekanismType.Gas.of("mekanism:antimatter", 5),
		"16x cmi:final_mechanism_part"
	).duration(200)
})
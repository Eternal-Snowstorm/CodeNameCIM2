ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 终章构件零件
	mekanism.nucleosynthesizing(
		"#forge:ingots/overcharged_alloy",
		MekanismType.Gas.of("mekanism:antimatter", 5),
		"16x cmi:final_mechanism_part"
	).duration(200)

	mekanism.nucleosynthesizing(
		"ae2:singularity",
		MekanismType.Gas.of("mekanism:antimatter", 5),
		"advanced_ae:shattered_singularity"
	).duration(300).id("advanced_ae:shatteredsingularity")
})
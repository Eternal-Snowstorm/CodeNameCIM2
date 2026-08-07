ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

    // 铀黄饼
	mekanism.injecting(
		"mekanism:yellow_cake_uranium",
		"2x #forge:ingots/uranium",
		MekType.Gas.of("cmi:fissile_uranium_compound", 1),
	)

})
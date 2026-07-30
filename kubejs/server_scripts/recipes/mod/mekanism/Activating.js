ServerEvents.recipes((event) => {
	let { mekanism } = event.getRecipes()

	mekanism.activating(
		MekType.Gas.of("cmi:helium_3", 1),
		MekType.Gas.of("mekanismgenerators:tritium", 1)
	).id("mekanismgenerators:activating/tritium")

	mekanism.activating(
		MekType.Gas.of("cmi:radioactive_mixture", 1),
		MekType.Gas.of("cmi:plutonium__mixture", 1)
	).id("mekanism:processing/lategame/polonium")
})
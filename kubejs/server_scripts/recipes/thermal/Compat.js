ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.crucible(Fluid.of("tconstruct:seared_stone", 250), [
		"tconstruct:grout"
	]).energy(2000)

	thermal.crucible(Fluid.of("tconstruct:scorched_stone", 250), [
		"tconstruct:nether_grout"
	]).energy(2000)
})
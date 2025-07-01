ServerEvents.recipes((event) => {
	let { vintageimprovements, create } = event.recipes

	create.mixing("cmi:silicon_mixure", [
		"cmi:small_coal_coke",
		Fluid.of("cmi:pure_sand", 100)
	]).superheated()

	create.emptying([
		Item.of("cmi:andesite_dust").withChance(0.05),
		Fluid.of("cmi:pure_sand", 100)
	], "#forge:sand")

	vintageimprovements.laser_cutting("ae2:silicon", [
		"cmi:silicon_mixure"
	]).energy(100)

	create.cutting("8x cmi:small_coal_coke", [
		"#forge:coal_coke"
	])
})
ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	// 1
	create.filling("minecraft:small_amethyst_bud", [
		"thermal_extra:amethyst_dust",
		Fluid.of("minecraft:water", 200)
	])
	// 2
	create.filling("minecraft:medium_amethyst_bud", [
		"minecraft:small_amethyst_bud",
		Fluid.of("minecraft:water", 200)
	])
	// 3
	create.filling("minecraft:large_amethyst_bud", [
		"minecraft:medium_amethyst_bud",
		Fluid.of("minecraft:water", 200)
	])
	// 4
	create.filling("minecraft:amethyst_cluster", [
		"minecraft:large_amethyst_bud",
		Fluid.of("minecraft:water", 200)
	])

	// 萤石
	vintageimprovements.laser_cutting("minecraft:glowstone_dust", [
		"thermal_extra:amethyst_dust"
	]).energy(50)
})
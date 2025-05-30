ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes

	thermal_extra.advanced_refinery([
		"4x cmi:sludge_extract",
		Item.of("cmi:siltsteel_dust").withChance(0.01),
		Fluid.of("minecraft:water", 900)
	], Fluid.of("deepdrilling:sludge")).energy(5000)
})
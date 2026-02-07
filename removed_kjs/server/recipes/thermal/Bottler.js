ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 聚合物板
	thermal.bottler("alexscaves:polymer_plate", [
		"#forge:plates/polyolefin",
		Fluid.of("cmi:radon", 500)
	]).energy(4000).id("alexscaves:polymer_plate")
})
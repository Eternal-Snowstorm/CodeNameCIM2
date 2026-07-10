ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.improved_rubber_extractor()
		.inputFE(500)
		.outputFluids(Fluid.of("thermal:latex", 3000))
		.duration(20 * 10)
})
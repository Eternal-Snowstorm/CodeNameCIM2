ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	cmi.improved_rubber_extractor()
		.inputFE(250)
		.outputFluids(Fluid.of("thermal:latex", 125))
		.duration(1)
})
ServerEvents.recipes((event) => {
	let { create, mekanism } = event.recipes

	mekanism.metallurgic_infusing(
		"cmi:infusion_treated_processor",
		"ae2:logic_processor",
		{ amount: 20, tag: "mekanism:gold" },
	)

	mekanism.enriching("cmi:enrichment_treated_processor", "ae2:calculation_processor")

	mekanism.sawing( "ae2:engineering_processor","cmi:ground_treated_processor")

	create.mechanical_crafting("cmi:mekanism_processor", [
		"A",
		"B",
		"C"
	], {
		A: "cmi:infusion_treated_processor",
		B: "cmi:enrichment_treated_processor",
		C: "cmi:ground_treated_processor"
	})
})
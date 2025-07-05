ServerEvents.recipes((event) => {
	let { vintageimprovements, create, mekanism } = event.recipes


	event.custom(
		{
			"type": "mekanism:metallurgic_infusing",
			"chemicalInput": {
				"amount": 20, "tag": "mekanism:gold"
			},
			"itemInput": {
				"ingredient": { "item": "ae2:logic_processor" }
			},
			"output": {
				"item": "cmi:infusion_treated_processor"
			}
		}
	)

mekanism.enriching("cmi:enrichment_treated_processor","ae2:calculation_processor")

mekanism.crushing("cmi:ground_treated_processor","ae2:engineering_processor")


create.mechanical_crafting("cmi:mekanism_processor", [
		"A",
        "B",
        "C"
	], {
		A: "cmi:infusion_treated_processor",
		B: "cmi:enrichment_treated_processor",
		C: "cmi:ground_treated_processor"})
})
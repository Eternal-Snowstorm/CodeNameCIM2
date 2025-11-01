ServerEvents.recipes((event) => {
	let { kubejs, thermal, mekanism } = event.recipes

	kubejs.shapeless("5x cmi:explosive_element_basement", [
		"#forge:chem_salts/magnesium",
		"#forge:chem_salts/sodium",
		"#forge:chem_salts/calcium",
		"#forge:chem_salts/potassium",
		"#forge:chem_salts/uranium"
	])

	kubejs.shapeless("5x cmi:reactive_element_basement", [
		"#forge:chem_salts/aluminum",
		"#forge:chem_salts/vanadium",
		"#forge:chem_salts/zinc",
		"#forge:chem_salts/chromium",
		"#forge:chem_salts/cobalt",
	])

	kubejs.shapeless("5x cmi:stable_element_basement", [
		"#forge:chem_salts/iron",
		"#forge:chem_salts/nickel",
		"#forge:chem_salts/tin",
		"#forge:chem_salts/lead",
		"#forge:chem_salts/copper"
	])

	mekanism.reaction(
		"cmi:explosive_element_basement",
		MekanismType.Gas.of("mekanismgenerators:deuterium", 250),
		Fluid.of("cmi:blood", 50),
		"cmi:explosive_element"
	).duration(400).energyRequired(200)

	mekanism.reaction(
		"cmi:reactive_element_basement",
		MekanismType.Gas.of("cmi:radon", 250),
		Fluid.of("cmi:eletriced_source_emeraid", 50),
		"cmi:reactive_element"
	).duration(400).energyRequired(200)

	mekanism.reaction(
		"cmi:stable_element_basement",
		MekanismType.Gas.of("cmi:xenon", 250),
		Fluid.of("cmi:molten_source_sapphire", 50),
		"cmi:stable_element"
	).duration(400).energyRequired(200)

	thermal.smelter("3x create:chromatic_compound", [
		"cmi:explosive_element",
		"cmi:reactive_element",
		"cmi:stable_element",
	])
})
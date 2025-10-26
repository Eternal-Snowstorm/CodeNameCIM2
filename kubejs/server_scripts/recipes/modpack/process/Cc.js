ServerEvents.recipes((event) => {
	let { kubejs, thermal } = event.recipes

	kubejs.shapeless("6x cmi:reactive_element", [
		"#forge:chem_salts/magnesium",
		"#forge:chem_salts/sodium",
		"#forge:chem_salts/calcium",
		"#forge:chem_salts/potassium",
		"#forge:chem_salts/tin",
		"cmi:blackstone_source_gamma"
	])

	kubejs.shapeless("6x cmi:stable_element", [
		"#forge:chem_salts/copper",
		"#forge:chem_salts/zinc",
		"#forge:chem_salts/aluminum",
		"#forge:chem_salts/nickel",
		"#forge:chem_salts/iron",
		"cmi:blackstone_source_beta"
	])

	kubejs.shapeless("6x cmi:explosive_element", [
		"#forge:chem_salts/osmium",
		"#forge:chem_salts/cobalt",
		"#forge:chem_salts/chromium",
		"#forge:chem_salts/lead",
		"#forge:chem_salts/uranium",
		"cmi:blackstone_source_alpha"
	])

	thermal.smelter("3x create:chromatic_compound", [
		"cmi:explosive_element",
		"cmi:reactive_element",
		"cmi:stable_element",
	])
})
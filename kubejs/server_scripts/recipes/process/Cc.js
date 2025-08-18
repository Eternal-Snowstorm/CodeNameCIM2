ServerEvents.recipes((event) => {
	let { create, kubejs, thermal} = event.recipes
    kubejs.shapeless("9x cmi:reactive_element",
        [
        '#forge:chem_salts/iron',
        '#forge:chem_salts/zinc',
        '#forge:chem_salts/lead',
        '#forge:chem_salts/chorme',
        '#forge:chem_salts/tin',
        '#forge:chem_salts/cobalt',
        '#forge:chem_salts/vanadium',
        '#forge:chem_salts/uranium',
        '#forge:chem_salts/nickel'
    ])

    kubejs.shapeless("4x cmi:explosive_element",
        [
        '#forge:chem_salts/aluminium',
        '#forge:chem_salts/sodium',
        '#forge:chem_salts/potassium',
        '#forge:chem_salts/calcium',
    ])

    kubejs.shapeless("5x cmi:stable_element",
        [
        '#forge:chem_salts/copper',
        '#forge:chem_salts/gold',
        '#forge:chem_salts/silver',
        '#forge:chem_salts/osmiumm',
        '#forge:chem_salts/platinum',
    ])

	thermal.smelter('create:chromatic_compound', [
		"cmi:explosive_element",
		"cmi:reactive_element",
		"cmi:stable_element",
	])
})
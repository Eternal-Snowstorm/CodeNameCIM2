ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.item_application("create:creative_crate", [
		"create:item_vault",
		"cmi:creative_mechanism"
	])

	create.item_application("createcasing:creative_cogwheel", [
		"create_connected:encased_chain_cogwheel",
		"cmi:creative_mechanism"
	])

	create.item_application("ae2:creative_energy_cell", [
		"ae2:dense_energy_cell",
		"cmi:creative_mechanism"
	])

	create.item_application("immersiveengineering:capacitor_creative", [
		"immersiveengineering:capacitor_hv",
		"cmi:creative_mechanism"
	])

	create.item_application("create:creative_motor", [
		"createaddition:electric_motor",
		"cmi:creative_mechanism"
	])

	create.item_application("createaddition:creative_energy", [
		"createaddition:modular_accumulator",
		"cmi:creative_mechanism"
	])

	create.item_application("create_connected:creative_fluid_vessel", [
		"create_connected:fluid_vessel",
		"cmi:creative_mechanism"
	])

	create.item_application("create:creative_fluid_tank", [
		"create:fluid_tank",
		"cmi:creative_mechanism"
	])

	let creativeEnergyCube = Item.of("mekanism:creative_energy_cube", '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}')

	create.deploying(creativeEnergyCube, [
		"mekanism:creative_energy_cube",
		"cmi:creative_mechanism"
	])
})
ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("4x ae2:controller", [
		"SCS",
		"CMC",
		"SCS"
	], {
		M: "cmi:_sky_stone_casing",
		S: "ae2:fluix_crystal",
		C: "cmi:smart_mechanism"
	}).id("ae2:network/blocks/controller")

	kubejs.shaped("ae2:inscriber", [
		" P ",
		"CZM",
		" P "
	], {
		P: "create:mechanical_press",
		C: "ae2:fluix_crystal",
		M: "create:precision_mechanism",
		Z: "cmi:sky_stone_casing"
	}).id("ae2:network/blocks/inscribers")

	kubejs.shaped("4x cmi:sky_stone_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/silver",
		B: '#ae2:all_certus_quartz',
		C: "ae2:smooth_sky_stone_block"
	})

	kubejs.shaped("4x cmi:computing_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/platinum",
		B: 'cmi:single_crystal_silicon',
		C: "cmi:osmium_tile"
	})

	kubejs.shaped("ae2:charger", [
		"ABA",
		"A  ",
		"ABA"
	], {
		A: "#forge:plates/silver",
		B: 'minecraft:amethyst_shard',
	}).id("ae2:network/blocks/crystal_processing_charger")

	kubejs.shaped("ae2:drive", [
		"CAC",
		"DBD",
		"CAC"
	], {
		A: "cmi:smart_mechanism",
		B: 'cmi:sky_stone_casing',
		C: '#forge:plates/silver',
		D: '#ae2:glass_cable',
	}).id("ae2:network/blocks/storage_drive")

	kubejs.shaped("ae2:interface", [
		"A",
		"B",
		"C"
	], {
		A: 'ae2:formation_core',
		B: 'cmi:sky_stone_casing',
		C: 'ae2:annihilation_core',
	}).id("ae2:network/blocks/interfaces_interface")

	kubejs.shapeless('2x ae2:formation_core', [
		"cmi:smart_mechanism",
		"ae2:fluix_dust",
		"#ae2:all_certus_quartz"
	]).id("ae2:materials/formationcore")

	kubejs.shapeless('2x ae2:annihilation_core', [
		"cmi:smart_mechanism",
		"ae2:fluix_dust",
		"minecraft:nether_quartz"
	]).id("ae2:materials/annihilationcore")
})
ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	let casing = "cmi:sky_stone_casing"
	let mech = "cmi:smart_mechanism"
	let mech_a = "cmi:computing_mechanism"
	let silver = "#forge:plates/silver"
	let core_f = "ae2:formation_core"
	let core_a = 'ae2:annihilation_core'

	kubejs.shaped("4x ae2:controller", [
		"SCS",
		"CMC",
		"SCS"
	], {
		M: casing,
		S: "ae2:fluix_crystal",
		C: mech
	}).id("ae2:network/blocks/controller")

	kubejs.shaped("ae2:inscriber", [
		" P ",
		"CZM",
		" P "
	], {
		P: "create:mechanical_press",
		C: "ae2:fluix_crystal",
		M: "create:precision_mechanism",
		Z: casing
	}).id("ae2:network/blocks/inscribers")

	kubejs.shaped("4x cmi:sky_stone_casing", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: silver,
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
		A: silver,
		B: 'minecraft:amethyst_shard',
	}).id("ae2:network/blocks/crystal_processing_charger")

	kubejs.shaped("ae2:drive", [
		"CAC",
		"DBD",
		"CAC"
	], {
		A: mech,
		B: casing,
		C: '#forge:plates/silver',
		D: '#ae2:glass_cable',
	}).id("ae2:network/blocks/storage_drive")

	kubejs.shaped("ae2:interface", [
		"A",
		"B",
		"C"
	], {
		A: core_f,
		B: 'cmi:sky_stone_casing',
		C: core_a,
	}).id("ae2:network/blocks/interfaces_interface")

	kubejs.shapeless('2x ae2:formation_core', [
		mech,
		"ae2:fluix_dust",
		"#ae2:all_certus_quartz"
	]).id("ae2:materials/formationcore")

	kubejs.shapeless('2x ae2:annihilation_core', [
		mech,
		"ae2:fluix_dust",
		"minecraft:quartz"
	]).id("ae2:materials/annihilationcore")

	kubejs.shaped("2x ae2:basic_card", [
		"A",
		"B",
		"C"
	], {
		A: '#forge:plates/gold',
		B: mech,
		C: silver,
	}).id("ae2:materials/basiccard")

	kubejs.shaped("2x ae2:advanced_card", [
		"A",
		"B",
		"C"
	], {
		A: 'minecraft:diamond',
		B: mech,
		C: silver,
	}).id("ae2:materials/advancedcard")

	kubejs.shapeless('ae2:void_card', [
		"#forge:dusts/obsidian",
		"ae2:basic_card"
	]).id("ae2:materials/cardvoid")

	kubejs.shapeless('ae2:speed_card', [
		"cmi:cobalt_mechanism",
		"ae2:advanced_card"
	]).id("ae2:materials/cardspeed")

	kubejs.shapeless('ae2:equal_distribution_card', [
		"minecraft:comparator",
		"ae2:advanced_card"
	]).id("ae2:materials/carddistribution")

	kubejs.shapeless('ae2:spatial_component_2', [
		"minecraft:glowstone_dust",
		mech_a,
		"ae2:fluix_pearl"
	]).id("ae2:network/cells/spatial_components")

	kubejs.shaped("ae2:spatial_component_16", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'minecraft:glowstone_dust',
		B: 'ae2:spatial_component_2',
		C: mech_a,
	}).id("ae2:network/cells/spatial_components_0")

	kubejs.shaped("ae2:spatial_component_128", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'minecraft:glowstone_dust',
		B: 'ae2:spatial_component_16',
		C: mech_a,
	}).id("ae2:network/cells/spatial_components_1")

	kubejs.shapeless('ae2:spatial_component_2', [
		"minecraft:glowstone_dust",
		mech_a,
		"ae2:fluix_pearl"
	]).id("ae2:network/cells/spatial_components")
})
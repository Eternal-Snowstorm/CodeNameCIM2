ServerEvents.recipes((event) => {
	let { kubejs, create } = event.recipes
	let casing = "cmi:sky_stone_casing"
	let casingA = "cmi:computing_casing"
	let mech = "cmi:smart_mechanism"
	let mechA = "cmi:computing_mechanism"
	let silver = "#forge:plates/silver"
	let coreF = "ae2:formation_core"
	let coreA = 'ae2:annihilation_core'

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
		A: coreF,
		B: 'cmi:sky_stone_casing',
		C: coreA,
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


	kubejs.shapeless('ae2:spatial_cell_component_2', [
		"minecraft:glowstone_dust",
		mechA,
		"ae2:fluix_pearl"
	]).id("ae2:network/cells/spatial_components")

	kubejs.shaped("ae2:spatial_cell_component_16", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'minecraft:glowstone_dust',
		B: 'ae2:spatial_cell_component_2',
		C: mechA,
	}).id("ae2:network/cells/spatial_components_0")

	kubejs.shaped("ae2:spatial_cell_component_128", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'minecraft:glowstone_dust',
		B: 'ae2:spatial_cell_component_16',
		C: mechA,
	}).id("ae2:network/cells/spatial_components_1")


	kubejs.shapeless('ae2:cell_component_1k', [
		"minecraft:redstone",
		mech,
		"#ae2:all_certus_quartz"
	]).id("ae2:network/cells/item_storage_components_cell_1k_part")

	kubejs.shaped("ae2:cell_component_4k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'minecraft:redstone',
		B: 'ae2:cell_component_1k',
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_4k_part")

	kubejs.shaped("ae2:cell_component_16k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'minecraft:glowstone_dust',
		B: 'ae2:cell_component_4k',
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_16k_part")

	kubejs.shaped("ae2:cell_component_64k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'minecraft:glowstone_dust',
		B: 'ae2:cell_component_16k',
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_64k_part")

	kubejs.shaped("ae2:cell_component_256k", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: 'ae2:sky_dust',
		B: 'ae2:cell_component_64k',
		C: mech,
	}).id("ae2:network/cells/item_storage_components_cell_256k_part")


	create.mixing("ae2:quartz_glass",
		["#forge:dusts/certus_quartz", "#forge:glass"])

	kubejs.shaped("ae2:wireless_receiver", [
		" A ",
		"BCB",
		" B "
	], {
		A: 'ae2:fluix_pearl',
		B: silver,
		C: "cmi:ender_mechanism",
	}).id("ae2:network/wireless_part")

	kubejs.shaped("ae2:wireless_booster", [
		"ABC",
		"DDD",
	], {
		A: 'ae2:fluix_dust',
		B: mech,
		D: silver,
		C: "cmi:ender_mechanism",
	}).id("ae2:network/wireless_booster")

	kubejs.shaped("ae2:wireless_access_point", [
		"A",
		"B",
	], {
		A: "ae2:wireless_receiver",
		B: mech,
	}).id("ae2:network/wireless_access_point")

	kubejs.shapeless("ae2:quantum_ring", [
		mechA,
		"ae2:energy_cell",
		"#ae2:smart_dense_cable",
		silver,
	]).id("ae2:network/blocks/quantum_ring")

	kubejs.shaped("2x ae2:spatial_pylon", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "ae2:quartz_glass",
		B: "#ae2:glass_cable",
		C: mechA,
		D: casing
	}).id("ae2:network/blocks/spatial_io_pylon")

	kubejs.shaped("ae2:io_port", [
		"CDC",
		"ABA",
		"CDC"
	], {
		A: "ae2:drive",
		C: "#ae2:glass_cable",
		D: mech,
		B: casing
	}).id("ae2:network/blocks/io_port")

	kubejs.shapeless("ae2:spatial_io_port", [
		mechA,
		"ae2:io_port",
		"ae2:spatial_pylon"
	]).id("ae2:network/blocks/spatial_io_port")

	kubejs.shaped("ae2:chest", [
		"A",
		"B",
		"C"
	], {
		A: "ae2:termal",
		C: mech,
		B: "ae2:drive"
	}).id("ae2:network/blocks/storage_chest")

	kubejs.shaped("ae2:cell_workbench", [
		"A",
		"B",
		"C"
	], {
		C: "#forge:chests",
		A: mech,
		B: casing
	}).id("ae2:network/blocks/cell_workbench")

	kubejs.shaped("ae2:condenser", [
		"A",
		"B",
		"C"
	], {
		A: "#forge:dusts/fluix",
		C: mechA,
		B: casingA
	}).id("ae2:network/blocks/io_condenser")

	kubejs.shaped("ae2:energy_acceptor", [
		"A",
		"B",
		"C"
	], {
		A: "#forge:rods/copper",
		B: casing
	}).id("ae2:network/blocks/energy_energy_acceptor")
})
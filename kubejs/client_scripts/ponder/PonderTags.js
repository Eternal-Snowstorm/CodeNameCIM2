Ponder.tags((event) => {
	function addPonderTag(tag, icon, name, item) {
		let index = `${name} Ponder Index`

		const ITEMS = item ? (Array.isArray(item) ? item : [item]) : []
		event.createTag(`${global.namespace}:${tag}`, icon, name, index, ITEMS)
	}

	addPonderTag("ponder", "cmi:creative_mechanism", "Modpack", [
		"cmi:the_accelerator_of_mechanism_power",
		"cmi:water_pump",
		"minecraft:water_bucket",
		"cmi:bronze_casing",
		"mekanism:steam_boiler",
		"mm:large_steam_boiler",
		"mm:large_steam_boiler_fluid_output",
		"mm:large_steam_boiler_fluid_input",
		"mm:large_steam_boiler_item_input",
		"mekanism:steam_bucket",
		"mm:steam_ore_processor",
		"mm:cracker",
		"mm:particle_collision_machine"
	])

	addPonderTag("other", "supplementaries:faucet", "Other", [
		"supplementaries:faucet",
		"portality:controller",
		"portality:frame",
		"portality:module_items",
		"portality:module_fluids",
		"portality:module_energy",
		"portality:module_interdimensional",
		"immersiveindustry:crucible",
		"immersiveindustry:burning_chamber",
		"immersiveengineering:blastfurnace_preheater",
		"immersiveengineering:blastbrick",
		"cmi:crucible_base",
		"cmi:crucible_tuyere",
		"mekanism:cardboard_box"
	])

	addPonderTag("tconstruct", "tconstruct:smeltery_controller", "Tinkers' Construct", [
		"tconstruct:seared_faucet",
		"tconstruct:scorched_faucet",
		"tconstruct:seared_melter",
		"tconstruct:seared_heater",
		"tconstruct:seared_fuel_tank",
		"tconstruct:seared_drain",
		"tconstruct:seared_bricks",
		"tconstruct:foundry_controller",
		"tconstruct:scorched_bricks",
		"tconstruct:scorched_drain",
		"tconstruct:scorched_fuel_tank",
		"tconstruct:smeltery_controller",
		"tconstruct:seared_fuel_tank",
		"tconstruct:seared_drain",
		"tconstruct:seared_bricks"
	])

	addPonderTag("ae2", "ae2:controller", "Applied Energistics 2", [
		"ae2:fluix_glass_cable",
		"ae2:condenser",
		"ae2:controller",
		"ae2:pattern_provider",
		"ae2:crafting_unit",
		"ae2:drive",
		"ae2:me_p2p_tunnel",
		"ae2:quantum_ring",
		"ae2:spatial_io_port",
		"ae2:spatial_pylon",
		"ae2:wireless_access_point"
	])
})
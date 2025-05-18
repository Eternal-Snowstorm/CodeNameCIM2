Ponder.tags((event) => {
	function addPonderTag(tag, icon, name, item) {
		let index = `${name} Ponder Index`

		const ITEMS = item ? (Array.isArray(item) ? item : [item]) : []
		event.createTag(`${global.namespace}:${tag}`, icon, name, index, ITEMS)
	}

	addPonderTag("ponder", "ue_addons:creative_mechanism", "Modpack", [
		"ue_addons:the_accelerator_of_mechanism_power",
		"ue_addons:water_pump",
		"minecraft:water_bucket"
	])

	addPonderTag("other", "supplementaries:faucet", "Other", [
		"supplementaries:faucet",
		"portality:controller",
		"portality:frame",
		"portality:module_items",
		"portality:module_fluids",
		"portality:module_energy",
		"portality:module_interdimensional"
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
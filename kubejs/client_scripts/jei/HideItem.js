JEIEvents.hideItems((event) => {
	function hideItemFromJEI(item) {
		event.hide(item)
	}

	let moltenRawMetalBuckets = [
		"thermal_extra:raw_zinc_bucket",
		"thermal_extra:raw_uranium_bucket",
		"thermal_extra:raw_aluminum_bucket",
		"thermal_extra:raw_copper_bucket",
		"thermal_extra:raw_gold_bucket",
		"thermal_extra:raw_iron_bucket",
		"thermal_extra:raw_lead_bucket",
		"thermal_extra:raw_nickel_bucket",
		"thermal_extra:raw_osmium_bucket",
		"thermal_extra:raw_silver_bucket",
		"thermal_extra:raw_tin_bucket",
		"thermal_extra:raw_arcane_gold_bucket"
	]
	moltenRawMetalBuckets.forEach((bucket) => {
		hideItemFromJEI(bucket)
	})

	hideItemFromJEI("#cmi:io_debug_block")
	hideItemFromJEI("ae2:facade")
	hideItemFromJEI("deepdrilling:crimsite_node")
	hideItemFromJEI("deepdrilling:asurine_node")
	hideItemFromJEI("deepdrilling:ochrum_node")
	hideItemFromJEI("deepdrilling:veridium_node")
	hideItemFromJEI("steampowered:alternator")
	hideItemFromJEI("steampowered:pressurized_steam_container")
	hideItemFromJEI("cmi:parchment")
	hideItemFromJEI("cmi:torn_parchment_a")
	hideItemFromJEI("cmi:torn_parchment_b")
})
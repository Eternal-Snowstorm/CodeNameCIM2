JEIEvents.hideItems((event) => {
	function hideItemFromJEI(item) {
		event.hide(item)
	}

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
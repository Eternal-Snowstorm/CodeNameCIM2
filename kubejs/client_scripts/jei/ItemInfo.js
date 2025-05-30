JEIEvents.information((event) => {
	function addJEIInfo(name) {
		event.addItem(name, Component.translate(`jei.info.${name}`.replace(":", ".")))
	}

	addJEIInfo("cookingforblockheads:sink")
	addJEIInfo("cmi:water_pump")
	addJEIInfo("ad_astra:cryo_fuel_bucket")
	addJEIInfo("ad_astra:ice_shard")
	addJEIInfo("cmi:bucket")
	addJEIInfo("#ad_astra:power_consumption_machines")
	addJEIInfo("engineered_schematics:multiblock_schematic")
	addJEIInfo("cmi:siltsteel_ingot")
})
JEIEvents.information((event) => {
	function addJEIInfo(name) {
		event.addItem(name, Component.translate(`jei.info.${name}`.replace(":", ".")))
	}

	addJEIInfo("cookingforblockheads:sink")
	addJEIInfo("ue_addons:water_pump")
	addJEIInfo("ad_astra:cryo_fuel_bucket")
})
JEIEvents.information((event) => {
	/**
	 * 
	 * @param {Internal.Ingredient_} name 
	 */
	function addJEIInfo(name) {
		let itemInfoTranKey = `jei.info.${name}`.replace(":", ".")
		event.addItem(name, Component.translatable(itemInfoTranKey))
	}

	addJEIInfo("minecraft:andesite")
	addJEIInfo("ad_astra:cryo_fuel_bucket")
	addJEIInfo("cmi:bucket")
	addJEIInfo("#ad_astra:power_consumption_machines")
	addJEIInfo("cmi:andesite_alloy_noodle")
	// addJEIInfo("#cmi:faucet")
	// addJEIInfo("#cmi:liquid_output")
	addJEIInfo("#cmi:peat_gen")
	addJEIInfo("thermal:rubber")
	addJEIInfo("cmi:sludge_extract")
})
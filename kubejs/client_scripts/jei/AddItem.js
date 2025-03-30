JEIEvents.addItems((event) => {
	addItemToJEI("create:chromatic_compound")
	addItemToJEI("create:shadow_steel")
	addItemToJEI("create:shadow_steel_casing")
	addItemToJEI("create:refined_radiance")
	addItemToJEI("create:refined_radiance_casing")
	addItemToJEI("createdieselgenerators:pumpjack_hole")
	addItemToJEI("thermal:rf_coil")
	function addItemToJEI(item) {
		event.add(item)
	}
})
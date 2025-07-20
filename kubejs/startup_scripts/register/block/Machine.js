StartupEvents.registry("block", (event) => {
	function addCustomMachine(name) {
		event.create(`${global.namespace}:${name}`, "custommachinery")
			.machine(`${global.namespace}:${name}`)
			.tag("create:wrench_pickup")
	}

	// addCustomMachine("water_pump")
	addCustomMachine("flash_disk_writer")
	addCustomMachine("chemical_gas_extractor")
	addCustomMachine("simple_centrifuge")
	addCustomMachine("steam_boiler")
})

MMEvents.registerControllers((event) => {
	function addMMController(id) {
		event.create(id)
			.name("")
			.type("mm:machine")
	}

	addMMController("large_steam_boiler")
})

MMEvents.registerPorts((event) => {
	event.create("large_steam_boiler_fluid")
		.name("")
		.controllerId("mm:large_steam_boiler")
		.config("mm:fluid", (builder) => {
			builder.rows(1)
				.columns(1)
				.slotCapacity(10000)
		})

	event.create("large_steam_boiler_item")
		.name("")
		.controllerId("mm:large_steam_boiler")
		.config("mm:item", (builder) => {
			builder.rows(1)
				.columns(1)
		})
})
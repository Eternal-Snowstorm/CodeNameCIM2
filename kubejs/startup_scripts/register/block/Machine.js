StartupEvents.registry("block", (event) => {
	function addCustomMachine(name) {
		return event.create(`${global.namespace}:${name}`, "custommachinery")
			.machine(`${global.namespace}:${name}`)
			.renderType("translucent")
			.tag("create:wrench_pickup")
	}

	// addCustomMachine("water_pump")
	addCustomMachine("flash_disk_writer")
	addCustomMachine("chemical_gas_extractor")
	addCustomMachine("radar_terminal")
})
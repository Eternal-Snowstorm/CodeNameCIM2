StartupEvents.registry("block", (event) => {
	function addCustomMachine(name) {
		let registerCustomMachine =
			event.create(`${global.namespace}:${name}`, "custommachinery")
				.machine(`${global.namespace}:${name}`)
				.tag("create:wrench_pickup")

		return registerCustomMachine
	}

	// addCustomMachine("water_pump")
	addCustomMachine("flash_disk_writer")
	addCustomMachine("chemical_gas_extractor")
	addCustomMachine("simple_centrifuge")
})
StartupEvents.registry("block", (event) => {
	function addCustomMachine(name) {
		let builder =
			event.create(`${global.namespace}:${name}`, "custommachinery")

		builder.machine(`${global.namespace}:${name}`)
		builder.renderType("translucent")
		builder.tag("create:wrench_pickup")

		return builder
	}

	// addCustomMachine("water_pump")
	addCustomMachine("flash_disk_writer")
	addCustomMachine("chemical_gas_extractor")
	addCustomMachine("radar_terminal")
})
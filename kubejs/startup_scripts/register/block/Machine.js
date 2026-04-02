StartupEvents.registry("block", (event) => {
	function addCustomMachine(name) {
		let builder =
			event.create(`${CmiCore.MODID}:${name}`, "custommachinery")

		builder.machine(`${CmiCore.MODID}:${name}`)
		builder.renderType("translucent")
		builder.tag("create:wrench_pickup")

		return builder
	}

	// addCustomMachine("water_pump")
	addCustomMachine("flash_disk_writer")
	addCustomMachine("chemical_gas_extractor")
	addCustomMachine("radar_terminal")
})
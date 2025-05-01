StartupEvents.registry("block", (event) => {
	function addCustomMachine(name) {
		event.create(`${global.namespace}:${name}`, "custommachinery")
			.machine(`${global.namespace}:${name}`)
			.tag("create:wrench_pickup")
	}

	addCustomMachine("water_pump")
	addCustomMachine("flash_disk_writer")
})
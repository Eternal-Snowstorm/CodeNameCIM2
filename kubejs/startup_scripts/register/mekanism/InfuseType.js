StartupEvents.registry("mekanism:infuse_type", (event) => {
	function addMekanismInfuseType(name, color) {
		return event.create(`${global.namespace}:${name}`)
			.color(color)
	}

	addMekanismInfuseType("chaotic_void", 0x790082)
})
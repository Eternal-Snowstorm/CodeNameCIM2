StartupEvents.registry("mekanism:infuse_type", (event) => {
	function addMekanismInfuseType(name, color) {
		return event.create(`${Cmi.MODID}:${name}`)
			.color(color)
	}

	addMekanismInfuseType("chaotic_void", 0x790082)
})
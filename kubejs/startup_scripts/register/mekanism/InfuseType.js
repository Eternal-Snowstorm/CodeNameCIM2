StartupEvents.registry("mekanism:infuse_type", (event) => {
	function addMekanismInfuseType(name, color) {
		return event.create(`${Cmi.MODID}:${name}`)
			.color(color)
	}

	addMekanismInfuseType("chaotic_void", 0x790082)
	addMekanismInfuseType("etrium", 0x32FFD4)
	addMekanismInfuseType("helium", 0xFF80D3)
	addMekanismInfuseType("dense_oxide", 0x2E0A0A)
	addMekanismInfuseType("dense_oxide", 0x00FF00)
})
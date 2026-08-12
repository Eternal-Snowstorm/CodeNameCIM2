StartupEvents.registry("mekanism:infuse_type", (event) => {
	function addMekanismInfuseType(name, color) {
		return event.create(`${Cmi.MODID}:${name}`)
			.color(color)
	}

	// 混沌虚空
	addMekanismInfuseType("chaotic_void", 0x790082)

	// 埃忒恩
	addMekanismInfuseType("etrium", 0x32FFD4)

	// 钴电解质
	addMekanismInfuseType("cobalt_electrolyte", 0x00FF80)

	// 钛氧化物
	addMekanismInfuseType("titanium_oxide", 0xE2B1E3)

	// 灌注锇
	addMekanismInfuseType("infuse_osmium", 0x72A9FF)

	// 灌注量子
	addMekanismInfuseType("infuse_quantum", 0x4A339F)

})
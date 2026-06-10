StartupEvents.registry("mekanism:gas", (event) => {
	function addMekanismGas(name, color) {
		return event.create(`${Cmi.MODID}:${name}`)
			.color(color)
	}

	addMekanismGas("nitroglycerine", 0xFFFBD3)
	addMekanismGas("radon", 0x00FF00)
	addMekanismGas("refined_nuke_waste", 0x7CFC00)
	addMekanismGas("mercury", 0xA9C0FF)
	addMekanismGas("geyser_jet", 0x3D57FF)
})
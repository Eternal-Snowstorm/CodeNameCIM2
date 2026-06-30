StartupEvents.registry("mekanism:gas", (event) => {
	function addMekanismGas(name, color) {
		return event.create(`${Cmi.MODID}:${name}`)
			.color(color)
	}

	addMekanismGas("nitroglycerine", 0xFFFBD3)
	addMekanismGas("radon", 0x00FF00)
	addMekanismGas("radon_mixure", 0x008F00)
	addMekanismGas("refined_nuke_waste", 0x7CFC00)
	addMekanismGas("mercury", 0xA9C0FF)
	addMekanismGas("geyser_jet", 0x3D57FF)
	addMekanismGas("helium_3", 0xFFB0BA)
	addMekanismGas("co", 0x353637)
	addMekanismGas("ch4", 0x142948)
	addMekanismGas("silicon_gas_modulator", 0x002C55)
})
StartupEvents.registry("mekanism:gas", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {MaterialColor} color 
	 * @returns 
	 */
	function addMekanismGas(name, color) {
		return event.create(`${Cmi.MODID}:${name}`)
			.color(color)
	}

	addMekanismGas("nitroglycerine", 0xFFFBD3)
	addMekanismGas("radon", 0x00FF00)
	addMekanismGas("radon_mixure", 0x008F00)
	addMekanismGas("refined_nuke_waste", 0x7CFC00)
	addMekanismGas("mercury", 0xA9C0FF)
	addMekanismGas("mercury_mixture", 0xD2A9FF)
	addMekanismGas("overhot_mercury_mixture", 0xD2A9FF)
	addMekanismGas("geyser_jet", 0x3D57FF)
	addMekanismGas("helium_3", 0xFFB0BA)
	addMekanismGas("co", 0x353637)
	addMekanismGas("ch4", 0x142948)
	addMekanismGas("silicon_gas_modulator", 0x002C55)
	addMekanismGas("fissile_uranium_compound", 0x008000)
	addMekanismGas("high_energy_fission_fuel", 0x00294E)
	addMekanismGas("neutralized_neodymium_slurry", 0x6549B0)
	addMekanismGas("titanium_oxide", 0x60459E)
	addMekanismGas("radioactive_mixture", 0x0D3A59)
	addMekanismGas("plutonium__mixture", 0x50A6AE)
})
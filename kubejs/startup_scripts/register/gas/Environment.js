StartupEvents.registry("mekanism:gas", (event) => {
	function addMekanismGas(name, color) {
		return event.create(`${global.namespace}:${name}`)
			.color(color)
	}

	addMekanismGas("sulfide_gas_mixture", 0xB22222)
	addMekanismGas("nitroglycerine", 0xFFFBD3)
	addMekanismGas("liquid_xenon", 0x1E90FF)
	addMekanismGas("radon", 0xFF1493)
})
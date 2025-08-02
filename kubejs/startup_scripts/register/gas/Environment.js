StartupEvents.registry("mekanism:gas", (event) => {
	function addMekanismGas(name, color) {
		let registerMekanismGas =
			event.create(`${global.namespace}:${name}`)
				.color(color)

		return registerMekanismGas
	}

	addMekanismGas("sulfide_gas_mixture", 0xB22222)
})
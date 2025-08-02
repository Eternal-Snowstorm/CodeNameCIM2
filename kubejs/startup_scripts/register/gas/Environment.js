StartupEvents.registry("mekanism:gas", (event) => {
	function addMekanismGas(name, color) {
		let mekanismGasRegister = event.create(`${global.namespace}:${name}`)
			.color(color)
		console.log(`气体${global.namespace}:${name}已注册!`)

		return mekanismGasRegister
	}

	addMekanismGas("sulfide_gas_mixture", 0xB22222)
})
StartupEvents.registry("mekanism:gas", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @param {number} color 颜色
	 */
	function addMekanismGas(name, color) {
		event.create(`${global.namespace}:${name}`)
			.color(color)
	}

	addMekanismGas("sulfide_gas_mixture", 0xB22222)
})
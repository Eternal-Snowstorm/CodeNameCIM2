StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {String} name 注册ID
	 * @returns 
	 */
	function addMechanismBasement(name) {
		let registerID = `${Cmi.MODID}:${name}_mechanism_basement`
		let builder = event.create(registerID)

		builder.texture(`${Cmi.MODID}:item/mechanism/basement/${name}`)
		builder.tag(`${Cmi.MODID}:mechanism_basement`)

		return builder
	}

	addMechanismBasement("iron")
	addMechanismBasement("copper")
	addMechanismBasement("andesite")

	addMechanismBasement("ender")

	addMechanismBasement("air_tight")
	addMechanismBasement("computing")
	addMechanismBasement("basic_mekanism")
	addMechanismBasement("advanced_mekanism")
	addMechanismBasement("elite_mekanism")
	addMechanismBasement("ultimate_mekanism")

	addMechanismBasement("nuclear")
	addMechanismBasement("antimatter")

	addMechanismBasement("aeronautic")
	addMechanismBasement("astronautic")
})
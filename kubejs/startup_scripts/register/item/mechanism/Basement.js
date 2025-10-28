StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {String} name 注册ID
	 * @returns 
	 */
	function addMechanismBasement(name) {
		let registerID = `${global.namespace}:${name}_mechanism_basement`
		let builder = event.create(registerID)

		builder.texture(`${global.namespace}:item/mechanism/basement/${name}`)
		builder.tag(`${global.namespace}:mechanism_basement`)

		return builder
	}

	addMechanismBasement("iron")
	addMechanismBasement("copper")

	for (let i = 1; i <= 4; i++) {
		addMechanismBasement(`tier_${i}_aviation`)
	}

	addMechanismBasement("basic_mekanism")
	addMechanismBasement("advanced_mekanism")
	addMechanismBasement("elite_mekanism")
	addMechanismBasement("ultimate_mekanism")
})
ClientEvents.lang("en_us", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addMbdLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}`, value)

		event.add(`block.${Cmi.MODID}.${key}_hatch`, `${value} Hatch`)

		event.add(`block.${Cmi.MODID}.${key}_input_bus`, `${value} Input Bus`)
		event.add(`block.${Cmi.MODID}.${key}_output_bus`, `${value} Output Bus`)

		addIOerLang(key, "item", value, "Item")
		addIOerLang(key, "fluid", value, "Fluid")
		addIOerLang(key, "energy", value, "Energy")
		addIOerLang(key, "gas", value, "Gas")
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} type 
	 * @param {String} value 
	 * @param {String} typeValue 
	 */
	function addIOerLang(key, type, value, typeValue) {
		event.add(`block.${Cmi.MODID}.${key}_${type}_input_bus`, `${value + typeValue} Input Bus`)
		event.add(`block.${Cmi.MODID}.${key}_${type}_output_bus`, `${value + typeValue} Output Bus`)
	}

	addMbdLang("reinforced_coke_oven", "Reinforced Coke Odven")
})
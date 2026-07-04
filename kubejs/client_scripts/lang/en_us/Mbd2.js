ClientEvents.lang("en_us", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addMbdLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}`, value)

		event.add(`block.${Cmi.MODID}.${key}_hatch`, `${value} Hatch`)

		addIOerLang(key, "item", value, "Item")
		addIOerLang(key, "fluid", value, "Fluid")
		addIOerLang(key, "energy", value, "Energy")
		addIOerLang(key, "gas", value, "Gas")
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 * @param {String} typeValue 
	 */
	function addIOerLang(key, value, typeValue) {
		event.add(`block.${Cmi.MODID}.${key}_${type}_input`, `${value + typeValue} Output Bin`)
		event.add(`block.${Cmi.MODID}.${key}_${type}_output`, `${value + typeValue} Input Bin`)
	}

	addMbdLang("reinforced_coke_oven", "Reinforced Coke Oven")
})
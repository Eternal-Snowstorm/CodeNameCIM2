ClientEvents.lang("en_us", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addMBDLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}`, value)

		event.add(`block.${Cmi.MODID}.${key}_input_bus`, `${value} Input Bus`)
		event.add(`block.${Cmi.MODID}.${key}_output_bus`, `${value} Output Bus`)

		event.add(`${Cmi.MODID}.${key}`, value)

		addIOerLang(key, "item", value, " Iten")
		addIOerLang(key, "fluid", value, " Fluid")
		addIOerLang(key, "energy", value, " Energy")
		addIOerLang(key, "gas", value, " Gas")
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

	addMBDLang("reinforced_coke_oven", "Reinforced Coke Oven")
	addMBDLang("improved_rubber_extractor", "QM-0726 Improved Rubber Extractor")
	addMBDLang("chemical_reactor", "Chemical Reactor")
	addMBDLang("reinforced_chemical_reactor", "Reinforced Chemical Reactor")
})
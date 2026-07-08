ClientEvents.lang("zh_cn", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addMbdLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}`, value)

		event.add(`block.${Cmi.MODID}.${key}_hatch`, `${value}仓`)

		event.add(`block.${Cmi.MODID}.${key}_input_bus`, `${value}输入总线`)
		event.add(`block.${Cmi.MODID}.${key}_output_bus`, `${value}输出总线`)

		addIOerLang(key, "item", value, "物品")
		addIOerLang(key, "fluid", value, "流体")
		addIOerLang(key, "energy", value, "能量")
		addIOerLang(key, "gas", value, "气体")
	}

	/**
	 * 
	 * @param {String} key 
	 * @param {String} type 
	 * @param {String} value 
	 * @param {String} typeValue 
	 */
	function addIOerLang(key, type, value, typeValue) {
		event.add(`block.${Cmi.MODID}.${key}_${type}_input_bus`, `${value + typeValue}输入总线`)
		event.add(`block.${Cmi.MODID}.${key}_${type}_output_bus`, `${value + typeValue}输出总线`)
	}

	addMbdLang("reinforced_coke_oven", "高级焦炉")
})
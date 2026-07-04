ClientEvents.lang("zh_cn", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String} value 
	 */
	function addMbdLang(key, value) {
		event.add(`block.${Cmi.MODID}.${key}`, value)

		event.add(`block.${Cmi.MODID}.${key}_hatch`, `${value}仓`)

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
		event.add(`block.${Cmi.MODID}.${key}_${type}_input`, `${value + typeValue}输入仓`)
		event.add(`block.${Cmi.MODID}.${key}_${type}_output`, `${value + typeValue}输出仓`)
	}

	addMbdLang("reinforced_coke_oven", "高级焦炉")
})
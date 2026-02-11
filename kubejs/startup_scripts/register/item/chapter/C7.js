StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addItem(name) {
		let chapter = 7
		let builder = event.create(`${global.namespace}:${name}`)

		builder.texture(`${global.namespace}:item/chapter/c${chapter.toString()}/${name}`)

		return builder
	}

	// 黑石源质A
	addItem("alpha_blackstone_source")

	// 黑石源质B
	addItem("beta_blackstone_source")

	// 黑石源质G
	addItem("gamma_blackstone_source")

	// 黑石源质D
	addItem("delta_blackstone_source")

	// 红源晶
	addItem("source_ruby")

	// 蓝源晶
	addItem("source_sapphire")

	// 绿源晶
	addItem("source_emeraid")
})
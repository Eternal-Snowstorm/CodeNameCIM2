StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addItem(name) {
		let chapter = 5
		let builder = event.create(`${global.namespace}:${name}`)

		builder.texture(`${global.namespace}:item/chapter/c${chapter.toString()}/${name}`)

		return builder
	}

	// 硅混合物
	addItem("silicon_mixure")

	// 硅橡胶
	addItem("silicon_rubber")

	// 硅橡胶板
	addItem("silicon_rubber_plate")
})
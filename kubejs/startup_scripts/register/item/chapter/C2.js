StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addItem(name) {
		let chapter = 2
		let builder = event.create(`${global.namespace}:${name}`)

		builder.texture(`${global.namespace}:item/chapter/c${chapter.toString()}/${name}`)

		return builder
	}

	// 橡胶板
	addItem("rubber_plate")
		.tag("forge:plates")
		.tag("forge:plates/rubber")

	// 橡胶树皮
	addItem("rubber_tree_bark")
})
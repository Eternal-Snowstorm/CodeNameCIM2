StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addItem(name) {
		let chapter = 6
		let builder = event.create(`${global.namespace}:${name}`)

		builder.texture(`${global.namespace}:item/chapter/c${chapter.toString()}/${name}`)

		return builder
	}

	// 热力单元
	addItem("thermal_unit")

	// 烈焰燃烧单元
	addItem("blaze_unit")

	// 大地碎裂单元
	addItem("basalz_unit")

	// 狂风催化单元
	addItem("blitz_unit")

	// 暴雪冷凝单元
	addItem("blizz_unit")

	// 生石灰
	addItem("lime")
})
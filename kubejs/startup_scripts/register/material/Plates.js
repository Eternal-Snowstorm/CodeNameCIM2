StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {String} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorPlateItem(name, color) {
		let builder = event.create(`${Cmi.MODID}:${name}_plate`)

		builder.texture(`${Cmi.MODID}:item/material/color/plate/plate`)
		builder.color(0, color)
		builder.tag("forge:plates")
		builder.tag(`forge:plates/${name}`)

		return builder
	}
	/**
	 * 
	 * @param {String} name 
	 * @param {String} type 
	 * @returns 
	 */
	function addNamedPlateItem(name, type) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.texture(`${Cmi.MODID}:item/material/material/plate/${type}`)
		builder.tag("forge:plates")
		builder.tag(`forge:plates/${type}`)

		return builder
	}
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addAlonePlateItem(name) {
		let builder = event.create(`${Cmi.MODID}:${name}_plate`)

		builder.texture(Cmi.loadResource(`item/material/material/plate/${name}`))
		builder.tag("forge:plates")
		builder.tag(`forge:plates/${name}`)

		return builder
	}
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addNonPlateItem(name) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.texture(Cmi.loadResource(`item/material/material/plate/${name}`))

		return builder
	}

	addAlonePlateItem("stone")
	addAlonePlateItem("redstone")
	addAlonePlateItem("rubber")
	addAlonePlateItem("silicon_carbide")
	addAlonePlateItem("silicon_rubber")

	addNamedPlateItem("dense_sturdy_sheet", "dense_obsidian")

	// 线刻硅板
	addNonPlateItem("inscribed_silicon")
})
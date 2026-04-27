StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {String} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorDustItem(name, color) {
		let builder = event.create(`${Cmi.MODID}:${name}_dust`)

		builder.texture(Cmi.loadResource(`item/material/color/dust/dust`))
		builder.color(0, color)
		builder.tag("forge:dusts")
		builder.tag(`forge:dusts/${name}`)

		return builder
	}
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addAloneDustItem(name) {
		let builder = event.create(`${Cmi.MODID}:${name}_dust`)

		builder.texture(Cmi.loadResource(`item/material/material/dust/${name}`))
		builder.tag("forge:dusts")
		builder.tag(`forge:dusts/${name}`)

		return builder
	}
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addNonDustItem(name) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.texture(Cmi.loadResource(`item/material/material/dust/${name}`))

		return builder
	}

	addColorDustItem("end_stone", 0xF6FABD)
	addColorDustItem("rubber", 0xECEBD6)
	addColorDustItem("asurine", 0x4e73ea)
	addColorDustItem("crimsite", 0xbb3c26)
	addColorDustItem("ochrum", 0x9b8005)
	addColorDustItem("veridium", 0x049146)

	addAloneDustItem("andesite")
	addAloneDustItem("calcite")
	addAloneDustItem("lime")
	addAloneDustItem("oil_shale")
	addAloneDustItem("void")

	// 三硝基甲苯
	addNonDustItem("trinitrotoluene")
	// 硝化纤维
	addNonDustItem("nitrocellulose")
	// 生石灰
	addNonDustItem("furnaced_lime")
	// 草木灰
	addNonDustItem("plant_ash")
})
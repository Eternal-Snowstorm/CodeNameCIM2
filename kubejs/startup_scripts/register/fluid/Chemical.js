StartupEvents.registry("fluid", (event) => {
	/**
	  * 
	  * @param {string} name 
	  * @returns 
	  */
	function addAloneFluid(name) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.flowingTexture(Cmi.loadResource(`fluid/${name}/flow`))
		builder.stillTexture(Cmi.loadResource(`fluid/${name}/still`))
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {MaterialColor} color 
	 * @returns 
	 */
	function addColorFluid(name, color) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.color(color)
		builder.bucketColor(color)
		builder.flowingTexture(Cmi.loadResource("fluid/chemical/flow"))
		builder.stillTexture(Cmi.loadResource("fluid/chemical/still"))
		builder.renderType("translucent")
		builder.translucent()
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		return builder
	}

	// 晶体催生剂
	addColorFluid("crystal_catalyt", 0x90EE90)

	//盐酸
	addAloneFluid("hydrochloric_acid")

	// 海水
	addAloneFluid("sea_water")

	// 浓缩海水
	addAloneFluid("concentrated_sea_water")

	// 含锂电解液
	addColorFluid("lithium_containing_electrolyte", 0x555100)

	// 硝酸
	addColorFluid("nitric_acid", 0xD6B000)

	// 卤水
	addColorFluid("brine", 0xA3A189)

	// 碱性卤水
	addColorFluid("alkaline_brine", 0x8FA8A4)

	// 废卤水
	addColorFluid("waste_brine", 0x3C3C3C)

	// 铂溶液
	addColorFluid("platinum_solution", 0xE1FFFF)

	// 铬溶液
	addColorFluid("chromium_solution", 0x98D9D9)

	// 钛溶液
	addColorFluid("titanium_solution", 0xE2B1E3)

	// 钴溶液
	addColorFluid("cobalt_solution", 0x2375DA)

	// 电镀液
	addColorFluid("plating_solution", 0x55AAAA)

	// 铝酸钠溶液
	addColorFluid("sodium_aluminate_solution", 0xAEAEAE)

	// 烧碱溶液
	addColorFluid("caustic_soda_solution", 0xFFFFFF)

})
StartupEvents.registry("fluid", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addFluid(name) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.flowingTexture(`${global.namespace}:fluid/${name}/flow`)
		builder.stillTexture(`${global.namespace}:fluid/${name}/still`)
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
		let builder = event.create(`${global.namespace}:${name}`)

		builder.color(color)
		builder.bucketColor(color)
		builder.flowingTexture(`${global.namespace}:fluid/metal/flow`)
		builder.stillTexture(`${global.namespace}:fluid/metal/still`)
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		return builder
	}

	// 铬电镀液
	addColorFluid("chromium_plating_solution", 0x55AAAA)

	//盐酸
	addFluid("hydrochloric_acid")

	// 含锂电解液
	addColorFluid("lithium_containing_electrolyte", 0x555100)

	// 轻芳烃
	addColorFluid("light_aromatics", 0xEEDD66)

	// 硝酸
	addColorFluid("nitric_acid", 0xD6B000)

	// 三硝基甲苯溶液
	addColorFluid("fluid_nitroglycerine", 0xFFFBD3)

	// 裂化柴油
	addColorFluid("cracked_diesel", 0xDDCCBB)

	// 裂化润滑油
	addColorFluid("cracked_lubricating_oil", 0xFFFF99)

	// 结构塑胶
	addColorFluid("structural_plastic", 0xAABBEE)

	// 轻醛烃
	addColorFluid("light_aldehyde", 0xAACCFF)

	// 聚乙烯醇
	addColorFluid("polyvinyl_alcohol", 0x887799)

	// 乙烯醇
	addColorFluid("vinyl_alcohol", 0x9988AA)

	// 乙炔
	addColorFluid("acetylene", 0xDADEDF)

	// 海水
	addFluid("sea_water")

	// 浓缩海水
	addFluid("concentrated_sea_water")

	// 卤水
	addColorFluid("brine", 0xA3A189)

	// 碱性卤水
	addColorFluid("alkaline_brine", 0x8FA8A4)

	// 废卤水
	addColorFluid("waste_brine", 0x3C3C3C)

	// 光合反应液
	addColorFluid("photosyn_fluid", 0x00FA9A)
})
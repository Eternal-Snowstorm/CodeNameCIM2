StartupEvents.registry("fluid", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addAloneFluid(name) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.flowingTexture(`${global.namespace}:fluid/${name}/flow`)
		builder.stillTexture(`${global.namespace}:fluid/${name}/still`)
		builder.renderType("translucent")

		FluidBucketItemModel.generate(name)

		console.log(`${global.namespace}:${name}已注册!`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {Color_} color 着色色号
	 * @returns 
	 */
	function addColorFluid(name, color) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(`${global.namespace}:fluid/solution/flow`)
		builder.stillTexture(`${global.namespace}:fluid/solution/still`)
		builder.renderType("translucent")

		FluidBucketItemModel.generate(name)

		return builder
	}

	addColorFluid("eletriced_source_emeraid", 0x117458)
	addColorFluid("platinum_solution", 0xE1FFFF)
	addColorFluid("trinitrotoluene_solution", 0xFFEFA8)
	addColorFluid("crystal_catalyt", 0x90EE90)
	addColorFluid("geyser_jet", 0x3D57FF)
	addColorFluid("photosyn_fluid", 0x00FA9A)
	addColorFluid("xenon", 0x1E90FF)
	addColorFluid("radon", 0x00FF00)
	addColorFluid("mercury", 0xA9C0FF)

	addAloneFluid("oil_shale_steam")
		.noBlock()
		.gaseous()
	addAloneFluid("blood")
	addAloneFluid("sludge_suspension")
	addAloneFluid("delta_unstable_solution")
	addAloneFluid("turbid_waste_liquid")
	addAloneFluid("cured_rubber")
		.noBlock()
	addAloneFluid("bromine")
	addAloneFluid("sodium_hydroxide")


	// c5
	
	// addAloneFluid("naphtha") // 石脑油
	// addAloneFluid("lubricating_oil") // 润滑油
	// addAloneFluid("pure_sand") // 纯净沙
	addAloneFluid("molten_bitumen") // 熔融沥青
	addColorFluid("sulfric_diesel", 0xFFDA69) // 含硫柴油
	addAloneFluid("kerosene") // 煤油
	addColorFluid("light_olefins", 0xCED7FF) //轻烯烃
	addColorFluid("light_silicate_ether", 0xBEFFFF) //轻硅醚
	addColorFluid("polysiloxane", 0xAABBEE) //聚硅醚
	addColorFluid("rice_vinegar", 0xE8E4BE) // 米醋
	addColorFluid("acetic_acid", 0xFFFFFF) // 醋酸
	addColorFluid("cracked_gasoline", 0xFFEECC) // 裂化汽油
	addColorFluid("benzene", 0xFFF4AD) // 苯


	// c6

	// addColorFluid("fatty_acid", 0xFFFE9B) // 脂肪酸
	// addColorFluid("glycerin", 0xFFFCB8) // 甘油
	addColorFluid("phenol", 0xAAAA99) // 苯酚
	addColorFluid("light_aromatics", 0xEEDD66) // 轻芳烃
	addColorFluid("nitric_acid", 0xD6B000) // 硝酸
	addColorFluid("fluid_nitroglycerine", 0xFFFBD3) //  三硝基甲苯溶液
	addColorFluid("cracked_diesel", 0xDDCCBB) // 裂化柴油
	addColorFluid("cracked_lubricating_oil", 0xFFFF99) // 裂化润滑油
	addColorFluid("structural_plastic", 0xAACCFF) // 结构塑胶
	addColorFluid("light_aldehyde", 0xAACCFF) // 轻醛烃
	addColorFluid("polyvinyl_alcohol", 0x887799) // 聚乙烯醇
	addColorFluid("vinyl_alcohol", 0x9988AA) // 乙烯醇
	addColorFluid("acetylene", 0xDADEDF) // 乙炔
	addAloneFluid("sea_water") // 海水
	addAloneFluid("concentrated_sea_water") // 浓缩海水
	addColorFluid("brine", 0xAACCFF) // 卤水
	addColorFluid("acidic_brine", 0xAACCFF) // 酸性卤水
	addColorFluid("waste_brine", 0xAACCFF) // 废卤水

	// addAloneFluid("alkaline_concentrated_sea_water") // 碱性浓缩海水
	// addAloneFluid("acidic_concentrated_sea_water") // 酸性浓缩海水
	addAloneFluid("hydrochloric_acid") //盐酸
	addColorFluid("lithium-containing_electrolyte", 0x555100) // 含锂电解液

	
	//c7

	// addColorFluid("tetrachlorosilane", 0xDDFF6E) // 四氯化硅
	addColorFluid("chromium_plating_solution", 0x55AAAA) // 铬电镀液

	
})
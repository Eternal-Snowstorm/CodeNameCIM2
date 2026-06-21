StartupEvents.registry("fluid", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addAloneFluid(name) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.flowingTexture(Cmi.loadResource(`fluid/${name}/flow`))
		builder.stillTexture(Cmi.loadResource(`fluid/${name}/still`))
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		console.log(`${Cmi.MODID}:${name}已注册!`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {MaterialColor} color 着色色号
	 * @returns 
	 */
	function addThickColorFluid(name, color) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(Cmi.loadResource("fluid/metal/flow"))
		builder.stillTexture(Cmi.loadResource("fluid/metal/still"))
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		return builder
	}

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {Color_} color 着色色号
	 * @returns 
	 */
	function addColorFluid(name, color) {
		let builder = event.create(`${Cmi.MODID}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(Cmi.loadResource("fluid/chemical/flow"))
		builder.stillTexture(Cmi.loadResource("fluid/chemical/still"))
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		return builder
	}

	addColorFluid("trinitrotoluene_solution", 0xFFEFA8)
	addColorFluid("radon", 0x00FF00)
	addColorFluid("mercury", 0xA9C0FF)
	addColorFluid("sculk_culture_medium", 0x062E37)
	addColorFluid("hde", 0x564A6A)
	addColorFluid("crystal_etching_solution", 0x364700)
	addColorFluid("sapphire_solution", 0x004BFF)
	addColorFluid("raw_titanium_solution", 0x813DFA)
	addColorFluid("reinforced_titanium_solution", 0x6D26A5)
	addColorFluid("pure_crystal_source", 0xA40058)
	addColorFluid("Helium", 0xFFB0BA)

	addThickColorFluid("silicon_rubber", 0xBBBBBB)
	addThickColorFluid("semi_molten_osmium", 0xA6CCF2)

	addAloneFluid("bitumen")
	addAloneFluid("oil_shale_steam")
		.noBlock()
		.gaseous()
	addAloneFluid("blood")
	addAloneFluid("sludge_suspension")
	addAloneFluid("cured_rubber")
		.noBlock()
	addAloneFluid("bromine")
	addAloneFluid("delta_unstable_solution")
	addAloneFluid("turbid_waste_liquid")
	addAloneFluid("pure_sand")
})
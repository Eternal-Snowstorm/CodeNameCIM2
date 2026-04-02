StartupEvents.registry("fluid", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addAloneFluid(name) {
		let builder = event.create(`${CmiCore.MODID}:${name}`)

		builder.flowingTexture(`${CmiCore.MODID}:fluid/${name}/flow`)
		builder.stillTexture(`${CmiCore.MODID}:fluid/${name}/still`)
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		console.log(`${CmiCore.MODID}:${name}已注册!`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {Color_} color 着色色号
	 * @returns 
	 */
	function addThickColorFluid(name, color) {
		let builder = event.create(`${CmiCore.MODID}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(`${CmiCore.MODID}:fluid/metal/flow`)
		builder.stillTexture(`${CmiCore.MODID}:fluid/metal/still`)
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
		let builder = event.create(`${CmiCore.MODID}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(`${CmiCore.MODID}:fluid/chemical/flow`)
		builder.stillTexture(`${CmiCore.MODID}:fluid/chemical/still`)
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		return builder
	}

	addColorFluid("trinitrotoluene_solution", 0xFFEFA8)
	addColorFluid("geyser_jet", 0x3D57FF)
	addColorFluid("xenon", 0x1E90FF)
	addColorFluid("radon", 0x00FF00)
	addColorFluid("mercury", 0xA9C0FF)

	addThickColorFluid("silicon_rubber", 0xBBBBBB)

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
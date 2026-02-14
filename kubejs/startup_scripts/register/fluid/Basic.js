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
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		console.log(`${global.namespace}:${name}已注册!`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {Color_} color 着色色号
	 * @returns 
	 */
	function addThickColorFluid(name, color) {
		let builder = event.create(`${global.namespace}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(`${global.namespace}:fluid/metal/flow`)
		builder.stillTexture(`${global.namespace}:fluid/metal/still`)
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
		let builder = event.create(`${global.namespace}:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(`${global.namespace}:fluid/chemical/flow`)
		builder.stillTexture(`${global.namespace}:fluid/chemical/still`)
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

})
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
})
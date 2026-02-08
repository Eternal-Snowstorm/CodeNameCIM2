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

	// 晶体催生剂
	addColorFluid("crystal_catalyt", 0x90EE90)

	// Delta不稳定溶液
	addFluid("delta_unstable_solution")

	// 铂溶液
	addColorFluid("platinum_solution", 0xE1FFFF)

	// 钛溶液
	addColorFluid("titanium_solution", 0x71EAFF)

	// 浑浊废液
	addFluid("turbid_waste_liquid")
})
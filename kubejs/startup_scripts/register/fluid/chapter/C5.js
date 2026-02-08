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
		builder.bucketItem.modelJson({
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:${name}`
		})

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
		builder.flowingTexture(`${global.namespace}:fluid/${name}/flow`)
		builder.stillTexture(`${global.namespace}:fluid/${name}/still`)
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		return builder
	}

	// 轻烯烃
	addColorFluid("light_olefin", 0x6FEAFF)

	// 轻硅醚
	addColorFluid("light_silicone_ether", 0xD4CFE8)

	// 聚硅醚
	addColorFluid("polysilicone_ether", 0xF89E3A)

	// 醋酸
	addColorFluid("vinegar_acid", 0xE7FFF3)

	// 苯酚
	addColorFluid("phenol", 0xFFD46F)

	// 裂化汽油
	addColorFluid("distilled_oil", 0xFF6F6F)

	// 煤油
	addColorFluid("kerosene", 0xFF6F6F)

	// 含硫柴油
	addColorFluid("sulfric_diesel", 0xFFDA69)

	// 熔融沥青
	addFluid("bitumen")

	// 硅橡胶
	addColorFluid("silicon_rubber", 0xBBBBBB)

	// 苯
	addColorFluid("benzene", 0xFFF4AD)
})
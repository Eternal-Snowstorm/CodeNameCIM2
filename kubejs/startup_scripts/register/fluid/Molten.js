StartupEvents.registry("fluid", (event) => {
	function addColorMaterialFluid(name, color) {
		let builder = event.create(`${CmiCore.MODID}:molten_${name}`)

		builder.flowingTexture(CmiCore.loadResource("fluid/metal/flow"))
		builder.stillTexture(CmiCore.loadResource("fluid/metal/still"))
		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.tag("forge:molten_materials")
		builder.tag(`forge:molten_${name}`)
		builder.renderType("translucent")
		builder.bucketItem.modelJson(setFluidBucketModel(name))

		console.debug(`molten_${name}已注册!`)
		return builder
	}

})
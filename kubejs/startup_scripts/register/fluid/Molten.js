StartupEvents.registry("fluid", (event) => {
	function addColorMaterialFluid(name, color) {
		let builder = event.create(`${global.namespace}:molten_${name}`)

		builder.flowingTexture(`${global.namespace}:fluid/metal/flow`)
		builder.stillTexture(`${global.namespace}:fluid/metal/still`)
		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.tag("forge:molten_materials")
		builder.tag(`forge:molten_${name}`)
		builder.renderType("translucent")

		// 生成Json模型文件
		FluidBucketItemModel.generate(name)

		console.debug(`molten_${name}已注册!`)
		return builder
	}

	addColorMaterialFluid("source_sapphire", 0x0257F5)
})
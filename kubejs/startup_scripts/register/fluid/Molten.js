StartupEvents.registry("fluid", (event) => {
	function addColorMaterialFluid(name, color) {
		let registerColorMaterialFluid =
			event.create(`${global.namespace}:molten_${name}`)
				.flowingTexture(`${global.namespace}:fluid/metal/flow`)
				.stillTexture(`${global.namespace}:fluid/metal/still`)
				.thinTexture(color)
				.bucketColor(color)
				.displayName(Component.translatable(`${global.namespace}:molten_${name}`))
				.tag("forge:molten_materials")
				.tag(`forge:molten_${name}`)

		// 生成Json模型文件
		FluidBucketItemModel.generate(name)

		console.log(`molten_${name}已注册!`)
		return registerColorMaterialFluid
	}

	addColorMaterialFluid("source_sapphire", 0x0257F5)
})
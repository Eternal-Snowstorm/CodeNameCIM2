StartupEvents.registry("fluid", (event) => {
	function addColorMaterialFluid(name, color) {
		event.create(`${global.namespace}:molten_${name}`)
			.flowingTexture(`${global.namespace}:fluid/metal/flow`)
			.stillTexture(`${global.namespace}:fluid/metal/still`)
			.thinTexture(color)
			.bucketColor(color)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)

		// 生成Json模型文件
		let file = `kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})

		console.log(`molten_${name}已注册!`)
	}

	addColorMaterialFluid("source_sapphire", 0x0257F5)
})
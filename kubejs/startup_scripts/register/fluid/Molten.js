StartupEvents.registry("fluid", (event) => {
	let path = "block/fluid/"
	let fluidRegisters = `${global.namespace}:${path}`

	addColorMaterialFluid("andesite_alloy", 0xC7C8B8)

	function addColorMaterialFluid(name, color) {
		event.create(`${global.namespace}:molten_${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(`${fluidRegisters}flowing`)
			.stillTexture(`${fluidRegisters}still`)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
			.tag(`tconstruct:molten_${name}`)

		// 生成Json模型文件
		JsonIO.write(`kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})

		console.log(`molten_${name}已注册!`)
	}

	function addAloneMaterialFluid(name) {
		event.create(`${global.namespace}:molten_${name}`)
			.flowingTexture(`${fluidRegisters + name}_flowing`)
			.stillTexture(`${fluidRegisters + name}_still`)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
			.tag(`tconstruct:molten_${name}`)

		// 生成Json模型文件
		JsonIO.write(`kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})

		console.log(`molten_${name}已注册!`)
	}
})
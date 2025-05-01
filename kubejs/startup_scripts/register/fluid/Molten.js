StartupEvents.registry("fluid", (event) => {
	let path = "block/fluid/"
	let fluidRegisters = `${global.namespace}:${path}`

	function addAloneMaterialFluid(name) {
		event.create(`${global.namespace}:molten_${name}`)
			.flowingTexture(`${fluidRegisters + name}_flowing`)
			.stillTexture(`${fluidRegisters + name}_still`)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
			.tag(`tconstruct:molten_${name}`)

		// 生成Json模型文件
		let file = `kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})

		console.log(`molten_${name}已注册!`)
	}
})
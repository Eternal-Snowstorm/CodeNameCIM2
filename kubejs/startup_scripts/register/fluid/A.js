//此脚本目前仅救急用！
StartupEvents.registry("fluid", (event) => {
	function addColorMaterialFluid(name, color) {
		event.create(`${global.namespace}:${name}`)
			.flowingTexture(`${global.namespace}:block/fluid/metal/flow`)
			.stillTexture(`${global.namespace}:block/fluid/metal/still`)
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

	}
	addColorMaterialFluid("platinum_solution", 0X3ed2f8)
	addColorMaterialFluid("blood", 0XFF0000)
})
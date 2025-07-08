StartupEvents.registry("fluid", (event) => {
	function addAloneFluid(name) {
		event.create(`${global.namespace}:${name}`)
			.flowingTexture(`${global.namespace}:block/fluid/${name}/flow`)
			.stillTexture(`${global.namespace}:block/fluid/${name}/still`)

		let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:${name}`
		})

		console.log(`${global.namespace}:${name}已注册!`)
	}

	function addColorFluid(name, color) {
		event.create(`${global.namespace}:${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(`${global.namespace}:block/fluid/solution/flow`)
			.stillTexture(`${global.namespace}:block/fluid/solution/still`)

		let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:${name}`
		})
	}

	addColorFluid("eletriced_source_emeraid", 0X117458)
	addColorFluid("platinum_solution", 0xE1FFFF)
	addColorFluid("tetrachlorosilane", 0xDDFF6E)

	addAloneFluid("blood")
	addAloneFluid("delta_unstable_solution")
	addAloneFluid("turbid_waste_liquid")
	addAloneFluid("cured_rubber")
	addAloneFluid("pure_sand")
	addAloneFluid("test_ue_202507081853")
	addAloneFluid("test_ue_202507081905")
})
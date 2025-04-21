StartupEvents.registry("fluid", (event) => {
	function addFluid(name) {
		event.create(`${global.namespace}:${name}`)
			.flowingTexture(`${global.namespace}:block/fluid/${name}/flowing`)
			.stillTexture(`${global.namespace}:block/fluid/${name}/still`)

		let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:${name}`
		})

		console.log(`${global.namespace}:${name}已注册!`)
	}

	addFluid("blood")
})
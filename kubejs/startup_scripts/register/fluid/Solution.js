StartupEvents.registry("fluid", (event) => {
	function addSolution(name, color) {
		event.create(`${global.namespace}:${name}_solution`)
			.flowingTexture(`${global.namespace}:block/fluid/solution/flowing`)
			.stillTexture(`${global.namespace}:block/fluid/solution/still`)
			.thinTexture(color)
			.bucketColor(color)

		let file = `kubejs/assets/${global.namespace}/models/item/${name}_solution_bucket.json`
		JsonIO.write(file, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:${name}`
		})
	}

	addSolution("fecl2", 0xFFFFFF)
	addSolution("feso4", 0xFFFFFF)

	addSolution("cucl2", 0xFFFFFF)
	addSolution("cuso4", 0xFFFFFF)

	addSolution("zncl2", 0xFFFFFF)
	addSolution("znso4", 0xFFFFFF)

	addSolution("alcl3", 0xFFFFFF)
	addSolution("al2so43", 0xFFFFFF)

	addSolution("aucl3", 0xFFFFFF)
	addSolution("au2so43", 0xFFFFFF)

	addSolution("agcl", 0xFFFFFF)
	addSolution("ag2so4", 0xFFFFFF)

	addSolution("pbcl2", 0xFFFFFF)
	addSolution("pbso4", 0xFFFFFF)

	addSolution("crcl3", 0xFFFFFF)
	addSolution("cr2so43", 0xFFFFFF)

	addSolution("sncl2", 0xFFFFFF)
	addSolution("snso4", 0xFFFFFF)

	addSolution("vocl2", 0xFFFFFF)
	addSolution("voso4", 0xFFFFFF)

	addSolution("uo2cl2", 0xFFFFFF)
	addSolution("uo2so4", 0xFFFFFF)

	addSolution("nicl2", 0xFFFFFF)
	addSolution("niso4", 0xFFFFFF)

	addSolution("cocl2", 0xFFFFFF)
	addSolution("coso4", 0xFFFFFF)

	addSolution("oscl3", 0xFFFFFF)
	addSolution("os2so43", 0xFFFFFF)

	addSolution("na2so4", 0xFFFFFF)
	addSolution("nacl", 0xFFFFFF)

	addSolution("caso4", 0xFFFFFF)
	addSolution("cacl2", 0xFFFFFF)

	addSolution("k2so4", 0xFFFFFF)
	addSolution("kcl", 0xFFFFFF)
})
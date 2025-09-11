StartupEvents.registry("item", (event) => {
	function addAloneCrushedRawMaterial(name) {
		let registerAloneCrushedRawMaterial =
			event.create(`${global.namespace}:crushed_raw_${name}`)
				.texture(`${global.namespace}:item/material/crushed/${name}`)
				.tag(`${global.namespace}:raw_metals`)
				.tag("create:crushed_raw_materials")
				.tag(`create:crushed_raw_materials/${name}`)

		return registerAloneCrushedRawMaterial
	}

	addAloneCrushedRawMaterial("desh")
	addAloneCrushedRawMaterial("ostrum")
	addAloneCrushedRawMaterial("calorite")
	addAloneCrushedRawMaterial("cobalt")
	addAloneCrushedRawMaterial("vanadium")
	addAloneCrushedRawMaterial("chromium")
})
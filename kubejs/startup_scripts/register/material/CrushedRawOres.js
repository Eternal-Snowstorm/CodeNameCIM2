StartupEvents.registry("item", (event) => {
	function addAloneCrushedRawMaterial(name) {
		let builder = event.create(`${global.namespace}:crushed_raw_${name}`)
		builder.texture(`${global.namespace}:item/material/crushed/${name}`)
		builder.tag(`${global.namespace}:raw_metals`)
		builder.tag("create:crushed_raw_materials")
		builder.tag(`create:crushed_raw_materials/${name}`)

		return builder
	}

	addAloneCrushedRawMaterial("desh")
	addAloneCrushedRawMaterial("ostrum")
	addAloneCrushedRawMaterial("calorite")
	addAloneCrushedRawMaterial("cobalt")
	addAloneCrushedRawMaterial("vanadium")
	addAloneCrushedRawMaterial("chromium")
	addAloneCrushedRawMaterial("etrium")
	addAloneCrushedRawMaterial("tungsten")
})
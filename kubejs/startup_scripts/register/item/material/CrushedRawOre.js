StartupEvents.registry("item", (event) => {
	function addAloneCrushedRawMaterial(name) {
		let aloneCrushedRawMaterialRegister =
			event.create(`${global.namespace}:crushed_raw_${name}`)
				.texture(`${global.namespace}:item/material/crushed/${name}`)
				.tag(`${global.namespace}:raw_metals`)
				.tag("create:crushed_raw_materials")
				.tag(`create:crushed_raw_materials/${name}`)

		return aloneCrushedRawMaterialRegister
	}

	addAloneCrushedRawMaterial("desh")
	addAloneCrushedRawMaterial("ostrum")
	addAloneCrushedRawMaterial("calorite")
	addAloneCrushedRawMaterial("cobalt")
	addAloneCrushedRawMaterial("vanadium")
	addAloneCrushedRawMaterial("chromium")
	addAloneCrushedRawMaterial("platinum")
})
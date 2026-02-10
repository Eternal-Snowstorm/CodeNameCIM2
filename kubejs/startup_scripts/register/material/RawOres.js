StartupEvents.registry("item", (event) => {
	function addAloneRawMaterial(name) {
		let builder = event.create(`${global.namespace}:raw_${name}`)

		builder.texture(`${global.namespace}:item/material/raw/${name}`)
		builder.tag(`${global.namespace}:raw_metals`)
		builder.tag("forge:raw_materials")
		builder.tag(`forge:raw_materials/${name}`)

		return builder
	}

	addAloneRawMaterial("vanadium")
	addAloneRawMaterial("platinum")
	addAloneRawMaterial("chromium")
	addAloneRawMaterial("tungsten")
	addAloneRawMaterial("etrium")
})
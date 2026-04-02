StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addAloneRawMaterial(name) {
		let builder = event.create(`${CmiCore.MODID}:raw_${name}`)

		builder.texture(`${CmiCore.MODID}:item/material/raw/${name}`)
		builder.tag(`${CmiCore.MODID}:raw_metals`)
		builder.tag("forge:raw_materials")
		builder.tag(`forge:raw_materials/${name}`)

		return builder
	}
	/**
	 * 
	 * @param {String} name 
	 * @returns 
	 */
	function addAloneCrushedRawMaterial(name) {
		let builder = event.create(`${CmiCore.MODID}:crushed_raw_${name}`)
		builder.texture(`${CmiCore.MODID}:item/material/crushed/${name}`)
		builder.tag(`${CmiCore.MODID}:raw_metals`)
		builder.tag("create:crushed_raw_materials")
		builder.tag(`create:crushed_raw_materials/${name}`)

		return builder
	}

	addAloneRawMaterial("vanadium")
	addAloneRawMaterial("platinum")
	addAloneRawMaterial("chromium")
	addAloneRawMaterial("tungsten")
	addAloneRawMaterial("etrium")
	addAloneRawMaterial("titanium")

	addAloneCrushedRawMaterial("desh")
	addAloneCrushedRawMaterial("ostrum")
	addAloneCrushedRawMaterial("calorite")
	addAloneCrushedRawMaterial("cobalt")
	addAloneCrushedRawMaterial("vanadium")
	addAloneCrushedRawMaterial("chromium")
	addAloneCrushedRawMaterial("etrium")
	addAloneCrushedRawMaterial("tungsten")
})
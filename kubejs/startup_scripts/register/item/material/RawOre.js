StartupEvents.registry("item", (event) => {
	function addAloneRawMaterial(name) {
		let registerAloneRawMaterial =
			event.create(`${global.namespace}:raw_${name}`)
				.texture(`${global.namespace}:item/material/raw/${name}`)
				.tag(`${global.namespace}:raw_metals`)
				.tag("forge:raw_materials")
				.tag(`forge:raw_materials/${name}`)

		return registerAloneRawMaterial
	}

	addAloneRawMaterial("vanadium")
	addAloneRawMaterial("platinum")
	addAloneRawMaterial("chromium")

	addAloneRawMaterial("pyrite")
	addAloneRawMaterial("lateritic_nickel")
	addAloneRawMaterial("veridium")
	addAloneRawMaterial("stannine")
	addAloneRawMaterial("sphalerite")
	addAloneRawMaterial("variscite")
	addAloneRawMaterial("galena")
	addAloneRawMaterial("osmiridium")
	addAloneRawMaterial("uraninite")
	addAloneRawMaterial("argentite")
})
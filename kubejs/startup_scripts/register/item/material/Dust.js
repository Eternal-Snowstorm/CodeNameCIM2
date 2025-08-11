StartupEvents.registry("item", (event) => {
	function addColorDustItem(name, color) {
		let registerColorDustItem =
			event.create(`${global.namespace}:${name}_dust`)
				.texture(`${global.namespace}:item/material/color/dust`)
				.color(0, color)
				.tag("forge:dusts")
				.tag(`forge:dusts/${name}`)

		return registerColorDustItem
	}

	function addAloneDustItem(name) {
		let registerAloneDustItem =
			event.create(`${global.namespace}:${name}_dust`)
				.texture(`${global.namespace}:item/material/material/dust/${name}`)
				.tag("forge:dusts")
				.tag(`forge:dusts/${name}`)

		return registerAloneDustItem
	}

	addColorDustItem("end_stone", 0xF6FABD)
	addAloneDustItem("oil_shale")
})
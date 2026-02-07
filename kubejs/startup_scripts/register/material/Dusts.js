StartupEvents.registry("item", (event) => {
	function addColorDustItem(name, color) {
		let builder = event.create(`${global.namespace}:${name}_dust`)

		builder.texture(`${global.namespace}:item/material/color/dust/dust`)
		builder.color(0, color)
		builder.tag("forge:dusts")
		builder.tag(`forge:dusts/${name}`)

		return builder
	}

	function addAloneDustItem(name) {
		let builder = event.create(`${global.namespace}:${name}_dust`)

		builder.texture(`${global.namespace}:item/material/material/dust/${name}`)
		builder.tag("forge:dusts")
		builder.tag(`forge:dusts/${name}`)

		return builder
	}

	addColorDustItem("end_stone", 0xF6FABD)
	addColorDustItem("rubber", 0xECEBD6)
	addAloneDustItem("andesite")
	addAloneDustItem("calcite")
	addAloneDustItem("lime")
	addAloneDustItem("oil_shale")
	addAloneDustItem("void")
})
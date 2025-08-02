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

	addColorDustItem("end_stone", 0xF6FABD)
})
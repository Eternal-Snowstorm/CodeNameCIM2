StartupEvents.registry("item", (event) => {
	function addColorPlateItem(name, color) {
		return event.create(`${global.namespace}:${name}_plate`)
			.texture(`${global.namespace}:item/material/color/plate`)
			.color(0, color)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)
	}

	addColorPlateItem("superconducting_mercury", 0xA9C0FF)
})
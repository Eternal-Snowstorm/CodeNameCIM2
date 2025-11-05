StartupEvents.registry("item", (event) => {
	function addColorIngotItem(name, color) {
		return event.create(`${global.namespace}:${name}_ingot`)
			.texture(`${global.namespace}:item/material/color/ingot`)
			.color(0, color)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)
	}

	addColorIngotItem("superconducting_mercury", 0xA9C0FF)
})
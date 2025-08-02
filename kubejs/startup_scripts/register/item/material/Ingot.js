StartupEvents.registry("item", (event) => {
	function addColorIngotItem(name, color) {
		let addColorIngotItem =
			event.create(`${global.namespace}:${name}_ingot`)
				.texture(`${global.namespace}:item/material/color/ingot`)
				.color(0, color)
				.tag("forge:ingots")
				.tag(`forge:ingots/${name}`)

		return addColorIngotItem
	}
})
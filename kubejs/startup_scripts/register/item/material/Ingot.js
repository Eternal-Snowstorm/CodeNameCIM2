StartupEvents.registry("item", (event) => {
	function addColorIngotItem(name, color) {
		event.create(`${global.namespace}:${name}_ingot`)
			.texture(`${global.namespace}:item/material/color/ingot`)
			.color(0, color)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)
	}
})
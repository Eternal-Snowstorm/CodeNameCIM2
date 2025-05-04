StartupEvents.registry("painting_variant", (event) => {
	event.create(`${global.namespace}:test`)
		.width(16)
		.height(16)
		.tag("minecraft:placeable")
})
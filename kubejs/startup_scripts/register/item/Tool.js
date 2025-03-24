StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:geological_hammer`)
		.rarity("epic")
		.maxStackSize(1)
		.tag("forge:tools")
		.tag("forge:tools/wrench")
		.tag("forge:wrenches")
})
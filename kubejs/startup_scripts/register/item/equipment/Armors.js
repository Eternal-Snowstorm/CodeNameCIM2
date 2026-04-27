StartupEvents.registry("item", (event) => {
	event.create(`${Cmi.MODID}:bucket`, "helmet")
		.texture(Cmi.loadResource("item/armor/bucket"))
		.tier(`${Cmi.MODID}:iron`)
})
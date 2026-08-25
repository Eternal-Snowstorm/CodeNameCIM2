StartupEvents.registry("item", (event) => {
	event.create(`${Cmi.MODID}:bucket`, "helmet")
		.tier(`${Cmi.MODID}:iron`)
		.texture(Cmi.loadResource("item/armor/bucket"))
})
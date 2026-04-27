StartupEvents.registry("item", (event) => {
	event.create(`${CmiCore.MODID}:bucket`, "helmet")
		.texture(CmiCore.loadResource("item/armor/bucket"))
		.tier(`${CmiCore.MODID}:iron`)
})
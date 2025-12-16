NebulaEvents.fluidTooltip((event) => {
	event.add(Fluid.of("cmi:sea_water"), (tooltip) => {
		tooltip.add(Component.translatable("aaa"))
	})
})
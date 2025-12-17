NebulaEvents.fluidTooltip((event) => {
	event.add("cmi:sea_water", (tooltip) => {
		tooltip.add(Component.literal("Debug Fluid Tooltip").blue())
		
	})
})
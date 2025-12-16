NebulaEvents.fluidTooltip((event) => {
	addFluidTooltip("cmi:sea_water", (tooltip) => {
		tooltip.add(Component.translatable("aaa"))
	})

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {Internal.Consumer_<Internal.List<net.minecraft.network.chat.Component>>} hanlder 
	 */
	function addFluidTooltip(fluid, hanlder) {
		event.add(Fluid.of(fluid), hanlder)
	}
})
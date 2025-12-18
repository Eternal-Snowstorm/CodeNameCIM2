NebulaEvents.fluidTooltip((event) => {

	global.metalGroup.forEach((material) => {

		if (IngrUtils.getFirstFluidId(`forge:molten_${material}`) != null) {
			let mp = global.meltingPoints[material]

			event.add(IngrUtils.getFirstFluidId(`forge:molten_${material}`), (tooltip) => {
				tooltip.add(
					Component.translatable(
						"tooltip.cmi.meltingPoint",
						mp,
						NebulaUtils.toFahrenheit(mp)
					).yellow()
				)
			})
		}
	})
})

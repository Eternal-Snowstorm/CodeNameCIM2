// NebulaEvents.fluidTooltip((event) => {
// 	global.metalGroup.forEach((material) => {
// 		if (IngrUtils.getFirstFluidId(`forge:molten_${material}`) !== null) {
// 			let mp = global.meltingPoints[material]
// 			let moltenMetal = IngrUtils.getFirstFluidId(`forge:molten_${material}`)

// 			event.add(moltenMetal, (tooltip) => {
// 				tooltip.add(Component.translatable(
// 					"tooltip.cmi.meltingPoint",
// 					mp,
// 					NebulaUtils.toFahrenheit(mp)
// 				).yellow())
// 			})
// 		}
// 	})
// })
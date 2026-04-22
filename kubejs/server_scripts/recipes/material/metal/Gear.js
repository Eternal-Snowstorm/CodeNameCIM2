ServerEvents.recipes((event) => {
	let { thermal, immersiveengineering } = event.getRecipes()

	CmiMetalRegistry.getAll().forEach((metal) => {
		const INGOT = `#forge:ingots/${metal}`
		const GEAR = `#forge:gears/${metal}`

		if (IngrUtils.isNotNull(GEAR)) {
			thermal.press(GEAR, [
				`4x ${INGOT}`,
				"cmi:gear_mold"
			])

			immersiveengineering.metal_press(GEAR)
				.input(`4x ${INGOT}`)
				.mold("cmi:gear_mold")
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		event.remove([
			{
				type: "thermal:press",
				output: GEAR
			}, {
				type: "immersiveengineering:metal_press",
				output: GEAR
			}
		])
	})
})
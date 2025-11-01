ServerEvents.recipes((event) => {
	let { thermal, immersiveengineering } = event.recipes

	global.metalGroup.forEach((metal) => {
		const INGOT = `#forge:ingots/${metal}`
		const GEAR = `#forge:gears/${metal}`

		if (IngrUtils.isNotNull(GEAR)) {
			thermal.press(GEAR, [
				`4x ${INGOT}`,
				"thermal:press_gear_die"
			])

			immersiveengineering.metal_press(GEAR)
				.input(`4x ${INGOT}`)
				.mold("immersiveengineering:mold_gear")
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

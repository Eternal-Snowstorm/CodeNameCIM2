ServerEvents.recipes((event) => {
	let { create, thermal, immersiveengineering } = event.recipes

	global.metalGroup.forEach((metal) => {
		const INGOT = `#forge:ingots/${metal}`
		const PLATE = `#forge:plates/${metal}`

		if (IngrUtils.isNotNull(PLATE)) {
			create.pressing(PLATE, [
				INGOT
			])
			thermal.press(PLATE, [
				INGOT
			])
			immersiveengineering.metal_press(PLATE)
				.input(INGOT)
				.mold("immersiveengineering:mold_plate")
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		event.remove([
			{
				type: "create:pressing",
				output: PLATE
			}, {
				type: "thermal:press",
				output: PLATE
			}, {
				type: "immersiveengineering:metal_press",
				output: PLATE
			}
		])
	})
})
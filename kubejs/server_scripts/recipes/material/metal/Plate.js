ServerEvents.recipes((event) => {
	let { createdieselgenerators, create, thermal, immersiveengineering } = event.getRecipes()

	CmiMetalRegistry.getAll().forEach((material) => {
		let metal = material.getId().toString()
		const INGOT = `#forge:ingots/${metal}`
		const PLATE = `#forge:plates/${metal}`

		if (IngrUtils.isNotNull(PLATE)) {
			create.pressing(PLATE, [
				INGOT
			])
			createdieselgenerators.hammering(PLATE, [
				INGOT
			])
			thermal.press(PLATE, [
				INGOT,
				"cmi:plate_mold"
			])
			immersiveengineering.metal_press(PLATE)
				.input(INGOT)
				.mold("cmi:plate_mold")
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
ServerEvents.recipes((event) => {
	let { createaddition, thermal, immersiveengineering, createdieselgenerators } = event.getRecipes()

	CmiMetalRegistry.getAll().forEach((material) => {
		let metal = material.getId()
		const INGOT = `#forge:ingots/${metal}`
		const WIRE = `#forge:wires/${metal}`
		const PLATE = `#forge:plates/${metal}`

		if (Ingredient.isNotNull(WIRE)) {
			createaddition.rolling(highPriorityItem(WIRE, 2), [
				PLATE
			])

			createdieselgenerators.wire_cutting(highPriorityItem(WIRE), [
				PLATE
			])

			thermal.press(highPriorityItem(WIRE), [
				INGOT,
				"cmi:wire_mold"
			])

			immersiveengineering.metal_press(highPriorityItem(WIRE))
				.input(INGOT)
				.mold("cmi:wire_mold")
		} else {
			// console.warn(`No wire found for ${metal}!`)
		}

		event.remove([
			{
				type: "createaddition:rolling",
				output: WIRE
			}, {
				type: "createdieselgenerators:wire_cutting",
				output: WIRE
			}, {
				type: "immersiveengineering:metal_press",
				output: WIRE
			}, {
				type: "thermal:press",
				output: WIRE
			}
		])
	})
})
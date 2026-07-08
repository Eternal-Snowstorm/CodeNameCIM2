ServerEvents.recipes((event) => {
	let { createaddition, thermal, immersiveengineering, createdieselgenerators } = event.getRecipes()

	CmiMetalRegistry.getAll().forEach((material) => {
		let metal = material.getId()
		const INGOT = `#forge:ingots/${metal}`
		const ROD = `#forge:rods/${metal}`

		if (Ingredient.isNotNull(ROD)) {
			createaddition.rolling(`2x ${ROD}`, [
				INGOT
			])

			createdieselgenerators.wire_cutting(ROD, [
				INGOT
			])

			thermal.press(`2x ${ROD}`, [
				INGOT,
				"cmi:rod_mold"
			])

			immersiveengineering.metal_press(`2x ${ROD}`)
				.input(INGOT)
				.mold("cmi:rod_mold")
		} else {
			// console.warn(`No rod found for ${metal}!`)
		}

		event.remove([
			{
				type: "createaddition:rolling",
				output: ROD
			}, {
				type: "createdieselgenerators:wire_cutting",
				output: ROD
			}, {
				type: "immersiveengineering:metal_press",
				output: ROD
			}, {
				type: "thermal:press",
				output: ROD
			}
		])
	})
})
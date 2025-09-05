ServerEvents.recipes((event) => {
	let { createaddition, thermal, immersiveengineering } = event.recipes

	global.metalGroup.forEach((metal) => {
		const INGOT = `#forge:ingots/${metal}`
		const ROD = `#forge:rods/${metal}`

		if (IngredientUtils.isNotNull(ROD)) {
			createaddition.rolling(`2x ${ROD}`, [
				INGOT
			])

			thermal.press(`2x ${ROD}`, [
				INGOT,
				"thermal_extra:press_rod_die"
			])

			immersiveengineering.metal_press(`2x ${ROD}`)
				.input(INGOT)
				.mold("immersiveengineering:mold_rod")
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		event.remove([
			{
				type: "createaddition:rolling",
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
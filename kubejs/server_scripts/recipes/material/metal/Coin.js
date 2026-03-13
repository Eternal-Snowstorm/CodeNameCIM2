ServerEvents.recipes((event) => {
	let { thermal, immersiveengineering } = event.getRecipes()

	global.metalGroup.forEach((metal) => {
		const INGOT = `#forge:ingots/${metal}`
		const NUGGET = `#forge:nuggets/${metal}`
		const COIN = `#forge:coins/${metal}`

		if (IngrUtils.isNotNull(COIN)) {
			thermal.press(`3x ${COIN}`, [
				INGOT,
				"cmi:coin_mold"
			])

			immersiveengineering.metal_press(`3x ${COIN}`)
				.input(`${INGOT}`)
				.mold("cmi:coin_mold")

			if (IngrUtils.isNotNull(NUGGET)) {
				thermal.press(COIN, [
					`3x ${NUGGET}`,
					"cmi:coin_mold"
				]).energy(800)

			} else {
				console.warn(`No nuggets found for ${metal}!`)
			}
		} else {
			console.warn(`No coin found for ${metal}!`)
		}

		event.remove([
			{
				type: "thermal:press",
				output: COIN
			}
		])
	})
})
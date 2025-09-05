ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	global.metalGroup.forEach((metal) => {
		const INGOT = `#forge:ingots/${metal}`
		const NUGGET = `#forge:nuggets/${metal}`
		const COIN = `#forge:coins/${metal}`

		if (IngredientUtils.isNotNull(COIN)) {
			thermal.press(`3x ${COIN}`, [
				INGOT,
				"thermal:press_coin_die"
			])
			if (IngredientUtils.isNotNull(NUGGET)) {
				thermal.press(COIN, [
					`3x ${NUGGET}`,
					"thermal:press_coin_die"
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
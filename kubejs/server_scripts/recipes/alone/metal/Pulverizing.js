ServerEvents.recipes((event) => {
    let {
        thermal,
        immersiveengineering,
        mekanism
    } = event.recipes

    global.metalGroup.forEach((metal) => {
        const INGOT = `#forge:ingots/${metal}`
		const RAW_ORE = `#forge:raw_materials/${metal}`
		const RAW_BLOCK = `#forge:storage_blocks/raw_${metal}`
		const ORE = `#forge:ores/${metal}`
		const DUST = `#forge:dusts/${metal}`

        if (IngredientUtils.isNotNull(DUST)) {
			thermal.pulverizer(DUST, [
				INGOT
			]).energy(2000)

			immersiveengineering.crusher(DUST)
				.secondaries([])
				.input(INGOT)

			mekanism.crushing(DUST, INGOT)
			if (IngredientUtils.isNotNull(RAW_ORE)) {
				thermal.pulverizer(Item.of(IngredientUtils.getFirstItemId(DUST)).withChance(1.25), [
					RAW_ORE
				])

				immersiveengineering.crusher(DUST, RAW_ORE)
					.secondaries(Item.of(IngredientUtils.getFirstItemId(DUST)).withChance(1 / 3))

				// mekanism.enriching(`4x ${DUST}`, `3x ${RAW_ORE}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (IngredientUtils.isNotNull(ORE)) {
				thermal.pulverizer(`2x ${DUST}`, [
					ORE
				])

				immersiveengineering.crusher(`2x ${DUST}`)
					.secondaries([])
					.input(ORE)

				// mekanism.enriching(`2x ${DUST}`, ORE)

			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			if (IngredientUtils.isNotNull(RAW_BLOCK)) {
				immersiveengineering.crusher(`12x ${DUST}`)
					.secondaries([])
					.input(RAW_BLOCK)

				// mekanism.enriching(`12x ${DUST}`, RAW_BLOCK)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}

		} else {
			console.warn(`No dust found for ${metal}!`)

		}

		event.remove([
			{
				type: "immersiveengineering:crusher",
				output: DUST
			}, {
				type: "thermal:pulverizer",
				output: DUST
			}, {
				type: "mekanism:crushing",
				output: DUST
			}
		])
    })
})
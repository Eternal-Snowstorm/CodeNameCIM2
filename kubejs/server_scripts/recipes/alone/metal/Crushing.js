ServerEvents.recipes((event) => {
    let { create } = event.recipes

    global.materials.forEach((material) => {
        const RAW_ORE = `#forge:raw_materials/${metal}`
		const RAW_BLOCK = `#forge:storage_blocks/raw_${metal}`
		const CRUSHED = `#create:crushed_raw_materials/${metal}`
		const ORE = `#forge:ores/${metal}`
        const EXP_NUGGET = "create:experience_nugget"

        if (IngredientUtils.isNotNull(CRUSHED)) {
			if (IngredientUtils.isNotNull(RAW_BLOCK)) {
				create.crushing([
					`9x ${CRUSHED}`,
					Item.of(`9x ${EXP_NUGGET}`).withChance(0.75)
				], RAW_BLOCK)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			if (IngredientUtils.isNotNull(RAW_ORE)) {
				create.crushing([
					CRUSHED,
					Item.of(EXP_NUGGET).withChance(0.75)
				], RAW_ORE)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (IngredientUtils.isNotNull(ORE)) {
				create.crushing([
					CRUSHED,
					Item.of(IngredientUtils.getFirstItemId(CRUSHED)).withChance(0.75),
					Item.of(EXP_NUGGET).withChance(0.75),
					Item.of("minecraft:cobblestone").withChance(0.125)
				], ORE)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
		} else {
			console.warn(`No crushed raw material found for ${metal}!`)
		}

		event.remove([
			{
				type: "create:crushing",
				output: CRUSHED
			}, {
				type: "create:crushing",
				output: RAW_ORE
			}
		])
    })
})
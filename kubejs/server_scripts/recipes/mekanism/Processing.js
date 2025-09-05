ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	let materials = [
		"copper",
		"iron",
		"zinc",
		"aluminum",
		"nickel",
		"platinum",
		"chromium",
		"vanadium",
		"tin",
		"silver",
		"gold",
		"lead",
		"uranium",
		"cobalt",
		"osmium"
	]
	materials.forEach((material) => {
		const SHARD = `#mekanism:shards/${material}`
		const CLUMP = `#mekanism:clumps/${material}`
		const DIRTY_DUST = `#mekanism:dirty_dusts/${material}`
		const DUST = `#forge:dusts/${material}`

		if (IngredientUtils.isNotNull(`#forge:raw_materials/${material}`)) {
			mekanism.purifying(
				`2x ${CLUMP}`,
				`#forge:raw_materials/${material}`,
				"1x cmi:nitroglycerine"
			).id(`mekanism:processing/${material}/clump/from_raw_ore`)
		}

		if (IngredientUtils.isNotNull(`#forge:storage_blocks/raw_${material}`)) {
			mekanism.purifying(
				`18x ${CLUMP}`,
				`#forge:storage_blocks/raw_${material}`,
				"2x cmi:nitroglycerine"
			).id(`mekanism:processing/${material}/clump/from_raw_block`)
		}

		if (IngredientUtils.isNotNull(`#forge:ores/${material}`)) {
			mekanism.purifying(
				`3x ${CLUMP}`,
				`#forge:ores/${material}`,
				"1x cmi:nitroglycerine"
			).id(`mekanism:processing/${material}/clump/from_ore`)
		}

		if (IngredientUtils.isNotNull(SHARD)) {
			mekanism.purifying(
				CLUMP,
				SHARD,
				"1x cmi:nitroglycerine"
			).id(`mekanism:processing/${material}/clump/from_shard`)
		}

		if (IngredientUtils.isNotNull(CLUMP)) {
			mekanism.crushing(
				DIRTY_DUST,
				CLUMP
			).id(`mekanism:processing/${material}/dirty_dust/from_clump`)
		}

		if (IngredientUtils.isNotNull(DIRTY_DUST)) {
			mekanism.enriching(
				DUST,
				DIRTY_DUST
			).id(`mekanism:processing/${material}/dust/from_dirty_dust`)
		}
	})
})
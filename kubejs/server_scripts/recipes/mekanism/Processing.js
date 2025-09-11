function getSlurry(material) {
	let slurry = null

	if (material === "gold") {
		return null
	} else if (MekanismType.Slurry.exists(`mekanism:clean_${material}`)) {
		slurry = `mekanism:clean_${material}`
	} else if (MekanismType.Slurry.exists(`cmi:${material}_slurry`)) {
		slurry = `cmi:${material}_slurry`
	}
	return slurry
}

function getDirtySlurry(material) {
	let dirtySlurry = null

	if (material === "gold") {
		return null
	} else if (MekanismType.Slurry.exists(`mekanism:dirty_${material}`)) {
		dirtySlurry = `mekanism:dirty_${material}`
	} else if (MekanismType.Slurry.exists(`cmi:dirty_${material}_slurry`)) {
		dirtySlurry = `cmi:dirty_${material}_slurry`
	}
	return dirtySlurry
}

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
ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	mekanism.gas_conversion("cmi:trinitrotoluene",
		"100x cmi:nitroglycerine"
	)

	materials.forEach((material) => {
		let CRYSTAL = `#mekanism:crystals/${material}`
		let SHARD = `#mekanism:shards/${material}`
		let CLUMP = `#mekanism:clumps/${material}`
		let DIRTY_DUST = `#mekanism:dirty_dusts/${material}`
		let DUST = `#forge:dusts/${material}`
		let SLURRY = getSlurry(material)
		let DIRTY_SLURRY = getDirtySlurry(material)

		if (DIRTY_SLURRY !== null) {
			if (IngredientUtils.isNotNull(`#forge:raw_materials/${material}`)) {
				mekanism.dissolution(
					MekanismType.Slurry.of(DIRTY_SLURRY, 2000),
					MekanismType.Gas.of("mekanism:sulfuric_acid", 1),
					`3x #forge:raw_materials/${material}`
				).id(`mekanism:processing/${material}/slurry/dirty/from_raw_ore`)
			}
			if (IngredientUtils.isNotNull(`#forge:storage_blocks/raw_${material}`)) {
				mekanism.dissolution(
					MekanismType.Slurry.of(DIRTY_SLURRY, 6000),
					MekanismType.Gas.of("mekanism:sulfuric_acid", 2),
					`#forge:storage_blocks/raw_${material}`
				).id(`mekanism:processing/${material}/slurry/dirty/from_raw_block`)
			}
			if (IngredientUtils.isNotNull(`#forge:ores/${material}`)) {
				mekanism.dissolution(
					MekanismType.Slurry.of(DIRTY_SLURRY, 1000),
					MekanismType.Gas.of("mekanism:sulfuric_acid", 1),
					`#forge:ores/${material}`
				).id(`mekanism:processing/${material}/slurry/dirty/from_ore`)
			}
			if (SLURRY !== null) {
				mekanism.washing(
					Fluid.of("minecraft:water", 5),
					MekanismType.Slurry.of(DIRTY_SLURRY, 1),
					MekanismType.Slurry.of(SLURRY, 1)
				).id(`mekanism:processing/${material}/slurry/clean`)
			}
		}

		if (IngredientUtils.isNotNull(CRYSTAL)) {
			if (SLURRY !== null) {
				mekanism.crystallizing(
					"slurry",
					CRYSTAL,
					MekanismType.Slurry.of(SLURRY, 200)
				).id(`mekanism:processing/${material}/crystal/from_slurry`)
			}
		}

		if (IngredientUtils.isNotNull(SHARD)) {
			if (IngredientUtils.isNotNull(`#forge:raw_materials/${material}`)) {
				mekanism.injecting(
					`8x ${SHARD}`,
					`3x #forge:raw_materials/${material}`,
					"1x mekanism:hydrogen_chloride"
				).id(`mekanism:processing/${material}/shard/from_raw_ore`)
			}

			if (IngredientUtils.isNotNull(`#forge:storage_blocks/raw_${material}`)) {
				mekanism.injecting(
					`24x ${SHARD}`,
					`#forge:storage_blocks/raw_${material}`,
					"2x mekanism:hydrogen_chloride"
				).id(`mekanism:processing/${material}/shard/from_raw_block`)
			}

			if (IngredientUtils.isNotNull(`#forge:ores/${material}`)) {
				mekanism.injecting(
					`4x ${SHARD}`,
					`#forge:ores/${material}`,
					"1x mekanism:hydrogen_chloride"
				).id(`mekanism:processing/${material}/shard/from_ore`)
			}

			if (IngredientUtils.isNotNull(CRYSTAL)) {
				mekanism.injecting(
					SHARD,
					CRYSTAL,
					"1x mekanism:hydrogen_chloride"
				).id(`mekanism:processing/${material}/shard/from_crystal`)
			}
		}

		if (IngredientUtils.isNotNull(CLUMP)) {
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

			if (IngredientUtils.isNotNull(DIRTY_DUST)) {
				mekanism.crushing(
					DIRTY_DUST,
					CLUMP
				).id(`mekanism:processing/${material}/dirty_dust/from_clump`)
			}
		}

		if (IngredientUtils.isNotNull(DIRTY_DUST) && IngredientUtils.isNotNull(DUST)) {
			mekanism.enriching(
				DUST,
				DIRTY_DUST
			).id(`mekanism:processing/${material}/dust/from_dirty_dust`)
		}
	})
})
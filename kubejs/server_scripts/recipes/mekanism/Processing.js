let materials = ["copper", "iron", "zinc", "aluminum", "nickel", "platinum", "chromium", "vanadium", "tin", "silver", "gold", "lead", "uranium", "cobalt", "osmium"]

materials.forEach((material) => {

    let clumpIds = Ingredient.of(`#mekanism:clumps/${material}`).getItemIds()
    let dirtyDustIds = Ingredient.of(`#mekanism:dirty_dusts/${material}`).getItemIds()
    let dustIds = Ingredient.of(`#forge:dusts/${material}`).getItemIds()

    ServerEvents.recipes((event) => {
        let { mekanism, kubejs } = event.recipes

        if (IngredientUtils.isNotNull(`#forge:raw_materials/${material}`)) {
            mekanism.purifying(
                Item.of(clumpIds[0], 2),
                `#forge:raw_materials/${material}`,
                "2x cmi:nitroglycerine"
            )
                .id(`mekanism:processing/${material}/clump/from_raw_ore`)
        }

        if (IngredientUtils.isNotNull(`#forge:storage_blocks/raw_${material}`)) {
            mekanism.purifying(
                Item.of(clumpIds[0], 18),
                `#forge:storage_blocks/raw_${material}`,
                "2x cmi:nitroglycerine"
            )
                .id(`mekanism:processing/${material}/clump/from_raw_block`)
        }

        if (IngredientUtils.isNotNull(`#forge:ores/${material}`)) {
            mekanism.purifying(
                Item.of(clumpIds[0], 3),
                `#forge:ores/${material}`,
                "2x cmi:nitroglycerine"
            )
                .id(`mekanism:processing/${material}/clump/from_ore`)
        }

        if (IngredientUtils.isNotNull(`#mekanism:shards/${material}`)) {
            mekanism.purifying(
                Item.of(clumpIds[0], 1),
                `#mekanism:shards/${material}`,
                "1x cmi:nitroglycerine"
            )
                .id(`mekanism:processing/${material}/clump/from_shard`)
        }

        mekanism.crushing(
            dirtyDustIds[0],
            `#mekanism:clumps/${material}`
        )
            .id(`mekanism:processing/${material}/dirty_dust/from_clump`)

        mekanism.enriching(
            dustIds[0],
            `#mekanism:dirty_dusts/${material}`
        )
            .id(`mekanism:processing/${material}/dust/from_dirty_dust`)

    })
})

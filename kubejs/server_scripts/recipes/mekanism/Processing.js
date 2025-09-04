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

    ServerEvents.recipes((event) => {
        let { mekanism } = event.recipes

        mekanism.purifying(
            `2x ${CLUMP}`,
            `#forge:raw_materials/${material}`,
            "2x cmi:nitroglycerine"
        ).id(`mekanism:processing/${material}/clump/from_raw_ore`)

        mekanism.purifying(
            `18x ${CLUMP}`,
            `#forge:storage_blocks/raw_${material}`,
            "2x cmi:nitroglycerine"
        ).id(`mekanism:processing/${material}/clump/from_raw_block`)

        mekanism.purifying(
            `3x ${CLUMP}`,
            `#forge:ores/${material}`,
            "2x cmi:nitroglycerine"
        ).id(`mekanism:processing/${material}/clump/from_ore`)

        mekanism.purifying(
            CLUMP,
            SHARD,
            "cmi:nitroglycerine"
        ).id(`mekanism:processing/${material}/clump/from_shard`)

        mekanism.crushing(
            DIRTY_DUST,
            CLUMP
        ).id(`mekanism:processing/${material}/dirty_dust/from_clump`)

        mekanism.enriching(
            DUST,
            DIRTY_DUST
        ).id(`mekanism:processing/${material}/dust/from_dirty_dust`)

    })
})

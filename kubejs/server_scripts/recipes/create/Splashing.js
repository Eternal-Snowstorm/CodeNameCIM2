ServerEvents.recipes((event) => {
    let { create } = event.recipes

    event.remove({
        type: "create:splashing",
        input: "#create:crushed_raw_materials"
    })

    addCrushedSplashing("iron", "minecraft:redstone")
    addCrushedSplashing("gold", "thermal:quartz_dust")
    addCrushedSplashing("copper", "minecraft:clay_ball")
    addCrushedSplashing("zinc", "minecraft:gunpowder")
    addCrushedSplashing("osmium", "mekanism:dust_fluorite")
    addCrushedSplashing("platinum", "minecraft:glowstone_dust")
    addCrushedSplashing("silver", "cmi:sludge_extract")
    addCrushedSplashing("tin", "cmi:andesite_dust")
    addCrushedSplashing("lead", "mekanism:dust_lapis_lazuli")
    addCrushedSplashing("aluminum", "cmi:oil_shale_dust")
    addCrushedSplashing("uranium", "immersiveengineering:dust_sulfur")
    addCrushedSplashing("nickel", "mekanism:dust_emerald")
    addCrushedSplashing("cobalt", "thermal_extra:soul_sand_dust")
    addCrushedSplashing("vanadium", "thermal_extra:amethyst_dust")
    addCrushedSplashing("chromium", "mekanism:dust_obsidian")

    function addCrushedSplashing(material, by_product) {
        let crushed = `#create:crushed_raw_materials/${material}`
        let dust = Ingredient.of(`#forge:dusts/${material}`).getItemIds()
        create.splashing([
            dust[0],
            Item.of(by_product).withChance(0.25)
        ], crushed
        )
    }

    create.splashing([
        "9x ad_astra:desh_nugget",
        Item.of("immersiveengineering:slag").withChance(0.25)
    ], "cmi:crushed_raw_desh"
    )

    create.splashing([
        "9x ad_astra:ostrum_nugget",
        Item.of("mekanism:salt").withChance(0.25)
    ], "cmi:crushed_raw_ostrum"
    )

    create.splashing([
        "9x ad_astra:calorite_nugget",
        Item.of("mekanism:dust_coal").withChance(0.25)
    ], "cmi:crushed_raw_calorite"
    )
})
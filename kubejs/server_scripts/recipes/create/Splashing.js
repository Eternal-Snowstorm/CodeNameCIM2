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
    addCrushedSplashing("lead", "minecraft:sugar")
    addCrushedSplashing("aluminum", "cmi:oil_shale_dust")
    addCrushedSplashing("uranium", "immersiveengineering:dust_sulfur")
    addCrushedSplashing("nickel", "mekanism:dust_emerald")
    addCrushedSplashing("cobalt", "thermal_extra:soul_sand_dust")
    addCrushedSplashing("vanadium", "thermal_extra:amethyst_dust")
    addCrushedSplashing("chromium", "mekanism:dust_obsidian")
    addCrushedSplashing("desh", "immersiveengineering:slag")
    addCrushedSplashing("ostrum", "mekanism:salt")
    addCrushedSplashing("calorite", "mekanism:dust_coal")
    addCrushedSplashing("etrium", "ae2:certus_quartz_dust")

    function addCrushedSplashing(material, by_product) {
        let crushed = `#create:crushed_raw_materials/${material}`
        let dust = Ingredient.of(`#forge:dusts/${material}`).getItemIds()
        create.splashing([
            dust[0],
            Item.of(by_product).withChance(0.25)
        ], crushed
        )
    }
})
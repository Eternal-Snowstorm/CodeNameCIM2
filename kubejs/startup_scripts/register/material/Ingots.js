StartupEvents.registry("item", (event) => {
    /**
     * 
     * @param {String} name 
     * @param {Color} color 
     * @returns 
     */
    function addColorIngotItem(name, color) {
        let builder = event.create(`${Cmi.MODID}:${name}_ingot`)

        builder.texture(Cmi.loadResource(`item/material/color/ingot/ingot`))
        builder.color(0, color)
        builder.tag("forge:ingots")
        builder.tag(`forge:ingots/${name}`)

        return builder
    }
    /**
     * 
     * @param {String} name 
     * @param {String} type 
     * @returns 
     */
    function addNamedIngotItem(name, type) {
        let builder = event.create(`${Cmi.MODID}:${name}`)

        builder.texture(Cmi.loadResource(`item/material/material/ingot/${type}`))
        builder.tag("forge:ingots")
        builder.tag(`forge:ingots/${type}`)

        return builder
    }
    /**
     * 
     * @param {String} name 
     * @returns 
     */
    function addAloneIngotItem(name) {
        let builder = event.create(`${Cmi.MODID}:${name}_ingot`)

        builder.texture(Cmi.loadResource(`item/material/material/ingot/${name}`))
        builder.tag("forge:ingots")
        builder.tag(`forge:ingots/${name}`)

        return builder
    }
    /**
     * 
     * @param {String} name 
     * @returns 
     */
    function addNonIngotItem(name) {
        let builder = event.create(`${Cmi.MODID}:${name}`)

        builder.texture(Cmi.loadResource(`item/material/material/ingot/${name}`))

        return builder
    }


    // 安山混合物
    addNonIngotItem("andesite_aggregate")
        .tag("forge:bricks")

    // 耐火砖柸
    addNonIngotItem("refractory_brick_bloom")

    // 精炼铁方坯
    addNonIngotItem("refined_iron_bloom")

    // 碳化硅
    addNonIngotItem("silicon_carbide")

    // 超载合金锭
    addAloneIngotItem("overcharged_alloy")
        .rarity("epic")

    // 富集合金
    addNonIngotItem("enriched_alloy")
        .rarity("extra_green")
        .tag("forge:alloys")
        .tag("forge:alloys/enriched")
        .tag("mekanism:alloys")
        .tag("mekanism:alloys/enriched")
})
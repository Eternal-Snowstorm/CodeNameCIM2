StartupEvents.registry("block", (event) => {
    event.create(`${global.namespace}:cracked_concrete`)
        .soundType(SoundType.METAL)
        .requiresTool(true)
        .textureAll(`${global.namespace}:block/space/concrete_crack`)
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .hardness(50)

    event.create(`${global.namespace}:reinforced_concrete`)
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll(`${global.namespace}:block/space/concrete`)
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")

    function barModel(barType) {

        const BAR = `cmi:block/space/${barType}`

        return {
            parent: "cmi:block/space/bars",
            textures: {
                "bar": BAR
            }
        }
    }

    function addBarBlock(name) {
        let builder =
            event.create(`${global.namespace}:${name}`, "cardinal")

        builder.soundType(SoundType.METAL)
        builder.noDrops()
        builder.defaultCutout()
        builder.requiresTool(true)
        builder.waterlogged()
        builder.notSolid()
        builder.tagBlock(global.ToolType["pickaxe"])
        builder.tagBlock(global.MiningLevel["iron"])
        builder.tagBlock("ae2:blacklisted/spatial")
        builder.tagBlock("mekanism:cardboard_blacklist")
        builder.hardness(5)

        builder.modelJson = barModel(name)

        return builder
    }

    addBarBlock("bar_acid")
    addBarBlock("bar_concrete")
    addBarBlock("bar_normal")
    addBarBlock("bar_rust")
    addBarBlock("bar_rust_concrete")
})
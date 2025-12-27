StartupEvents.registry("block", (event) => {
    /**
     * 
     * @param {String} name 注册id
     * @param {"basic" | "detector" | "slab" | "stairs" | "fence" | "wall" | "fence_gate" | "pressure_plate" | "button" | "falling" | "crop" | "cardinal" | "carpet" | "animatable" | "custommachinery"} type 注册类型
     */
    function addBlock(name, type) {
        if (type === undefined) {
            return event.create(`${global.namespace}:${name}`)
        }
        return event.create(`${global.namespace}:${name}`, type)
    }

    addBlock(`cracked_concrete`)
        .soundType(SoundType.METAL)
        .requiresTool(true)
        .textureAll(`${global.namespace}:block/space/concrete_crack`)
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])

    addBlock(`gray_reinforced_concrete`)
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/andesite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    addBlock(`white_reinforced_concrete`)
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/diorite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    addBlock(`gray_reinforced_concrete_wall`, "wall")
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/andesite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    addBlock(`white_reinforced_concrete_wall`, "wall")
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/diorite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    addBlock(`gray_reinforced_concrete_stairs`, "stairs")
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/andesite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    addBlock(`white_reinforced_concrete_stairs`, "stairs")
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/diorite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    addBlock(`gray_reinforced_concrete_slab`, "slab")
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/andesite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    addBlock(`white_reinforced_concrete_slab`, "slab")
        .soundType(SoundType.METAL)
        .noDrops()
        .requiresTool(true)
        .textureAll("create:block/palettes/stone_types/polished/diorite_cut_polished")
        .tagBlock(global.ToolType["pickaxe"])
        .tagBlock(global.MiningLevel["iron"])
        .tagBlock("ae2:blacklisted/spatial")
        .tagBlock("mekanism:cardboard_blacklist")
        .hardness(50)

    function barModel(barType) {

        const BAR = `cmi:block/space/${barType}`

        return {
            parent: "cmi:block/space/bars",
            textures: {
                bar: BAR
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

    for (let i = 1; i <= 4; i++) {
        // 雷达
        addBlock(`radar_${i}`)
            .soundType(SoundType.NETHERITE_BLOCK)
            .waterlogged()
            .hardness(-1)
            .resistance(-1)
            .model(`${global.namespace}:block/radar`)
            .box(6, 0, 6, 10, 16, 10, true)

        // 损坏雷达
        addBlock(`broken_radar_${i}`)
            .soundType(SoundType.NETHERITE_BLOCK)
            .waterlogged()
            .hardness(-1)
            .resistance(-1)
            .model(`${global.namespace}:block/broken_radar_part/radar`)
            .box(6, 0, 6, 10, 16, 10, true)
    }

    // 变压器
    addBlock("transformer")
        .soundType(SoundType.NETHERITE_BLOCK)
        .waterlogged()
        .hardness(-1)
        .resistance(-1)
        .model(`${global.namespace}:block/transformer`)

    // 损坏变压器
    addBlock("broken_transformer")
        .soundType(SoundType.NETHERITE_BLOCK)
        .waterlogged()
        .hardness(-1)
        .resistance(-1)
        .model(`${global.namespace}:block/broken_radar_part/transformer`)
        .notSolid()

    // 调制解调器
    addBlock("modem")
        .soundType(SoundType.NETHERITE_BLOCK)
        .waterlogged()
        .hardness(-1)
        .resistance(-1)
        .model(`${global.namespace}:block/modem`)
        .notSolid()

    // 损坏的调制解调器
    let dimensions = [
        "overworld",
        "moon",
        "mars",
        "mercury"
    ]
    dimensions.forEach((dim) => {
        addBlock(`broken_modem_${dim}`)
            .soundType(SoundType.NETHERITE_BLOCK)
            .waterlogged()
            .hardness(-1)
            .resistance(-1)
            .model(`${global.namespace}:block/broken_radar_part/modem`)
            .notSolid()
    })

    // 追踪阵列
    addBlock("tracking_array")
        .soundType(SoundType.NETHERITE_BLOCK)
        .waterlogged()
        .hardness(-1)
        .resistance(-1)
        .model(`${global.namespace}:block/tracking_array`)

    // 损坏的追踪阵列
    addBlock("broken_tracking_array")
        .soundType(SoundType.NETHERITE_BLOCK)
        .waterlogged()
        .hardness(-1)
        .resistance(-1)
        .model(`${global.namespace}:block/broken_radar_part/tracking_array`)
        .notSolid()

    // 电源
    addBlock("power_supply")
        .soundType(SoundType.NETHERITE_BLOCK)
        .waterlogged()
        .hardness(-1)
        .resistance(-1)
        .model(`${global.namespace}:block/power_supply`)

    // 损坏的电源
    addBlock("broken_power_supply")
        .soundType(SoundType.NETHERITE_BLOCK)
        .waterlogged()
        .hardness(-1)
        .resistance(-1)
        .model(`${global.namespace}:block/broken_radar_part/power_supply`)
        .notSolid()
})
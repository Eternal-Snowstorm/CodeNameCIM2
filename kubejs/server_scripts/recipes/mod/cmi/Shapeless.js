ServerEvents.recipes((event) => {
    let { kubejs } = event.getRecipes()

    // 冰
    kubejs.shapeless("minecraft:ice", [
        "4x ad_astra:ice_shard"
    ])

    // 浮冰
    kubejs.shapeless("minecraft:packed_ice", [
        "4x minecraft:ice"
    ])

    // 蓝冰
    kubejs.shapeless("minecraft:blue_ice", [
        "4x minecraft:packed_ice"
    ])

    // 草绳
    kubejs.shapeless("cmi:grass_string", [
        "3x cmi:grass_fiber"
    ])

    // 泥炭
    kubejs.shapeless("4x cmi:peat", [
        "cmi:peat_block"
    ])

})
StartupEvents.registry("item", (event) => {
    /**
     * @param {string} name 注册ID
     * @param {"basic" | "sword" | "pickaxe" | "axe" | "shovel" | "shears" | "hoe" | "helmet" | "chestplate" | "leggings" | "boots" | "music_disc" | "smithing_template" | "animatable" | "anim_helmet" | "anim_chestplate" | "anim_leggings" | "anim_boots" | "anim_axe" | "anim_hoe" | "anim_pickaxe" | "anim_sword" | "anim_shield" | "create:sequenced_assembly" | "create:sandpaper" | "vintageimprovements:spring"} type 注册类型
     * @returns 
     */
    function addItem(name, type) {
        if (type === undefined) {
            return event.create(`${global.namespace}:${name}`)
        }
        return event.create(`${global.namespace}:${name}`, type)
    }

    //电源
    addItem("power_supply_repair_kit")
        .texture(`${global.namespace}:item/space/power`)

    //变压
    addItem("transformer_repair_kit")
        .texture(`${global.namespace}:item/space/trans`)

    //追踪
    addItem("tracker_repair_kit")
        .texture(`${global.namespace}:item/space/track`)

    // 调制解调器
    let dimensions = [
        "overworld",
        "moon",
        "mars",
        "mercury"
    ]
    dimensions.forEach((dim) => {
        addItem(`modem_repair_kit_${dim}`)
            .texture(`${global.namespace}:item/space/modem`)
    })

    // 雷达
    addItem("radar_repair_kit")
        .texture(`${global.namespace}:item/space/radar`)

})
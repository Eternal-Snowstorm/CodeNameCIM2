StartupEvents.registry("item", (event) => {
    /**
     * @param {string} name 注册ID
     * @param {string} type 注册类型
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
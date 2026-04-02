StartupEvents.registry("item", (event) => {
    /**
     * @param {string} name 注册ID
     * @param {string} type 注册类型
     * @returns 
     */
    function addItem(name, type) {
        if (type === undefined) {
            return event.create(`${CmiCore.MODID}:${name}`)
        }
        return event.create(`${CmiCore.MODID}:${name}`, type)
    }

    // 火箭零件
    for (let i = 1; i <= 4; i++) {
        addItem(`tier_${i}_rocket_nose_cone`)
            .texture(`${CmiCore.MODID}:item/material/rocket_nose_cone/${i}`)
            .tag(`${CmiCore.MODID}:rocket_nose_cones/tier_${i}`)
            .tag(`${CmiCore.MODID}:rocket_nose_cones`)

        addItem(`tier_${i}_rocket_fin`)
            .texture(`${CmiCore.MODID}:item/material/rocket_fin/${i}`)
            .tag(`${CmiCore.MODID}:rocket_fins/tier_${i}`)
            .tag(`${CmiCore.MODID}:rocket_fins`)
    }

    //电源
    addItem("power_supply_repair_kit")
        .texture(`${CmiCore.MODID}:item/space/power`)

    //变压
    addItem("transformer_repair_kit")
        .texture(`${CmiCore.MODID}:item/space/trans`)

    //追踪
    addItem("tracker_repair_kit")
        .texture(`${CmiCore.MODID}:item/space/track`)

    // 调制解调器
    addItem(`modem_repair_kit`)
        .texture(`${CmiCore.MODID}:item/space/modem`)

    // 雷达
    addItem("radar_repair_kit")
        .texture(`${CmiCore.MODID}:item/space/radar`)
})
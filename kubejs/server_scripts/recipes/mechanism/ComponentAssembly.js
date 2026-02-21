ServerEvents.recipes((event) => {
    let { thermal_extra } = event.recipes

    // 热力组件
    thermal_extra.component_assembly(`4x ${Mechanism.THERMAL.AUG.getId().toString()}`, [
        "#forge:gears/constantan",
        "thermal:rf_coil",
        "thermal:redstone_servo",
        "cmi:simple_battery"
    ])

    // 轻工构件
    thermal_extra.component_assembly(`4x ${Mechanism.LIGHT.AUG.getId().toString()}`, [
        "#forge:gears/copper",
        "immersiveengineering:component_iron",
        "cmi:diode"
    ])

    // 智能构件
    thermal_extra.component_assembly(`4x ${Mechanism.SMART.AUG.getId().toString()}`, [
        "#forge:gears/silver",
        "create_connected:control_chip",
        "ae2:logic_processor"
    ])

    // 强化构件
    thermal_extra.component_assembly(`4x ${Mechanism.REINFORCED.AUG.getId().toString()}`, [
        "#forge:gears/signalum",
        "thermal:rf_coil",
        "cmi:thermal_unit",
        "thermalendergy:vibrating_core"
    ])

    // 重工构件
    thermal_extra.component_assembly(`4x ${Mechanism.HEAVY.AUG.getId().toString()}`, [
        "#forge:gears/electrum",
        "immersiveengineering:component_steel",
        "immersiveengineering:electron_tube"
    ])
})

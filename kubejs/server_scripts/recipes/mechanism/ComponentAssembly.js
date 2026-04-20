ServerEvents.recipes((event) => {
    let { thermal_extra } = event.getRecipes()

    // 热力组件
    thermal_extra.component_assembly(`4x ${Mechanism.THERMAL.AUG.getId()}`, [
        "#forge:gears/constantan",
        "thermal:rf_coil",
        "thermal:redstone_servo",
        "#forge:plates/vanadium"
    ])

    // 轻工构件
    thermal_extra.component_assembly(`4x ${Mechanism.LIGHT.AUG.getId()}`, [
        "#forge:gears/copper",
        "immersiveengineering:component_iron",
        "thermal:laser_diode"
    ])

    // 智能构件
    thermal_extra.component_assembly(`4x ${Mechanism.SMART.AUG.getId()}`, [
        "#forge:gears/silver",
        "create_connected:control_chip",
        "ae2:logic_processor"
    ])

    // 强化构件
    thermal_extra.component_assembly(`4x ${Mechanism.REINFORCED.AUG.getId()}`, [
        "#forge:gears/signalum",
        "thermalendergy:vibrating_core",
        "cmi:inscribed_silicon",
        "#forge:plates/lumium"
    ])

    // 重工构件
    thermal_extra.component_assembly(`4x ${Mechanism.HEAVY.AUG.getId()}`, [
        "#forge:gears/electrum",
        "immersiveengineering:component_steel",
        "immersiveengineering:electron_tube"
    ])
})
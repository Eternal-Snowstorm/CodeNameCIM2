ServerEvents.recipes((event) => {
    let { create, kubejs } = event.recipes
    const MECH1 = "cmi:thermal_mechanism"
    const MECH2 = "cmi:feinforced_mechanism"
    const MECH3 = "cmi:resonant_mechanism"
    let up1 = "cmi:incomplete_upgrade_augment_1"
    let up2 = "cmi:incomplete_upgrade_augment_2"
    let up3 = "cmi:incomplete_upgrade_augment_3"

    // 升级组件
    create.sequenced_assembly(
        "thermal:upgrade_augment_1",
        MECH1, [
        create.deploying(up1, [up1, "#forge:gears/gold"]),
        create.deploying(up1, [up1, "cmi:cobalt_mechanism"]),
        create.deploying(up1, [up1, "#forge:plates/invar"])
    ]).transitionalItem(up1).loops(1).id("thermal:augments/upgrade_augment_1")

    create.sequenced_assembly(
        "thermal:upgrade_augment_2",
        MECH2, [
        create.deploying(up2, [up2, "#forge:gears/signalum"]),
        create.deploying(up2, [up2, "cmi:cobalt_mechanism"]),
        create.deploying(up2, [up2, "#forge:plates/electrum"])
    ]).transitionalItem(up2).loops(1).id("thermal:augments/upgrade_augment_2")

    create.sequenced_assembly(
        "thermal:upgrade_augment_3",
        MECH3, [
        create.deploying(up3, [up3, "#forge:gears/lumium"]),
        create.deploying(up3, [up3, "cmi:cobalt_mechanism"]),
        create.deploying(up3, [up3, "#forge:plates/enderium"])
    ]).transitionalItem(up3).loops(1).id("thermal:augments/upgrade_augment_3")
})
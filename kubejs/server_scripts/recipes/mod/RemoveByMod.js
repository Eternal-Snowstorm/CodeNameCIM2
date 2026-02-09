ServerEvents.recipes((event) => {

    let removedMods = [
        "steampowered",
        "portality"
    ]

    removedMods.forEach((mod) => {
        event.remove({
            mod: mod
        })
    })

    let removeRecipeType = [
        "vintageimprovements:laser_cutting",
        "vintageimprovements:polishing",
        "ad_astra:nasa_workbench",
        "immersiveengineering:fermenter",
        "immersiveengineering:alloy",
        "thermal_extra:nitratic_igniter_catalyst"
    ]
    removeRecipeType.forEach((type) => {
        event.remove({
            type: type
        })
    })
})
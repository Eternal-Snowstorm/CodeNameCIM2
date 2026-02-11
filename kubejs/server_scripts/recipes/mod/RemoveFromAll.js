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

    let removeOutput = [
        "vintageimprovements:belt_grinder",
        "create:schedule",
        "create:track_signal",
        "create:track_observer",
        "create:controls",
        "createdieselgenerators:chip_wood_block",
        "steampowered:alternator",
        "steampowered:pressurized_gas_container",
        "steampowered:pressurized_steam_container",
		"#forge:ingots/steel",
		"forge:storage_blocks/steel"
    ]
    removeOutput.forEach((output) => {
        event.remove({
            output: output
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
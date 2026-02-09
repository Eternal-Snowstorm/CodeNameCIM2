ServerEvents.recipes((event) => {
    let removeRecipeIds = [
        "thermal:gunpowder_4",
        "thermal:machines/press/unpacking/press_packed_ice_unpacking",
        "thermal:machines/press/unpacking/press_blue_ice_unpacking",
        "thermal:machines/press/packing3x3/press_packed_ice_packing",
        "thermal:machines/press/packing3x3/press_blue_ice_packing",
        "thermal:smelting/cured_rubber_from_smelting",
        "thermal:gourmand_cheese_ingot",
        "thermal:gourmand_cheese",
        "thermal_extra:machine/fluid_mixer/polyolefin",
        "thermal_extra:sticky_ball_to_paper",
        "thermal:compat/mekanism/smelter_mek_osmium_ore",
        "thermal:compat/create_ie/smelter_create_ie_crushed_raw_aluminum",
        "thermal:compat/immersiveengineering/smelter_ie_raw_aluminum",
        "thermal:compat/immersiveengineering/smelter_ie_aluminum_ore",
        "thermal:storage/sugar_cane_block",
        "thermal:compat/create/smelter_create_alloy_andesite_alloy",
        "thermal:fuels/magmatic/magmatic_lava"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
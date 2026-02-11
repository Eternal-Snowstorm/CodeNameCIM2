ServerEvents.recipes((event) => {
    let removeRecipeIds = [
        "tconstruct:smeltery/seared/drain_retextured",
        "tconstruct:smeltery/seared/duct_retextured",
        "tconstruct:smeltery/seared/chute_retextured",
        "tconstruct:__default",
        "tconstruct:common/cheese_block_from_ingot",
        "tconstruct:smeltery/casting/cheese_block",
        "tconstruct:smeltery/casting/cheese_ingot_gold_cast",
        "tconstruct:smeltery/casting/cheese_ingot_sand_cast",
        "tconstruct:common/cheese_ingot_from_block",
        "tconstruct:smeltery/melting/fuel/blaze",
        "tconstruct:smeltery/melting/fuel/lava",
        "tconstruct:smeltery/alloys/molten_enderium",
        "tconstruct:compat/create/andesite_alloy_iron",
        "tconstruct:compat/create/andesite_alloy_zinc",
        "tconstruct:tools/materials/melting/plated_slimewood",
        "tconstruct:smeltery/seared/grout_multiple"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
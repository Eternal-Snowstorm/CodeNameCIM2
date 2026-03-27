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
        "thermal:press_gear_die",
        "thermal:press_coin_die",
        "thermal:press_packing_2x2_die",
        "thermal:press_packing_3x3_die",
        "thermal:press_unpacking_die",
        "tconstruct:smeltery/seared/seared_glass",
        "tconstruct:smeltery/melting/glass/sand",
        "tconstruct:smeltery/melting/glass/sand_cast",
		"thermal:compat/tconstruct/bottler_tconstruct_lavawood",
		"thermal:compat/tconstruct/press_tconstruct_blood_slime_2x2_unpacking",
		"thermal:compat/tconstruct/press_tconstruct_blood_slime_2x2_packing",
		"thermal:compat/tconstruct/press_tconstruct_blood_slime_3x3_unpacking",
		"thermal:compat/tconstruct/press_tconstruct_blood_slime_3x3_packing"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
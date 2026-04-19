ServerEvents.recipes((event) => {
    let { thermal_extra, create, thermal } = event.recipes
    let Inc = "cmi:incomplete_thermal_devices"

    /**
     * 
     * @param {(Internal.OutputFluid_|OutputItem_)[]} output 
     * @param {(Internal.InputFluid_|InputItem_)[]} inputs 
     * @returns 
     */
    function addComponRecipe(output, inputs) {
        return thermal_extra.component_assembly(output, inputs)
            .energy(4000)
    }

    create.sequenced_assembly("thermal_extra:component_assembly", Casing.THERMAL, [
        create.deploying(Inc, [Inc, Mechanism.THERMAL.COM]),
        create.deploying(Inc, [Inc, "#forge:gears/iron"]),
        create.deploying(Inc, [Inc, "create:brass_hand"])
    ]).transitionalItem(Inc)
        .loops(1)
        .id("thermal_extra:crafting/component_assembly")

    addComponRecipe("thermal_extra:component_assembly", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "#forge:gears/iron",
        "create:brass_hand"
    ])

    // 移除冶炼炉合金配方
    // event.remove()

    // 热力单元
    addComponRecipe("cmi:thermal_unit", [
        Fluid.of("thermal:resin", 50),
        "cmi:redstone_wire",
        "#forge:plates/invar"
    ])
    thermal.smelter("cmi:blaze_unit", [
        "cmi:thermal_unit",
        "minecraft:blaze_powder"
    ])
    thermal.smelter("cmi:basalz_unit", [
        "cmi:thermal_unit",
        "thermal:basalz_powder"
    ])
    thermal.smelter("cmi:blitz_unit", [
        "cmi:thermal_unit",
        "thermal:blitz_powder"
    ])
    thermal.smelter("cmi:blizz_unit", [
        "cmi:thermal_unit",
        "thermal:blizz_powder"
    ])

    // 1级热力机器，热力单元
    // 电炉
    addComponRecipe("thermal:machine_furnace", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "minecraft:bricks"
    ]).id("thermal:machine_furnace")
    // 磨粉机
    addComponRecipe("thermal:machine_pulverizer", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "minecraft:piston"
    ]).id("thermal:machine_pulverizer")
    // 灌装机
    addComponRecipe("thermal:machine_bottler", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "minecraft:bucket"
    ]).id("thermal:machine_bottler")
    // 合成器
    addComponRecipe("thermal:machine_crafter", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "minecraft:crafting_table"
    ]).id("thermal:machine_crafter")
    // 锯木机
    addComponRecipe("thermal:machine_sawmill", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "thermal:saw_blade"
    ]).id("thermal:machine_sawmill")
    // 感应炉
    addComponRecipe("thermal:machine_smelter", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "minecraft:blast_furnace"
    ]).id("thermal:machine_smelter")
    // 粉末
    addComponRecipe("cmi:void_dust_collector", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "create:propeller"
    ])
    // 离心机
    addComponRecipe("thermal:machine_centrifuge", [
        Casing.THERMAL,
        Mechanism.THERMAL.COM,
        "cmi:thermal_unit",
        "cmi:void_dust"
    ]).id("thermal:machine_centrifuge")

    // 2级热力机器，烈焰单元
    // 精炼机
    addComponRecipe("thermal:machine_refinery", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blaze_unit",
        "create:blaze_burner"
    ]).id("thermal:machine_refinery")
    // 脱水机
    addComponRecipe("thermal_extra:endothermic_dehydrator", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blaze_unit",
        "thermal_extra:paraffin_wax"
    ]).id("thermal_extra:crafting/endothermic_dehydrator")
    // 熔岩炉
    addComponRecipe("thermal:machine_crucible", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blaze_unit",
        "minecraft:nether_bricks"
    ]).id("thermal:machine_crucible")
    // 高级精炼机
    addComponRecipe("thermal_extra:advanced_refinery", [
        "thermal:machine_refinery",
        Mechanism.REINFORCED.COM,
        "cmi:blaze_unit",
        "thermal_extra:paraffin_wax",
        "#forge:storage_blocks/twinite"
    ]).id("thermal_extra:crafting/advanced_refinery")
    
    // 2级热力机器，大地单元
    // TNT
    addComponRecipe("thermal_extra:nitratic_igniter", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:basalz_unit",
        "mekanism:structural_glass"
    ]).id("thermal_extra:crafting/nitratic_igniter")
    // 热解炉
    addComponRecipe("thermal:machine_pyrolyzer", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:basalz_unit",
        "minecraft:nether_bricks"
    ]).id("thermal:machine_pyrolyzer")
    // 冲压机
    addComponRecipe("thermal:machine_press", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:basalz_unit",
        "#forge:storage_blocks/iron"
    ]).id("thermal:machine_press")

    // 2级热力机器，狂风单元
    // 结晶器
    addComponRecipe("thermal:machine_crystallizer", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blitz_unit",
        "cmi:silicon_rubber_plate"
    ]).id("thermal:machine_crystallizer")
    // 有机灌注
    addComponRecipe("thermal:machine_insolator", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blitz_unit",
        "#forge:gears/lumium"
    ]).id("thermal:machine_insolator")
    // 酿造
    addComponRecipe("thermal:machine_brewer", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blitz_unit",
        "minecraft:brewing_stand"
    ]).id("thermal:machine_brewer")

    // 2级热力机器，暴雪单元
    // 冷冻机
    addComponRecipe("thermal:machine_chiller", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blizz_unit",
        "minecraft:blue_ice"
    ]).id("thermal:machine_chiller")
    // 混合机
    addComponRecipe("thermal_extra:fluid_mixer", [
        Casing.THERMAL,
        Mechanism.REINFORCED.COM,
        "cmi:blizz_unit",
        "#forge:plates/polyolefin"
    ]).id("thermal_extra:crafting/fluid_mixer")
    

})
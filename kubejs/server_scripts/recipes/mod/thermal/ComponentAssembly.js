ServerEvents.recipes((event) => {
    let { thermal_extra } = event.getRecipes()

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

    // 二极管
    addComponRecipe("4x thermal:laser_diode", [
        "#forge:wires/electrum",
        "#forge:plates/invar",
        "#forge:prisms/pure_quartz"
    ])

    // 电子元件
    addComponRecipe("2x immersiveengineering:component_electronic", [
        "thermal:laser_diode",
        "#forge:treated_wood_slab",
        "#forge:gems/quartz",
        "#forge:wires/electrum"
    ]).id("immersiveengineering:blueprint/component_electronic")

    // 锇砖瓦
    addComponRecipe("2x cmi:osmium_tile", [
        "#forge:plates/aluminum",
        "#forge:plates/osmium",
        Fluid.of("cmi:structural_plastic", 200)
    ])

    // 钢制机壳
    addComponRecipe("2x mekanism:steel_casing", [
        "#forge:plates/stainless_steel",
        "#forge:plates/stainless_steel",
        "cmi:osmium_tile",
        "#forge:gears/chromeplated_steel"
    ]).id("mekanism:steel_casing")

    // 通量线圈
    addComponRecipe("thermal:rf_coil", [
        "#forge:plates/gold",
        "#forge:dusts/redstone",
        "#forge:dusts/redstone"
    ])

    // 振动元件
    addComponRecipe("thermalendergy:vibrating_core", [
        "#forge:plates/cobalt",
        "#forge:dusts/amethyst",
        "#forge:dusts/amethyst"
    ])

    // 机器框架
    addComponRecipe("thermal:machine_frame", [
        "#forge:plates/invar",
        "#forge:plates/invar",
        "#forge:plates/industrial_iron",
        "#forge:plates/industrial_iron",
        "#forge:glass"
    ])

    // 红石伺服器
    addComponRecipe("2x thermal:redstone_servo", [
        Fluid.of("immersiveengineering:redstone_acid", 200),
        "#forge:plates/iron"
    ]).id("thermal_extra:machine/component_assembly/redstone_servo")
})
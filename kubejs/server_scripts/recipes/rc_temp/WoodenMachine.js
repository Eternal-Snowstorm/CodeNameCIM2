ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    const MECH = Mechanism.WOODEN.COM

    kubejs.shaped("minecraft:hopper", [
        "X X",
        "XMX",
        " X "
    ], {
        M: MECH,
        X: ["#forge:plates/tin","#forge:plates/iron"],
    }).id("minecraft:hopper")

    kubejs.shaped("2x create:chute", [
        "X",
        "Y"
    ], {
        X: "#forge:ingots/industrial_iron",
        Y: "#forge:plates/industrial_iron",
    }).id("create:crafting/kinetics/chute")

    kubejs.shaped("sophisticatedbackpacks:backpack", [
        "XYX",
        "XMX",
        "YYY"
    ], {
        X: "#forge:string",
        Y: ["#forge:leather","tconstruct:silky_cloth"]
    }).id("sophisticatedbackpacks:backpack")

    // !!!
    kubejs.shaped("sophisticatedbackpacks:upgrade_base", [
        "XYX",
        "YMY",
        "XYX"
    ], {
        X: "#forge:rods/andesite",
        Y: ["#forge:leather","tconstruct:silky_cloth"]
    }).id("sophisticatedbackpacks:upgrade_base")

    kubejs.shapeless("create:portable_storage_interface",[
        "create:andesite_casing",
        MECH,
        "#forge:plates/industrial_iron"
    ]).id("minecraft:kjs/create_portable_storage_interface")

    // !!!
    kubejs.shaped("2x ae2:item_cell_housing", [
        "XYX",
        "YMY",
        "XYX"
    ], {
        X: "#forge:plates/silver",
        Y: "ae2:quartz_glass",
    }).id("ae2:network/cells/item_cell_housing")

    
})
ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    const MECH = Mechanism.ANDESITE.COM
    const CASHING = "create:andesite_casing"

    kubejs.shaped("create:mechanical_press", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: ["#forge:storage_blocks/iron", "#forge:storage_blocks/zinc"]
    }).id("create:crafting/kinetics/mechanical_press")

    kubejs.shaped("create:mechanical_mixer", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: "create:whisk",
    }).id("create:crafting/kinetics/mechanical_mixer")

    kubejs.shaped("create:encased_fan", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: "create:propeller",
    }).id("create:crafting/kinetics/encased_fan")

    kubejs.shaped("create:propeller", [
        " A ",
        "ABA",
        " A "
    ], {
        A: ["#forge:plates/iron", "#forge:plates/zinc"],
        B: "#forge:ingots/andesite_alloy"
    }).id("create:crafting/kinetics/propeller")

    kubejs.shapeless("ratatouille:oven_fan",
        "create:encased_fan"
    ).id("ratatouille:oven_fan")

    kubejs.shapeless("create:encased_fan",
        "ratatouille:oven_fan"
    )
    kubejs.shaped("createdieselgenerators:basin_lid", [
        "ABA",
        "C C"
    ], {
        A: "#forge:plates/andesite_alloy",
        B: "#forge:ingots/andesite_alloy",
        C: "thermal:rubberwood_planks"
    })

    kubejs.shaped("create:mechanical_bearing", [
        "X",
        "C",
        "M"
    ], {
        M: MECH,
        C: CASHING,
        X: "#minecraft:planks",
    }).id("create:crafting/kinetics/mechanical_bearing")

    kubejs.shaped("create:windmill_bearing", [
        "X",
        "C",
        "M"
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:plates/stone",
    }).id("create:crafting/kinetics/windmill_bearing")

    kubejs.shaped("create:mechanical_piston", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: "create:piston_extension_pole",
    }).id("create:crafting/kinetics/mechanical_piston")

    kubejs.shaped("create:gantry_carriage", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: "#create:cogwheel",
    }).id("create:crafting/kinetics/gantry_carriage")

    kubejs.shapeless("create:weighted_ejector",
        ["create:depot",
            MECH
        ])

    kubejs.shaped("create:millstone", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:stone",
    }).id("create:crafting/kinetics/millstone")

    kubejs.shaped("create:mechanical_harvester", [
        "XXX",
        " C ",
        " M "
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:rods/andesite",
    }).id("create:crafting/kinetics/mechanical_harvester")

    kubejs.shaped("create:mechanical_plough", [
        "XXX",
        " C ",
        " M "
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:plates/andesite_alloy",
    }).id("create:crafting/kinetics/mechanical_plough")

    kubejs.shaped("ratatouille:thresher", [
        " Y ",
        "XMX",
        " C "
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:plates/andesite_alloy",
        Y: "#forge:plates/andesite_alloy",
    }).id("ratatouille:thresher")

    kubejs.shaped("2x create:mechanical_roller", [
        "CX ",
        "XMX",
        " X "
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:plates/andesite_alloy",
    }).id("create:crafting/kinetics/mechanical_roller")

    kubejs.shaped("ratatouille:mechanical_demolder", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:slimeballs",
    }).id("ratatouille:mechanical_demolder")

    kubejs.shaped("vintageimprovements:vibrating_table", [
        " Y ",
        "XMX",
        " C "
    ], {
        M: MECH,
        C: CASHING,
        X: "#vintageimprovements:springs/andesite",
        Y: "#minecraft:planks",
    }).id("vintageimprovements:craft/vibrating_table")

    kubejs.shaped("createaddition:rolling_mill", [
        " M ",
        "XYX",
        " C "
    ], {
        M: MECH,
        C: CASHING,
        X: "#forge:plates/andesite_alloy",
        Y: "#create:shaft",
    }).id("createaddition:crafting/rolling_mill")

    kubejs.shaped("vintageimprovements:spring_coiling_machine", [
        "X",
        "C",
        "M"
    ], {
        M: MECH,
        C: CASHING,
        X: "vintageimprovements:spring_coiling_machine_wheel",
    }).id("vintageimprovements:craft/spring_coiling_machine")

    kubejs.shaped("vintageimprovements:spring_coiling_machine_wheel", [
        " A ",
        "ABA",
        " A "
    ], {
        A: ["#forge:plates/iron","#forge:plates/andesite_alloy"],
        B: "#forge:ingots/andesite_alloy"
    }).id("vintageimprovements:craft/spring_coiling_machine_wheel")

    kubejs.shaped("vintageimprovements:curving_press", [
        "M",
        "C",
        "X"
    ], {
        M: MECH,
        C: CASHING,
        X: ["#forge:plates/iron", "#forge:plates/andesite_alloy"]
    }).id("vintageimprovements:craft/curving_press")
})
ServerEvents.recipes((event) => {
    let { create } = event.recipes

    // 粉碎轮
    create.mechanical_crafting("4x create:crushing_wheel", [
        " AAA ",
        "AABAA",
        "ABCBA",
        "AABAA",
        " AAA "
    ], {
        A: "create:andesite_alloy",
        B: "thermal:iron_gear",
        C: "cmi:andesite_mechanism"
    })
        .id("create:mechanical_crafting/crushing_wheel")

    // 交流发电机
    create.mechanical_crafting("createaddition:alternator", [
        " ABA ",
        "ACDCA",
        " AEA "
    ], {
        A: "#forge:plates/industrial_iron",
        B: "create:shaft",
        C: "cmi:simple_battery",
        D: "cmi:coil_mechanism",
        E: "#forge:plates/electrum"
    })
        .id("createaddition:mechanical_crafting/alternator")

    // 电动马达
    create.mechanical_crafting("createaddition:electric_motor", [
        " ABA ",
        "ACDCA",
        " AEA "
    ], {
        A: "#forge:plates/brass",
        B: "create:shaft",
        C: "cmi:simple_battery",
        D: "cmi:coil_mechanism",
        E: "#forge:plates/electrum"
    })
        .id("createaddition:mechanical_crafting/electric_motor")
})
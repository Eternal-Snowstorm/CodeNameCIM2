ServerEvents.recipes((event) => {
    let { kubejs } = event.getRecipes()

    // 粉碎轮
    kubejs.shaped("create:crushing_wheel", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "create:andesite_alloy_block",
        B: "thermal:iron_gear",
        C: "cmi:andesite_mechanism"
    })

    // 电容
    kubejs.shaped("cmi:simple_battery", [
        " A ",
        "BBB",
        " C "
    ], {
        A: "#forge:plates/copper",
        B: "#forge:dusts/redstone",
        C: "#forge:plates/zinc"
    }).id("createaddition:crafting/capacitor_1")

    // 扇叶
    kubejs.shaped("create:propeller", [
        " A ",
        "ABA",
        " A "
    ], {
        A: ["#forge:plates/iron", "#forge:plates/zinc"],
        B: "#forge:ingots/andesite_alloy"
    }).id("create:crafting/kinetics/propeller")

    // 水车部件
    kubejs.shaped("immersiveengineering:waterwheel_segment", [
        " AA",
        "A B",
        "AB "
    ], {
        A: "#minecraft:wooden_slabs",
        B: "#forge:rods/wooden"
    }).id("immersiveengineering:crafting/waterwheel_segment")

    // 风车叶片
    kubejs.shaped("2x create:white_sail", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#forge:string",
        B: "#forge:rods/wooden",
        C: "#forge:fabric_hemp"
    }).id("createaddition:compat/immersiveengineering/fabric_sail")

    kubejs.shaped("2x create:white_sail", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#forge:string",
        B: "#forge:rods/wooden",
        C: "#minecraft:wool"
    }).id("create:crafting/kinetics/white_sail")

    // 激光发射器
    kubejs.shaped("vintageimprovements:laser_item", [
        " A ",
        "BDB",
        " E "
    ], {
        A: "#forge:dusts/redstone",
        B: "#forge:plates/copper",
        D: "createaddition:capacitor",
        E: Mechanism.PHOTO.COM
    }).id("vintageimprovements:mechanical_crafting/laser")

    // 卷簧轮
    kubejs.shaped("vintageimprovements:spring_coiling_machine_wheel", [
        " A ",
        "ABA",
        " A "
    ], {
        A: ["#forge:plates/iron", "#forge:plates/andesite_alloy"],
        B: "#forge:ingots/andesite_alloy"
    }).id("vintageimprovements:craft/spring_coiling_machine_wheel")

    // 搅拌头
    kubejs.shaped("create:whisk", [
        " A ",
        "BAB",
        "BBB"
    ], {
        A: "create:andesite_alloy",
        B: ["#forge:plates/zinc", "#forge:plates/iron"]
    }).id("create:crafting/kinetics/whisk")

    // 增产机壳
    let casingFrame = [
        "andesite",
        "brass",
        "copper"
    ]
    casingFrame.forEach((frame) => {
        event.stonecutting(
            `4x cmi:${frame}_casing_framework`,
            `#forge:plates/${frame}`
        )
    })

    // 锯片
    kubejs.shaped("thermal:saw_blade", [
        " X ",
        "XYX",
        " X "
    ], {
        X: "#forge:plates/iron",
        Y: "#forge:plates/andesite_alloy"
    }).id("thermal:saw_blade")

    // 钻头
    kubejs.shaped("thermal:drill_head", [
        "YY ",
        "Y X",
        " XX"
    ], {
        X: "#forge:plates/iron",
        Y: "#forge:plates/andesite_alloy"
    }).id("thermal:drill_head")
})
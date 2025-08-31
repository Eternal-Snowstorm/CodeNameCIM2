ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    let mech = "vintageimprovements:redstone_module"

    // 接触式信号发生器
    kubejs.shaped("2x create:redstone_contact", [
        " B ",
        "CAC",
        "CCC"
    ], {
        A: mech,
        B: "#forge:plates/iron",
        C: "minecraft:cobblestone"
    }).id("create:crafting/logistics/redstone_contact")

    // 显示链接器
    kubejs.shaped("create:display_link", [
        " A ",
        " B ",
        " C "
    ], {
        A: mech,
        B: "create:brass_casing",
        C: "#forge:plates/copper"
    }).id("create:crafting/logistics/display_link")

    // 活塞
    kubejs.shaped("minecraft:piston", [
        "A",
        "B",
        "C"
    ], {
        B: mech,
        A: "#minecraft:planks",
        C: "#forge:cobblestone"
    }).id("minecraft:piston")

    // 齿轮方块
    kubejs.shapeless("supplementaries:cog_block", [
        "#forge:plates/copper",
        mech
    ]).id("supplementaries:cog_block")

    // 比较器
    kubejs.shaped("minecraft:comparator", [
        "A",
        "B",
        "C"
    ], {
        B: mech,
        A: "minecraft:redstone_torch",
        C: "minecraft:stone" // 写石头是故意的
    }).id("minecraft:comparator")

    // 阳光传感器
    kubejs.shaped("minecraft:daylight_detector", [
        "A",
        "B",
        "C"
    ], {
        B: "cmi:photosensitive_mechanism",
        A: "#forge:glass",
        C: "#minecraft:wooden_slabs"
    }).id("minecraft:daylight_detector")

    // 发射器
    kubejs.shaped("minecraft:dispenser", [
        "AAA",
        "A A",
        "ABA"
    ], {
        B: mech,
        A: "#forge:cobblestone",
    }).id("minecraft:dispenser")

    // 侦测器
    kubejs.shaped("2x minecraft:observer", [
        "AAA",
        "BBC",
        "AAA"
    ], {
        B: mech,
        C: "cmi:photosensitive_mechanism",
        A: "#forge:cobblestone",
    }).id("minecraft:observer")

})

ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    const MECH = "vintageimprovements:redstone_module"

    // 接触式信号发生器
    kubejs.shaped("2x create:redstone_contact", [
        " B ",
        "CAC",
        "CCC"
    ], {
        A: MECH,
        B: "#forge:plates/iron",
        C: "minecraft:cobblestone"
    }).id("create:crafting/logistics/redstone_contact")

    // 显示链接器
    kubejs.shaped("create:display_link", [
        " A ",
        " B ",
        " C "
    ], {
        A: MECH,
        B: "create:brass_casing",
        C: "#forge:plates/copper"
    }).id("create:crafting/logistics/display_link")

    // 活塞
    kubejs.shaped("minecraft:piston", [
        "A",
        "B",
        "C"
    ], {
        B: MECH,
        A: "#minecraft:planks",
        C: "#forge:cobblestone"
    }).id("minecraft:piston")

    // 比较器
    kubejs.shaped("minecraft:comparator", [
        "A",
        "B",
        "C"
    ], {
        B: MECH,
        A: "minecraft:redstone_torch",
        C: "minecraft:stone" // 写石头是故意的
    }).id("minecraft:comparator")

    // 发射器
    kubejs.shaped("minecraft:dispenser", [
        "AAA",
        "A A",
        "ABA"
    ], {
        B: MECH,
        A: "#forge:cobblestone",
    }).id("minecraft:dispenser")
})

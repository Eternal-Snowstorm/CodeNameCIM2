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
})

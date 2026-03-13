ServerEvents.recipes((event) => {
    let { kubejs } = event.getRecipes()

    // ME物品元件外壳
    kubejs.shaped("2x ae2:item_cell_housing", [
        "XYX",
        "YMY",
        "XYX"
    ], {
        M: Mechanism.WOODEN.COM,
        X: "#forge:plates/iron",
        Y: "ae2:quartz_glass",
    }).id("ae2:network/cells/item_cell_housing")

    // ME流体元件外壳
    kubejs.shaped("ae2:fluid_cell_housing", [
        "XYX",
        "YMY",
        "XYX"
    ], {
        M: Mechanism.COPPER.COM,
        X: "#forge:plates/copper",
        Y: "ae2:quartz_glass"
    }).id("ae2:network/cells/fluid_cell_housing")

    // ME化学元件外壳
    kubejs.shaped("appmek:chemical_cell_housing", [
        "PAP",
        "AMA",
        "PAP"
    ], {
        P: "#forge:plates/osmium",
        A: "ae2:quartz_glass",
        M: Mechanism.AIR.COM
    }).id("appmek:chemical_cell_housing")

})
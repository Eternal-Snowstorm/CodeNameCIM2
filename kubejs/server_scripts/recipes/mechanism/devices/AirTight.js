ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes

    // ME化学品外壳
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
ServerEvents.recipes((event) => {
    let { create } = event.recipes

    // 防腐木板
    create.filling("immersiveengineering:treated_wood_horizontal", [
        "#minecraft:planks",
        Fluid.of("immersiveengineering:creosote", 125)
    ]).id("createaddition:filling/treated_wood_planks")

})
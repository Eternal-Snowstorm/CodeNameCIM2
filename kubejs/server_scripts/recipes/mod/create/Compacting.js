ServerEvents.recipes((event) => {
    let { create } = event.recipes

    // 泥土
    create.compacting([
        "minecraft:dirt",
        Fluid.of("minecraft:water", 50)
    ], Fluid.of("cmi:sludge_suspension", 100))
})
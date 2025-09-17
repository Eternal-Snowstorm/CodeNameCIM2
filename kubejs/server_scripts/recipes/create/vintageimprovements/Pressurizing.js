ServerEvents.recipes((event) => {
    let { pressurizing } = event.recipes.vintageimprovements

    pressurizing(
        Fluid.of("mekanism:sulfuric_acid", 1000), [
        Fluid.of("minecraft:water", 1000),
        Fluid.of("mekanism:sulfur_trioxide", 1000)
    ], 500).id("vintageimprovements:pressurizing/sulfuric_acid")

})
ServerEvents.recipes((event) => {
    let { createdieselgenerators } = event.recipes
    createdieselgenerators.basin_fermenting(Fluid.of("createdieselgenerators:biodiesel", 100),
        ["8x minecraft:sugar",
            Fluid.of("immersiveengineering:creosote", 100)
        ]).processingTime(200).heatRequirement("grilled")
})
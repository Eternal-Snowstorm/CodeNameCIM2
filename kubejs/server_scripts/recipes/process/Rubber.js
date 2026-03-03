ServerEvents.recipes((event) => {
    let { farmersdelight, create, createdieselgenerators, tconstruct, vintageimprovements } = event.recipes
    // 醋
    createdieselgenerators.basin_fermenting(Fluid.of("cmi:vinegar", 200), [
        "#forge:seeds/rice"
    ])
    // 橡胶
    create.compacting("thermal:rubber", [
        Fluid.of("thermal:latex", 200)
    ])

    //橡胶板
    create.pressing("cmi:rubber_plate", [
        "thermal:rubber"
    ])
    farmersdelight.cutting("2x cmi:rubber_plate", [
        "thermal:rubber"
    ], "#forge:tools/knives")

    // 熔融硫化橡胶
    create.mixing(Fluid.of("cmi:cured_rubber", 200), [
        "#forge:plates/rubber",
        "#forge:dusts/sulfur",
        Fluid.of("cmi:vinegar", 200)
    ]).heatRequirement("grilled")
    create.mixing(Fluid.of("cmi:cured_rubber", 200), [
        "#forge:dusts/rubber",
        "#forge:dusts/sulfur",
        Fluid.of("cmi:vinegar", 200)
    ]).heatRequirement("grilled")

    // 硫化橡胶
    tconstruct.casting_table("thermal:cured_rubber")
        .fluid(Fluid.of("cmi:cured_rubber", 200))
        .cooling_time(20)
    tconstruct.casting_basin("thermal:cured_rubber_block")
        .fluid(Fluid.of("cmi:cured_rubber", 800))
        .cooling_time(80)
    vintageimprovements.pressurizing(Fluid.of("cmi:cured_rubber", 200), [
        "#forge:dusts/sulfur",
        Fluid.of("mekanism:steam", 200),
        Fluid.of("thermal:latex", 200)
    ]).heatRequirement("grilled")
})
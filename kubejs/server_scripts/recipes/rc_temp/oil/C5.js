ServerEvents.recipes((event) => {
    let { create, thermal, thermal_extra, vintageimprovements, tconstruct, immersiveengineering, createdieselgenerators } = event.recipes
    // 沥青
    tconstruct.casting_table("thermal:bitumen")
        .fluid(Fluid.of("cmi:bitumen", 200))
        .cooling_time(20)
    tconstruct.casting_basin("thermal:bitumen_block")
        .fluid(Fluid.of("cmi:bitumen", 1800))
        .cooling_time(180)

    // 重油
    thermal.refinery([
        Fluid.of("createdieselgenerators:gasoline", 50),
        Fluid.of("thermal_extra:lubricant", 50)
    ], [
        Fluid.of("thermal:heavy_oil", 100)
    ]).id("thermal:machines/refinery/refinery_heavy_oil")
    thermal_extra.advanced_refinery([
        Fluid.of("createdieselgenerators:gasoline", 50),
        Fluid.of("thermal_extra:lubricant", 100)
    ], [
        Fluid.of("thermal:heavy_oil", 100)
    ]).id("thermal_extra:machine/advanced_refinery/heavy_oil")

    // 煤油
    thermal.refinery([
        Fluid.of("createdieselgenerators:gasoline", 50),
        Fluid.of("thermal_extra:naphtha", 50)
    ], [
        Fluid.of("cmi:kerosene", 100)
    ])
    thermal_extra.advanced_refinery([
        Fluid.of("createdieselgenerators:gasoline", 50),
        Fluid.of("thermal_extra:naphtha", 100)
    ], [
        Fluid.of("cmi:kerosene", 100)
    ])

    // 裂化汽油
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": Ingredient.of("#forge:plates/vanadium").toJson(),
        "energy": 120,
        "input0": {
            "amount": 100,
            "tag": "forge:steam"
        },
        "input1": {
            "amount": 100,
            "tag": "forge:gasoline"
        },
        "result": {
            "amount": 200,
            "fluid": "cmi:distilled_oil",
        }
    })

    // 石脑油 苯 轻烯烃
    createdieselgenerators.distillation(
    [Fluid.of("thermal_extra:naphtha", 100),
    Fluid.of("cmi:benzene", 100),
    Fluid.of("cmi:light_olefin",100),
    ], [
        Fluid.of("cmi:distilled_oil", 500)
    ]).heatRequirement(global.HeatLevel["heated"])

    // 苯 乙烯
    thermal.refinery([
        Fluid.of("cmi:benzene", 50),
        Fluid.of("mekanism:ethene", 50)
    ], [
        Fluid.of("thermal_extra:naphtha", 100)
    ]).id("thermal_extra:machine/refinery/naphtha")
    thermal_extra.advanced_refinery([
        Fluid.of("cmi:benzene", 50),
        Fluid.of("mekanism:ethene", 100)
    ], [
        Fluid.of("thermal_extra:naphtha", 100)
    ]).id("thermal_extra:machine/advanced_refinery/naphtha")

    // 苯酚
    createdieselgenerators.distillation([
        Fluid.of("cmi:phenol",50),
        Fluid.of("cmi:light_olefin",50)
    ],[
        Fluid.of("immersiveengineering:creosote",100)
    ]).heatRequirement(global.HeatLevel["heated"])

    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": Ingredient.of("#forge:plates/iron").toJson(),
        "energy": 120,
        "input0": {
            "amount": 100,
            "tag": "cmi:benzene"
        },
        "input1": {
            "amount": 100,
            "tag": "forge:ethene"
        },
        "result": {
            "amount": 200,
            "fluid": "cmi:phenol",
        }
    })

    // // 酚醛树脂
    //     event.custom({
    //     "type": "immersiveengineering:refinery",
    //     "catalyst": Ingredient.of("#forge:plates/copper").toJson(),
    //     "energy": 120,
    //     "input0": {
    //         "amount": 100,
    //         "fluid": "cmi:phenol"
    //     },
    //     "input1": {
    //         "amount": 100,
    //         "tag": "forge:acetaldehyde"
    //     },
    //     "result": {
    //         "amount": 200,
    //         "fluid": "immersiveengineering:phenolic_resin",
    //     }
    // })
})

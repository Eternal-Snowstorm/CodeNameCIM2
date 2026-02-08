ServerEvents.recipes((event) => {
    let { tconstruct } = event.recipes

    global.metalGroup.forEach((metal) => {
        event.remove([
            {
                id: new RegExp(`^tconstruct:smeltery/melting/metal/${metal}/.+`)
            }, {
                id: new RegExp(`^thermalconstruct:smeltery/melting/metal/${metal}/.+`)
            }, {
                id: new RegExp(`^tconstruct:tools/materials/melting/${metal}`)
            }, {
                id: new RegExp(`^thermalconstruct:smeltery/melting/${metal}`)
            }
        ])

        let meltingPoint = global.meltingPoints[metal]
        let fluidId = IngrUtils.getFirstFluidId(`tconstruct:molten_${metal}`)
        let namespace = global.materialNamespace[metal]
        let ingot = `#forge:ingots/${metal}`
        let plate = `#forge:plates/${metal}`
        let nugget = `#forge:nuggets/${metal}`
        let gear = `#forge:gears/${metal}`
        let dust = `#forge:dusts/${metal}`
        let rawMaterial = `#forge:raw_materials/${metal}`
        let block = `#forge:storage_blocks/${metal}`
        let rawBlock = `#forge:storage_blocks/raw_${metal}`

        if (fluidId !== null) {
            if (IngrUtils.isNotNull(ingot)) {
                tconstruct.melting(Fluid.of(fluidId, 90))
                    .ingredient(ingot)
                    .time(100)
                    .temperature(meltingPoint)
            }

            if (IngrUtils.isNotNull(plate)) {
                tconstruct.melting(Fluid.of(fluidId, 90))
                    .ingredient(plate)
                    .time(100)
                    .temperature(meltingPoint)
            }

            if (IngrUtils.isNotNull(nugget)) {
                tconstruct.melting(Fluid.of(fluidId, 10))
                    .ingredient(nugget)
                    .time(60)
                    .temperature(meltingPoint)
            }

            if (IngrUtils.isNotNull(gear)) {
                tconstruct.melting(Fluid.of(fluidId, 360))
                    .ingredient(gear)
                    .time(120)
                    .temperature(meltingPoint)
            }

            if (IngrUtils.isNotNull(dust)) {
                tconstruct.melting(Fluid.of(fluidId, 90))
                    .ingredient(dust)
                    .time(80)
                    .temperature(meltingPoint)
            }

            if (metal.toString() !== "aluminum" && IngrUtils.isNotNull(rawMaterial)) {
                tconstruct.melting(Fluid.of(fluidId, 120))
                    .ingredient(rawMaterial)
                    .time(100)
                    .temperature(meltingPoint)
            }

            if (IngrUtils.isNotNull(rawBlock)) {
                if (metal.toString() !== "aluminum" &&
                    metal.toString() !== "desh" &&
                    metal.toString() !== "ostrum" &&
                    metal.toString() !== "calorite") {
                    tconstruct.melting(Fluid.of(fluidId, 1080))
                        .ingredient(rawBlock)
                        .time(200)
                        .temperature(meltingPoint)
                }
            }

            if (IngrUtils.isNotNull(block)) {
                if (metal.toString() !== "aluminum" &&
                    metal.toString() !== "desh" &&
                    metal.toString() !== "ostrum" &&
                    metal.toString() !== "calorite") {
                    tconstruct.melting(Fluid.of(fluidId, 810))
                        .ingredient(block)
                        .time(200)
                        .temperature(meltingPoint)
                }
            }

            if (namespace === "v") {
                event.custom({
                    "type": "tconstruct:material_melting",
                    "input": `tconstruct:${metal}`,
                    "result": {
                        "amount": 90,
                        "tag": `tconstruct:molten_${metal}`
                    },
                    "temperature": meltingPoint
                })

            } if (namespace === "t") {
                event.custom({
                    "type": "tconstruct:material_melting",
                    "input": `thermalconstruct:${metal}`,
                    "result": {
                        "amount": 90,
                        "tag": `tconstruct:molten_${metal}`
                    },
                    "temperature": meltingPoint
                })

            } if (namespace === "c") {
                event.custom({
                    "type": "tconstruct:material_melting",
                    "input": `cmi:${metal}`,
                    "result": {
                        "amount": 90,
                        "tag": `tconstruct:molten_${metal}`
                    },
                    "temperature": meltingPoint
                })
            }
            console.log(`created recipes for material ${metal}`)
        }
    })
})
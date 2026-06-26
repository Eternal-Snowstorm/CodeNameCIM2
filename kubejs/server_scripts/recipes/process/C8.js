ServerEvents.recipes((event) => {
    let { kubejs, create, thermal_extra, thermal, mekanism, ad_astra } = event.getRecipes()

    // 钴电解质
    thermal.crystallizer("cmi:cobalt_electrolyte", [
        "#forge:dusts/cobalt",
        Fluid.of("immersiveengineering:redstone_acid", 100)
    ])
    // 富集合金
    mekanism.metallurgic_infusing(
        "cmi:enriched_alloy",
        "#forge:ingots/aluminum",
        "cmi:cobalt_electrolyte"
    )
    // 半熔融锇
    event.custom({
        "type": "immersiveindustry:car_kiln",
        "inputs": [
            {
                "base_ingredient": {
                    "tag": "forge:ingots/osmium"
                },
                "count": 1
            }
        ],
        "results": [
            {
                "item": "cmi:pure_semi_molten_osmium",
                "count": 1
            }
        ],
        "time": 100,
        "tickEnergy": 10
    })
    // 富集锇结晶
    thermal.crystallizer("cmi:enriched_osmium_crystal", [
        "cmi:pure_semi_molten_osmium",
        Fluid.of("minecraft:water", 1000)
    ])
    // 锇晶圆
    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 100,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "item": "cmi:enriched_osmium_crystal"
            }
        },
        "output": {
            "count": 1,
            "item": "cmi:osmium_wafer"
        }
    })
    // 基础通用构件基座
    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 200,
        "fluid": {
            "fluidStack": {
                "Amount": 100,
                "FluidName": "immersiveengineering:redstone_acid"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "ae2:logic_processor"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "cmi:enriched_alloy"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "mekanism:basic_control_circuit"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmi:basic_mekanism_mechanism_basement"
        }
    })
    // 催化
    thermal.smelter("2x cmi:polymerization_catalytic_alloy", [
        ["#forge:ingots/chromium", "#forge:dusts/chromium"],
        ["#forge:ingots/vanadium", "#forge:dusts/vanadium"]
    ])
    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 100,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "item": "cmi:polymerization_catalytic_alloy"
            }
        },
        "output": {
            "count": 2,
            "item": "cmi:ethylene_polymerization_catalytic_plate"
        }
    })
    // HDPE
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": Ingredient.of("#forge:plates/ethylene_polymerization_catalytic").toJson(),
        "energy": 120,
        "input0": Fluid.tag("tag", "forge:ethene", 10).toJson(),
        "result": Fluid.of("cmi:hdpe", 1).toJson()
    })
    // 催化
    thermal.smelter("64x cmi:deposition_catalytic_alloy", [
        ["#forge:ingots/iron", "#forge:dusts/iron"],
        ["#forge:ingots/nickel", "#forge:dusts/nickel"],
        ["#forge:ingots/cobalt", "#forge:dusts/cobalt"]
    ])
    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 100,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "item": "cmi:deposition_catalytic_alloy"
            }
        },
        "output": {
            "count": 64,
            "item": "cmi:carbon_deposition_catalytic_plate"
        }
    })
    // 石墨烯
    thermal.crystallizer("cmi:graphene", [
        "cmi:carbon_deposition_catalytic_plate",
        Fluid.of("cmi:hdpe", 100)
    ])
    // 钛合金网
    thermal.press("2x cmi:titanium_alloy_mesh", [
        "cmi:titanium_alloy_plate",
        "cmi:unpack_mold"
    ])

    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 200,
        "fluid": {
            "fluidStack": {
                "Amount": 45,
                "FluidName": "tconstruct:molten_chromium"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "cmi:titanium_alloy_mesh"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "tag": "forge:wires/aluminum"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmi:carbon_polymerization_catalytic_plate"
        }
    })
    // 聚合碳溶液
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": Ingredient.of("#forge:plates/carbon_polymerization_catalytic").toJson(),
        "energy": 120,
        "input0": Fluid.tag("tag", "cmi:light_olefin", 10).toJson(),
        "result": Fluid.of("cmi:polymeric_carbon_solution", 1).toJson()
    })
    // 未成形碳纳米管
    event.custom({
        "type": "mekanism:reaction",
        "duration": 60,
        "energyRequired": 1000,
        "fluidInput": {
            "amount": 50,
            "fluid": "cmi:polymeric_carbon_solution"
        },
        "gasInput": {
            "amount": 10,
            "gas": "mekanism:oxygen"
        },
        "itemInput": {
            "ingredient": {
                "item": "cmi:graphene"
            }
        },
        "itemOutput": {
            "item": "cmi:incomplete_carbon_nanotube"
        }
    })
    // 锇
    event.custom({
        "type": "mekanism:reaction",
        "duration": 60,
        "energyRequired": 1000,
        "fluidInput": {
            "amount": 50,
            "fluid": "cmi:hydrochloric_acid"
        },
        "gasInput": {
            "amount": 10,
            "gas": "mekanism:hydrofluoric_acid"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:dusts/osmium"
            }
        },
        "itemOutput": {
            "item": "cmi:infuse_osmium"
        }
    })
    // 碳纳米管
    mekanism.metallurgic_infusing(
        "cmi:carbon_nanotube",
        "cmi:incomplete_carbon_nanotube",
        "cmi:infuse_osmium"
    )
    // 破碎奇点粉
    mekanism.combining("2x advanced_ae:quantum_infused_dust",
        "#forge:dusts/void", "ae2:singularity"
    )
    // 航空构件基座
    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 200,
        "fluid": {
            "fluidStack": {
                "Amount": 100,
                "FluidName": "immersiveengineering:redstone_acid"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "cmi:smart_mechanism_augment"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "cmi:graphene"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmi:aeronautic_mechanism_basement"
        }
    })
    // 活化石磨
    thermal.bottler("cmi:activated_graphite_chunk", [
        "immersiveengineering:ingot_hop_graphite",
        Fluid.of("immersiveengineering:redstone_acid", 100)
    ])
    thermal.crucible(Fluid.of("cmi:activated_graphite", 1000), [
        "cmi:activated_graphite_chunk"
    ])
    // 钨处理
    thermal_extra.nitratic_igniter("cmi:raw_tungsten_dust",
        "cmi:raw_tungsten"
    )
    thermal_extra.endothermic_dehydrator("cmi:tungsten_mixture", [
        Fluid.of("cmi:activated_graphite", 100),
        "cmi:raw_tungsten_dust"
    ])
    event.custom({
        "type": "immersiveindustry:chemical",
        "inputs": [
            {
                "tag": "forge:dusts/tungsten_mixture"
            }
        ],
        "input_fluids": [
            Fluid.tag("tag", "cmi:hydrochloric_acid", 100).toJson()
        ],
        "result_fluids": [
            Fluid.of("cmi:tungsten_solution", 200).toJson()
        ],
        "outputs": [],
        "time": 200
    })
    event.custom({
        "type": "immersiveindustry:chemical",
        "inputs": [
            {
                "tag": "forge:dusts/aluminum"
            }
        ],
        "input_fluids": [
            Fluid.tag("tag", "cmi:tungsten_solution", 100).toJson()
        ],
        "result_fluids": [],
        "outputs": [
            {
                "item": "cmi:tungsten_dust"
            }],
        "time": 200
    })
    // 钨钢板
    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 200,
        "fluid": {
            "fluidStack": {
                "Amount": 100,
                "FluidName": "immersiveengineering:redstone_acid"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "tag": "forge:plates/tungsten"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "cmi:titanium_alloy_mesh"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "tag": "forge:plates/alumium_alloy"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmi:incomplete_tungsten_steel_plate"
        }
    })
    create.deploying("cmi:composite_tungsten_steel_plate", [
        "cmi:incomplete_tungsten_steel_plate",
        "#forge:plates/tungsten_steel"
    ])
    // 复合板
    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 200,
        "fluid": {
            "fluidStack": {
                "Amount": 50,
                "FluidName": "cmi:structural_plastic"
            }
        },
        "input_items": [
            {
                "amount": 1,
                "ingredient": {
                    "item": "cmi:composite_tungsten_steel_plate"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "cmi:carbon_nanotube"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmi:incomplete_reinforced_composite_plate"
        }
    })
    mekanism.compressing("cmi:reinforced_composite_plate",
        "cmi:incomplete_reinforced_composite_plate",
        "2x mekanism:osmium"
    )
    // 钛
    event.custom({
        "type": "immersiveindustry:chemical",
        "inputs": [
            {
                "tag": "forge:gems/fluorite"
            }
        ],
        "input_fluids": [
            Fluid.tag("tag", "forge:sulfuric_acid", 100).toJson(),
            Fluid.tag("tag", "cmi:hydrochloric_acid", 100).toJson()
        ],
        "result_fluids": [
            Fluid.of("cmi:crystal_etching_solution", 300).toJson()
        ],
        "outputs": [],
        "time": 200
    })
    create.mixing(Fluid.of("cmi:sapphire_solution", 200), [
        "#forge:dusts/sapphire",
        Fluid.of("cmi:crystal_etching_solution", 100)
    ])
    event.custom({
        "type": "immersiveindustry:chemical",
        "inputs": [
            {
                "tag": "forge:dusts/coal_coke"
            }
        ],
        "input_fluids": [
            Fluid.tag("tag", "cmi:crystal_catalyt", 100).toJson(),
            Fluid.tag("tag", "cmi:sapphire_solution", 100).toJson()
        ],
        "result_fluids": [],
        "outputs": [
            {
                "item": "cmi:raw_titanium_dust"
            }
        ],
        "time": 200
    })
    thermal.smelter("cmi:raw_titanium_mixture",
        ["cmi:raw_titanium_dust",
            "#forge:dusts/aluminum"]
    )
    thermal.smelter(["cmi:titanium_dust", "create:crushed_raw_aluminum"], [
        "cmi:raw_titanium_mixture"
    ])
    thermal.smelter("cmi:titanium_alloy_ingot", [
        ["#forge:dusts/titanium", "#forge:ingots/titanium"],
        ["#forge:dusts/chromium", "#forge:ingots/chromium"]
    ])
    // 核电，轻而易举啊
    event.remove({
        "id": ""
    })

    mekanism.oxidizing("#forge:dusts/uranium",
        "mekanism:uranium_oxide"
    ).id("mekanism:processing/uranium/uranium_oxide")

    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 200,
        "fluid": {
            "fluidStack": {
                "Amount": 720,
                "FluidName": "tconstruct:molten_lead"
            }
        },
        "input_items": [
            {
                "amount": 32,
                "ingredient": {
                    "tag": "forge:ingots/hop_graphite"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "alexscaves:polymer_plate"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "item": "mekanism:reprocessed_fissile_fragment"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmi:empty_fuel_rod"
        }
    })
    thermal.bottler("cmi:filled_fuel_rod", [
        "cmi:empty_fuel_rod",
        Fluid.of("mekanism:uranium_hexafluoride", 100)
    ])
    mekanism.centrifuging(
        "mekanism:uranium_hexafluoride", "cmi:fissile_uranium_compound"
    ).id("mekanism:processing/uranium/fissile_fuel")
    event.custom({
        "type": "mekanism:reaction",
        "duration": 60,
        "energyRequired": 1000,
        "fluidInput": {
            "amount": 1000,
            "fluid": "minecraft:water"
        },
        "gasInput": {
            "amount": 100,
            "gas": "cmi:fissile_uranium_compound"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:ingots/uranium"
            }
        },
        "itemOutput": {
            "item": "mekanism:yellow_cake_uranium"
        }
    })
    mekanism.oxidizing("mekanism:yellow_cake_uranium",
        "200x mekanism:fissile_fuel"
    )
    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 200,
        "fluid": {
            "fluidStack": {
                "Amount": 4000,
                "FluidName": "cmi:structural_plastic"
            }
        },
        "input_items": [
            {
                "amount": 64,
                "ingredient": {
                    "item": "mekanismgenerators:fission_reactor_casing"
                }
            },
            {
                "amount": 32,
                "ingredient": {
                    "item": "mekanismgenerators:reactor_glass"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "item": "mekanismgenerators:fission_fuel_assembly"
                }
            },
            {
                "amount": 8,
                "ingredient": {
                    "item": "mekanismgenerators:control_rod_assembly"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "mekanismgenerators:fission_reactor_port"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "mekanism:steel_casing"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "mekanismgenerators:fission_reactor_logic_adapter"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmi:simulated_fission_reactor"
        }
    })
    // 核污水
    thermal_extra.advanced_refinery([
        "alexscaves:toxic_paste",
        Fluid.of("mekanism:sulfuric_acid", 200),
        Fluid.of("cmi:sludge_suspension", 100)],
        Fluid.of("alexscaves:acid", 500))
    // 聚合物板
    event.custom({
        "type": "mekanism:reaction",
        "duration": 60,
        "energyRequired": 1000,
        "fluidInput": {
            "amount": 1000,
            "fluid": "minecraft:water"
        },
        "gasInput": {
            "amount": 100,
            "gas": "cmi:radon"
        },
        "itemInput": {
            "ingredient": {
                "tag": "forge:plates/hdpe"
            }
        },
        "itemOutput": {
            "item": "alexscaves:polymer_plate"
        }
    })
    thermal_extra.endothermic_dehydrator("mekanism:hdpe_pellet",Fluid.of("cmi:hdpe",1000))

    mekanism.oxidizing("alexscaves:toxic_paste",
        "200x cmi:refined_nuke_waste"
    )
    mekanism.centrifuging(
        "cmi:refined_nuke_waste", "mekanism:tritium"
    )
    mekanism.activating("cmi:helium_3","mekanism:tritium")

    // 月壤
    mekanism.metallurgic_infusing(
        "mekanism:infused_alloy",
        "#forge:ingots/chromium",
        "mekanism:redstone"
    )
})
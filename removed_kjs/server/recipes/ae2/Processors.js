ServerEvents.recipes((event) => {
    let { create, vintageimprovements, createaddition } = event.recipes

    let Incomplete = {
        CONTROL: "create_connected:incomplete_control_chip",
        LOGIC: "cmi:incomplete_logic_processor",
        CALCULATION: "cmi:incomplete_calculation_processor",
        ENGINEERING: "cmi:incomplete_engineering_processor",
        QUANTUM: "cmi:incomplete_quantum_processor"
    }

    let Print = {
        LOGIC: "ae2:printed_logic_processor",
        CALCULATION: "ae2:printed_calculation_processor",
        ENGINEERING: "ae2:printed_engineering_processor",
        QUANTUM: "advanced_ae:printed_quantum_processor"
    }

    let Processor = {
        CONTROL: "create_connected:control_chip",
        LOGIC: "ae2:logic_processor",
        CALCULATION: "ae2:calculation_processor",
        ENGINEERING: "ae2:engineering_processor",
        QUANTUM: "advanced_ae:quantum_processor"
    }

    // 控制芯片
    create.sequenced_assembly(Processor.CONTROL, [
        "#forge:plates/copper"
    ], [
        create.deploying(Incomplete.CONTROL, [
            Incomplete.CONTROL,
            "create:polished_rose_quartz"
        ]),
        create.deploying(Incomplete.CONTROL, [
            Incomplete.CONTROL,
            "ae2:printed_silicon"
        ]),
        create.deploying(Incomplete.CONTROL, [
            Incomplete.CONTROL,
            "cmi:redstone_wire"
        ]),
        vintageimprovements.laser_cutting(Incomplete.CONTROL, [
            Incomplete.CONTROL
        ]).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Incomplete.CONTROL)
        .loops(1)
        .id("create_connected:sequenced_assembly/control_chip")

    // 逻辑处理器
    create.sequenced_assembly(Processor.LOGIC, [
        "#forge:ingots/electrum"
    ], [
        vintageimprovements.curving(Incomplete.LOGIC, [
            Incomplete.LOGIC
        ]).itemAsHead("ae2:logic_processor_press"),
        create.deploying(Incomplete.LOGIC, [
            Incomplete.LOGIC,
            "#forge:ingots/hop_graphite"
        ]),
        create.deploying(Incomplete.LOGIC, [
            Incomplete.LOGIC,
            "ae2:printed_silicon"
        ]),
        create.deploying(Incomplete.LOGIC, [
            Incomplete.LOGIC,
            "cmi:redstone_wire"
        ]),
        vintageimprovements.laser_cutting(Incomplete.LOGIC, [
            Incomplete.LOGIC
        ]).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Incomplete.LOGIC)
        .loops(1)
        .id("ae2:inscriber/logic_processor")

    // 计算处理器
    create.sequenced_assembly(Processor.CALCULATION, [
        "#forge:gems/certus_quartz"
    ], [
        vintageimprovements.curving(Incomplete.CALCULATION, [
            Incomplete.CALCULATION
        ]).itemAsHead("ae2:calculation_processor_press"),
        create.deploying(Incomplete.CALCULATION, [
            Incomplete.CALCULATION,
            "#forge:silicon"
        ]),
        create.deploying(Incomplete.CALCULATION, [
            Incomplete.CALCULATION,
            "ae2:printed_silicon"
        ]),
        create.deploying(Incomplete.CALCULATION, [
            Incomplete.CALCULATION,
            "cmi:redstone_wire"
        ]),
        vintageimprovements.laser_cutting(Incomplete.CALCULATION, [
            Incomplete.CALCULATION
        ]).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Incomplete.CALCULATION)
        .loops(1)
        .id("ae2:inscriber/calculation_processor")

    // 工程处理器
    create.sequenced_assembly(Processor.ENGINEERING, [
        "#forge:ingots/etrium"
    ], [
        vintageimprovements.curving(Incomplete.ENGINEERING, [
            Incomplete.ENGINEERING
        ]).itemAsHead("ae2:engineering_processor_press"),
        create.deploying(Incomplete.ENGINEERING, [
            Incomplete.ENGINEERING,
            "cmi:silicon_carbide"
        ]),
        create.deploying(Incomplete.ENGINEERING, [
            Incomplete.ENGINEERING,
            "ae2:printed_silicon"
        ]),
        create.deploying(Incomplete.ENGINEERING, [
            Incomplete.ENGINEERING,
            "cmi:redstone_wire"
        ]),
        vintageimprovements.laser_cutting(Incomplete.ENGINEERING,
            Incomplete.ENGINEERING
        ).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Incomplete.ENGINEERING)
        .loops(1)
        .id("ae2:inscriber/engineering_processor")

    // 量子处理器
    create.sequenced_assembly(Processor.QUANTUM, [
        "advanced_ae:quantum_alloy"
    ], [
        vintageimprovements.curving(Incomplete.QUANTUM, [
            Incomplete.QUANTUM
        ]).itemAsHead("advanced_ae:quantum_processor_press"),
        create.deploying(Print.QUANTUM, [
            Incomplete.QUANTUM,
            "cmi:single_crystal_silicon"
        ]),
        create.deploying(Print.QUANTUM, [
            Incomplete.QUANTUM,
            "ae2:printed_silicon"
        ]),
        create.deploying(Print.QUANTUM, [
            Incomplete.QUANTUM,
            "cmi:redstone_wire"
        ]),
        vintageimprovements.laser_cutting(Print.QUANTUM,
            Incomplete.QUANTUM
        ).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Print.QUANTUM)
        .loops(1)
        .id("advanced_ae:quantum_processor")

    // 切片
    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 1000,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "tag": "forge:storage_blocks/electrum"
            }
        },
        "output": {
            "count": 9,
            "item": Print.LOGIC
        }
    }).id("expatternprovider:cutter/logic")

    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 1000,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "tag": "forge:storage_blocks/certus_quartz"
            }
        },
        "output": {
            "count": 9,
            "item": Print.CALCULATION
        }
    }).id("expatternprovider:cutter/calculation")

    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 1000,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "tag": "forge:storage_blocks/etrium"
            }
        },
        "output": {
            "count": 9,
            "item": Print.ENGINEERING
        }
    }).id("expatternprovider:cutter/engineering")

    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 1000,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "item": "advanced_ae:quantum_alloy_block"
            }
        },
        "output": {
            "count": 9,
            "item": Print.QUANTUM
        }
    }).id("advanced_ae:quantum_processor_print_eae")

})
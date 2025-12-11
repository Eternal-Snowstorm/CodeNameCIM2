ServerEvents.recipes((event) => {
    let { create, vintageimprovements, createaddition } = event.recipes

    let Print = {
        CONTROL: "create_connected:incomplete_control_chip",
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
        create.deploying(Print.CONTROL, [
            Print.CONTROL,
            "minecraft:redstone"
        ]),
        create.deploying(Print.CONTROL, [
            Print.CONTROL,
            "ae2:printed_silicon"
        ]),
        create.deploying(Print.CONTROL, [
            Print.CONTROL,
            "immersiveengineering:wirecoil_redstone"
        ]),
        vintageimprovements.laser_cutting(Print.CONTROL, [
            Print.CONTROL
        ]).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Print.CONTROL)
        .loops(1)
        .id("create_connected:sequenced_assembly/control_chip")

    // 逻辑处理器
    create.sequenced_assembly(Processor.LOGIC, [
        "#forge:ingots/electrum"
    ], [
        vintageimprovements.curving(Print.LOGIC, [
            Print.LOGIC
        ]).itemAsHead("ae2:logic_processor_press"),
        create.deploying(Print.LOGIC, [
            Print.LOGIC,
            "create:polished_rose_quartz"
        ]),
        create.deploying(Print.LOGIC, [
            Print.LOGIC,
            "ae2:printed_silicon"
        ]),
        create.deploying(Print.LOGIC, [
            Print.LOGIC,
            "immersiveengineering:wirecoil_redstone"
        ]),
        vintageimprovements.laser_cutting(Print.LOGIC, [
            Print.LOGIC
        ]).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Print.LOGIC)
        .loops(1)
        .id("ae2:inscriber/logic_processor")

    // 计算处理器
    create.sequenced_assembly(Processor.CALCULATION, [
        "#forge:gems/certus_quartz"
    ], [
        vintageimprovements.curving(Print.CALCULATION, [
            Print.CALCULATION
        ]).itemAsHead("ae2:calculation_processor_press"),
        create.deploying(Print.CALCULATION, [
            Print.CALCULATION,
            "#forge:silicon"
        ]),
        create.deploying(Print.CALCULATION, [
            Print.CALCULATION,
            "ae2:printed_silicon"
        ]),
        create.deploying(Print.CALCULATION, [
            Print.CALCULATION,
            "immersiveengineering:wirecoil_redstone"
        ]),
        vintageimprovements.laser_cutting(Print.CALCULATION, [
            Print.CALCULATION
        ]).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Print.CALCULATION)
        .loops(1)
        .id("ae2:inscriber/calculation_processor")

    // 工程处理器
    create.sequenced_assembly(Processor.ENGINEERING, [
        "#forge:ingots/etrium"
    ], [
        vintageimprovements.curving(Print.ENGINEERING, [
            Print.ENGINEERING
        ]).itemAsHead("ae2:engineering_processor_press"),
        create.deploying(Print.ENGINEERING, [
            Print.ENGINEERING,
            "cmi:silicon_carbide"
        ]),
        create.deploying(Print.ENGINEERING, [
            Print.ENGINEERING,
            "ae2:printed_silicon"
        ]),
        create.deploying(Print.ENGINEERING, [
            Print.ENGINEERING,
            "immersiveengineering:wirecoil_redstone"
        ]),
        vintageimprovements.laser_cutting(Print.ENGINEERING,
            Print.ENGINEERING
        ).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Print.ENGINEERING)
        .loops(1)
        .id("ae2:inscriber/engineering_processor")

    // 量子处理器
    create.sequenced_assembly(Processor.QUANTUM, [
        "advanced_ae:quantum_alloy"
    ], [
        vintageimprovements.curving(Print.QUANTUM, [
            Print.QUANTUM
        ]).itemAsHead("advanced_ae:quantum_processor_press"),
        create.deploying(Print.QUANTUM, [
            Print.QUANTUM,
            "cmi:single_crystal_silicon"
        ]),
        create.deploying(Print.QUANTUM, [
            Print.QUANTUM,
            "ae2:printed_silicon"
        ]),
        create.deploying(Print.QUANTUM, [
            Print.QUANTUM,
            "immersiveengineering:wirecoil_redstone"
        ]),
        vintageimprovements.laser_cutting(Print.QUANTUM,
            Print.QUANTUM
        ).energy(4000).maxChargeRate(1000)
    ])
        .transitionalItem(Print.QUANTUM)
        .loops(1)
        .id("advanced_ae:quantum_processor")

})
ServerEvents.recipes((event) => {
    let { kubejs, create } = event.getRecipes()
    let Inc = {
        ENGINE: "cmi:incomplete_steam_engine"
    }

    // 应力源
    // 风车轴承
    kubejs.shaped("create:windmill_bearing", [
        "X",
        "C",
        "M"
    ], {
        M: Mechanism.ANDESITE.COM,
        C: Casing.ANDESITE,
        X: "#forge:plates/stone",
    }).id("create:crafting/kinetics/windmill_bearing")

    // 水车
    kubejs.shaped("create:water_wheel", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "immersiveengineering:waterwheel_segment",
        B: "create:andesite_casing"
    }).id("create:crafting/kinetics/water_wheel")

    // 大水车
    kubejs.shaped("create:large_water_wheel", [
        "A A",
        " B ",
        "A A"
    ], {
        A: "immersiveengineering:waterwheel_segment",
        B: "create:water_wheel"
    }).id("create:crafting/kinetics/large_water_wheel")

    kubejs.shaped("create:large_water_wheel", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "immersiveengineering:waterwheel_segment",
        B: "create:andesite_casing"
    })

    // 小引擎
    kubejs.shaped("createdieselgenerators:diesel_engine", [
        "ABA",
        "BCB",
        "DDD"
    ], {
        A: "createdieselgenerators:engine_piston",
        B: "#forge:plates/brass",
        C: "create:precision_mechanism",
        D: "tconstruct:seared_brick"
    }).id("creatediselgenerators:diesel_engine")

    // 中引擎
    kubejs.shaped("createdieselgenerators:large_diesel_engine", [
        "ABA",
        "BCB",
        "DDD"
    ], {
        A: "createdieselgenerators:engine_piston",
        B: "#forge:plates/cast_iron",
        C: "cmi:light_engineering_mechanism",
        D: "tconstruct:scorched_brick"
    }).id("creatediselgenerators:large_diesel_engine")

    // 大引擎
    kubejs.shaped("createdieselgenerators:huge_diesel_engine", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "#forge:plates/steel",
        B: "minecraft:flint_and_steel",
        C: "cmi:heavy_engineering_mechanism",
        D: "create:steam_engine",
        E: "create:fluid_pipe"
    }).id("creatediselgenerators:huge_diesel_engine")

    let materials = [
        {
            id: "bronze",
            block: "tconstruct:seared_bricks"
        },
        {
            id: "cast_iron",
            block: "tconstruct:scorched_bricks"
        },
        {
            id: "steel",
            block: "immersiveengineering:blastbrick"
        }
    ]
    materials.forEach((material) => {
        let ingot = `#forge:ingots/${material.id}`
        let plate = `#forge:plates/${material.id}`

        // 锅炉
        kubejs.shaped(`steampowered:${material.id}_boiler`, [
            "AAA",
            "ACA",
            "ABA"
        ], {
            A: [plate, ingot],
            B: "create:fluid_pipe",
            C: "create:fluid_tank"
        })

        // 燃烧室
        kubejs.shaped(`steampowered:${material.id}_burner`, [
            "AAA",
            "ABA",
            "CCC"
        ], {
            A: [plate, ingot],
            B: ["minecraft:furnace", "minecraft:smoker", "minecraft:blast_furnace"],
            C: material.block
        })

        // 蒸汽引擎
        kubejs.shaped(`steampowered:${material.id}_steam_engine`, [
            "ABC",
            "EDF",
            "ABC"
        ], {
            A: plate,
            B: ingot,
            C: "create:andesite_alloy",
            D: "cmi:bronze_mechanism",
            E: "create:fluid_pipe",
            F: "create:shaft"
        })

        // 飞轮
        kubejs.shaped(`steampowered:${material.id}_flywheel`, [
            "AB ",
            "BCB",
            "AB "
        ], {
            A: "createdieselgenerators:engine_piston",
            B: plate,
            C: "create:flywheel"
        })
    })

    // 蒸汽引擎
    create.sequenced_assembly("create:steam_engine", [
        "create:copper_casing"
    ], [
        create.deploying(Inc.ENGINE, [
            Inc.ENGINE,
            "cmi:bronze_mechanism"
        ]),
        create.cutting(Inc.ENGINE, [
            Inc.ENGINE
        ]),
        create.deploying(Inc.ENGINE, [
            Inc.ENGINE,
            "createdieselgenerators:engine_piston"
        ]),
        create.deploying(Inc.ENGINE, [
            Inc.ENGINE,
            "#forge:plates/steel"
        ]),
        create.deploying(Inc.ENGINE, [
            Inc.ENGINE,
            "create:precision_mechanism"
        ])
    ]).loops(1).transitionalItem(Inc.ENGINE)
        .id("create:crafting/kinetics/steam_engine")

})
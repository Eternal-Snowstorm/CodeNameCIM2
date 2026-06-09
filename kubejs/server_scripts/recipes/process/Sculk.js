ServerEvents.recipes((event) => {
    let { create, minecraft, kubejs } = event.getRecipes()

    event.remove({
        id: "create/haunting/lapis_recycling",
        id: "create/crushing/prismarine_crystals"
    })

    // 粉碎
    create.crushing([
        Item.of("cmi:sculk_chunk"),
        Item.of("cmi:sculk_chunk", 2).withChance(0.5),
        Item.of("create:experience_nugget").withChance(0.25)
    ], [
        "minecraft:sculk"
    ])
    create.crushing([
        Item.of("cmi:sculk_bonemeal"),
        Item.of("cmi:sculk_chunk"),
        Item.of("cmi:sculk_chunk", 2).withChance(0.5),
        Item.of("create:experience_nugget").withChance(0.25)
    ], [
        "minecraft:sculk_catalyst"
    ])

    // 灭活
    create.filling("cmi:dead_sculk", [
        Fluid.of("mekanism:steam", 100),
        "cmi:sculk_chunk"
    ])

    // 活化
    create.filling("cmi:active_sculk", [
        Fluid.of("create_enchantment_industry:flowing_experience", 100),
        "cmi:sculk_chunk"
    ])

    // 火化
    minecraft.smelting("cmi:small_coal_coke", [
        "cmi:sculk_chunk"
    ])

    // 焦炭
    kubejs.shaped("thermal:coal_coke", [
        "XXX",
        "XXX",
        "XXX",
    ],
        {
            X: "cmi:small_coal_coke"
        }
    )

    // 末影珍珠粉
    create.haunting("thermal:ender_pearl_dust", [
        "cmi:dead_sculk"
    ])

    // 幽匿感测体
    create.sequenced_assembly([
        "minecraft:sculk_sensor"
    ], "minecraft:sculk", [
        create.pressing("cmi:sculk_chunk", [
            "cmi:sculk_chunk",
            "cmi:sculk_chunk"
        ]),
        create.filling("cmi:sculk_chunk", [
            "cmi:sculk_chunk",
            Fluid.of("cmi:sculk_culture_medium", 50)
        ]),
        create.deploying("cmi:sculk_chunk", [
            "cmi:sculk_chunk",
            "cmi:active_sculk"
        ]),
        create.filling("cmi:sculk_chunk", [
            "cmi:sculk_chunk",
            Fluid.of("create_enchantment_industry:flowing_experience", 50)
        ])
    ]).transitionalItem("cmi:sculk_chunk").loops(1)

    // 培养液
    create.mixing(Fluid.of("cmi:sculk_culture_medium", 100,), [
        "cmi:sculk_chunk",
        Fluid.of("minecraft:water", 100),
        Fluid.of("create_enchantment_industry:flowing_experience", 5)
    ])

    // 骨粉
    minecraft.smelting("minecraft:bone_meal", [
        "cmi:sculk_bonemeal"
    ])

    // 幽匿之骨
    create.mixing("cmi:sculk_bone", [
        "cmi:sculk_bonemeal",
        Fluid.of("cmi:sculk_culture_medium", 100),
    ])


    // 回响碎片
    create.filling("minecraft:echo_shard", [
        "cmi:charged_amethyst",
        Fluid.of("cmi:sculk_culture_medium", 100)
    ])

    // 不可合成药水
    create.compacting(
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "cmi:sb"
        }, 5000),
        Mechanism.POTION.COM
    )

    // #deep_base
    create.mixing(
        Fluid.of("create:potion", 250, {
            Bottle: "LINGERING",
            Potion: "minecraft:weakness"
        }), [
        "4x cmi:sculk_chunk",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "cmi:sb"
        }, 250),
    ]).heated()

    // #overworld
    create.mixing(
        Fluid.of("create:potion", 250, {
            Bottle: "LINGERING",
            Potion: "minecraft:invisibility"
        }), [
        "4x createdieselgenerators:wood_chip",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "minecraft:weakness"
        }, 250),
    ]).heated()

    // #nether
    create.mixing(
        Fluid.of("create:potion", 250, {
            Bottle: "LINGERING",
            Potion: "minecraft:fire_resistance"
        }), [
        "4x create:cinder_flour",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "minecraft:weakness"
        }, 250),
    ]).heated()

    // #ender
    create.mixing(
        Fluid.of("create:potion", 250, {
            Bottle: "LINGERING",
            Potion: "tconstruct:long_ender_ference"
        }), [
        "4x thermal:ender_dust",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "minecraft:weakness"
        }, 250),
    ]).heated()

    // 末地石粉
    create.mixing(
        "cmi:ender_stone_dust", [
        "4x create:powdered_obsidian",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "tconstruct:long_ender_ference"
        }, 250),
    ]).heated()

    // 陨石粉
    create.mixing(
        "ae2:sky_dust", [
        "4x cmi:void_dust",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "minecraft:invisibility"
        }, 250),
    ]).heated()

    // 萤石粉
    create.mixing(
        "minecraft:glowstone_dust", [
        "4x thermal_extra:amethyst_dust",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "minecraft:invisibility"
        }, 250),
    ]).heated()

    // 钨粉
    create.mixing(
        Item.of("cmi:tungsten_dust").withChance(0.1), [
        "4x thermal_quartz_dust",
        Fluid.of("create:potion", {
            Bottle: "LINGERING",
            Potion: "minecraft:fire_resistance"
        }, 250),
    ]).heated()

    // 
})
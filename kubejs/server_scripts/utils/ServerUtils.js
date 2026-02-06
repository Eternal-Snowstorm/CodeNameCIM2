// 构件相关物品统一调用
let Mechanism = Object.freeze({
    // C0
    WOODEN: Object.freeze({
        COM: Item.of("cmi:wooden_mechanism"),
        INC: Item.of("cmi:incomplete_wooden_mechanism")
    }),
    STONE: Object.freeze({
        COM: Item.of("cmi:stone_mechanism"),
        INC: Item.of("cmi:incomplete_stone_mechanism")
    }),
    REDSTONE: Object.freeze({
        COM: Item.of("vintageimprovements:redstone_module"),
        INC: Item.of("vintageimprovements:incomplete_redstone_module")
    }),
    NATURE: Object.freeze({
        COM: Item.of("cmi:nature_mechanism"),
        INC: Item.of("cmi:incomplete_nature_mechanism")
    }),
    // C1
    ANDESITE: Object.freeze({
        COM: Item.of("cmi:andesite_mechanism"),
        INC: Item.of("cmi:incomplete_andesite_mechanism"),
        BAS: Item.of("cmi:andesite_mechanism_basement")

    }),
    COPPER: Object.freeze({
        COM: Item.of("cmi:copper_mechanism"),
        INC: Item.of("cmi:incomplete_copper_mechanism"),
        BAS: Item.of("cmi:copper_mechanism_basement")
    }),
    IRON: Object.freeze({
        COM: Item.of("cmi:iron_mechanism"),
        INC: Item.of("cmi:incomplete_iron_mechanism"),
        BAS: Item.of("cmi:iron_mechanism_basement")
    }),
    PIG_IRON: Object.freeze({
        COM: Item.of("cmi:pig_iron_mechanism"),
        INC: Item.of("cmi:incomplete_pig_iron_mechanism")
    }),
    POTION: Object.freeze({
        COM: Item.of("cmi:potion_mechanism"),
        INC: Item.of("cmi:incomplete_potion_mechanism")
    }),
    // C2
    STEAM: Object.freeze({
        COM: Item.of("cmi:bronze_mechanism"),
        INC: Item.of("cmi:incomplete_bronze_mechanism")
    }),
    RAILWAY: Object.freeze({
        COM: Item.of("cmi:railway_mechanism"),
        INC: Item.of("cmi:incomplete_railway_mechanism")
    }),
    NETHER: Object.freeze({
        COM: Item.of("cmi:nether_mechanism"),
        INC: Item.of("cmi:incomplete_nether_mechanism")
    }),
    ENCHANTED: Object.freeze({
        COM: Item.of("cmi:enchanted_mechanism"),
        INC: Item.of("cmi:incomplete_enchanted_mechanism")
    }),
    GOLD: Object.freeze({
        COM: Item.of("cmi:gold_mechanism"),
        INC: Item.of("cmi:incomplete_gold_mechanism")
    }),
    //C3
    COIL: Object.freeze({
        COM: Item.of("cmi:coil_mechanism"),
        INC: Item.of("cmi:incomplete_coil_mechanism"),
        AUG: Item.of("cmi:coil_mechanism_augment")
    }),
    PHOTO: Object.freeze({
        COM: Item.of("cmi:photosensitive_mechanism"),
        INC: Item.of("cmi:incomplete_photosensitive_mechanism")
    }),
    PRECISION: Object.freeze({
        COM: Item.of("create:precision_mechanism"),
        INC: Item.of("create:incomplete_precision_mechanism")
    }),
    COBALT: Object.freeze({
        COM: Item.of("cmi:cobalt_mechanism"),
        INC: Item.of("cmi:incomplete_cobalt_mechanism")
    }),
    COLOR: Object.freeze({
        COM: Item.of("cmi:colorful_mechanism"),
        INC: Item.of("cmi:incomplete_colorful_mechanism")
    }),
    // C4
    THERMAL: Object.freeze({
        COM: Item.of("cmi:thermal_mechanism"),
        INC: Item.of("cmi:incomplete_thermal_mechanism"),
        AUG: Item.of("cmi:thermal_mechanism_augment")
    }),
    LIGHT: Object.freeze({
        COM: Item.of("cmi:light_engineering_mechanism"),
        INC: Item.of("cmi:incomplete_light_engineering_mechanism"),
        AUG: Item.of("cmi:light_engineering_mechanism_augment")
    }),
    SMART: Object.freeze({
        COM: Item.of("cmi:smart_mechanism"),
        INC: Item.of("cmi:incomplete_smart_mechanism"),
        AUG: Item.of("cmi:smart_mechanism_augment")
    }),
    SCULK: Object.freeze({
        COM: Item.of("cmi:sculk_mechanism"),
        INC: Item.of("cmi:incomplete_sculk_mechanism")
    }),
    // C5
    REINFORCED: Object.freeze({
        COM: Item.of("cmi:reinforced_mechanism"),
        INC: Item.of("cmi:incomplete_reinforced_mechanism"),
        AUG: Item.of("cmi:reinforced_mechanism_augment")
    }),
    HEAVY: Object.freeze({
        COM: Item.of("cmi:heavy_engineering_mechanism"),
        INC: Item.of("cmi:incomplete_heavy_engineering_mechanism"),
        AUG: Item.of("cmi:heavy_engineering_mechanism_augment")
    }),
    ENDER: Object.freeze({
        COM: Item.of("cmi:ender_mechanism"),
        INC: Item.of("cmi:incomplete_ender_mechanism"),
        BAS: Item.of("cmi:ender_mechanism_basement")
    }),
    // C6
    BASIC: Object.freeze({
        COM: Item.of("cmi:basic_mekanism_mechanism"),
        INC: Item.of("cmi:incomplete_basic_mekanism_mechanism"),
        BAS: Item.of("cmi:basic_mekanism_mechanism_basement")
    }),
    AVI1: Object.freeze({
        COM: Item.of("cmi:tier_1_aviation_mechanism"),
        INC: Item.of("cmi:incomplete_tier_1_aviation_mechanism"),
        BAS: Item.of("cmi:tier_1_aviation_mechanism_basement")
    }),
    COMPUTE: Object.freeze({
        COM: Item.of("cmi:computing_mechanism"),
        INC: Item.of("cmi:incomplete_computing_mechanism"),
        BAS: Item.of("cmi:computing_mechanism_basement")
    }),
    // C7
    ADVANCED: Object.freeze({
        COM: Item.of("cmi:advanced_mekanism_mechanism"),
        INC: Item.of("cmi:incomplete_advanced_mekanism_mechanism"),
        BAS: Item.of("cmi:advanced_mekanism_mechanism_basement")
    }),
    AVI2: Object.freeze({
        COM: Item.of("cmi:tier_2_aviation_mechanism"),
        INC: Item.of("cmi:incomplete_tier_2_aviation_mechanism"),
        BAS: Item.of("cmi:tier_2_aviation_mechanism_basement")
    }),
    AIR: Object.freeze({
        COM: Item.of("cmi:air_tight_mechanism"),
        INC: Item.of("cmi:incomplete_air_tight_mechanism"),
        BAS: Item.of("cmi:air_tight_mechanism_basement")
    }),
    // C8
    ELITE: Object.freeze({
        COM: Item.of("cmi:elite_mekanism_mechanism"),
        INC: Item.of("cmi:incomplete_elite_mekanism_mechanism"),
        BAS: Item.of("cmi:elite_mekanism_mechanism_basement")
    }),
    NUKE: Object.freeze({
        COM: Item.of("cmi:nuclear_mechanism"),
        INC: Item.of("cmi:incomplete_nuclear_mechanism"),
        BAS: Item.of("cmi:nuclear_mechanism_basement")
    }),
    AVI3: Object.freeze({
        COM: Item.of("cmi:tier_3_aviation_mechanism"),
        INC: Item.of("cmi:incomplete_tier_3_aviation_mechanism"),
        BAS: Item.of("cmi:tier_3_aviation_mechanism_basement")
    }),
    // C9
    ULTIMATE: Object.freeze({
        COM: Item.of("cmi:ultimate_mekanism_mechanism"),
        INC: Item.of("cmi:incomplete_ultimate_mekanism_mechanism"),
        BAS: Item.of("cmi:ultimate_mekanism_mechanism_basement")
    }),
    AVI4: Object.freeze({
        COM: Item.of("cmi:tier_4_aviation_mechanism"),
        INC: Item.of("cmi:incomplete_tier_4_aviation_mechanism"),
        BAS: Item.of("cmi:tier_4_aviation_mechanism_basement")
    }),
    ANTI: Object.freeze({
        COM: Item.of("cmi:antimatter_mechanism"),
        INC: Item.of("cmi:incomplete_antimatter_mechanism"),
        BAS: Item.of("cmi:antimatter_mechanism_basement")
    })
})

let Material = Object.freeze({
    Incomplete: Object.freeze({
        Circuit: Object.freeze({
            ADVANCED: Item.of("cmi:incomplete_advanced_control_circuit"),
            ELITE: Item.of("cmi:incomplete_elite_control_circuit"),
            ULTIMATE: Item.of("cmi:incomplete_ultimate_cotrol_circuit"),
            LOGIC: Item.of("cmi:incomplete_logic_processor"),
            CALCULATION: Item.of("cmi:incomplete_calculation_processor"),
            ENGINEERING: Item.of("cmi:incomplete_engineering_processor"),
            QUANTUM: Item.of("cmi:incomplete_quantum_processor")
        })
    })
})
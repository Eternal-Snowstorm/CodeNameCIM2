ServerEvents.recipes((event) => {
    let { create, kubejs } = event.recipes
    let Mech = {
        T1: "cmi:tier_1_aviation_mechanism",
        T2: "cmi:tier_2_aviation_mechanism",
        T3: "cmi:tier_3_aviation_mechanism",
        T4: "cmi:tier_4_aviation_mechanism",
        AIR: "cmi:air_tight_mechanism"
    }

    // 航天服T1
    create.mechanical_crafting("ad_astra:space_helmet", [
        " AEA ",
        "ABCBA",
        "ABDBA"
    ], {
        A: "#forge:plates/aluminum",
        B: "#forge:plates/polyolefin",
        C: "create:copper_diving_helmet",
        D: Mech.AIR,
        E: Mech.T1
    }).id("ad_astra:space_helmet")

    create.mechanical_crafting("ad_astra:space_suit", [
        " ABA ",
        "ACDCA",
        "AEFEA",
        "ACGCA"
    ], {
        A: "#forge:plates/aluminum",
        B: Mech.AIR,
        C: "#forge:plates/polyolefin",
        D: "ad_astra:oxygen_gear",
        E: "#forge:fabric_hemp",
        F: "create_jetpack:jetpack",
        G: Mech.T1
    }).id("ad_astra:space_suit")

    create.mechanical_crafting("ad_astra:space_pants", [
        " A A ",
        "ACBCA",
        " D D ",
        "AB BA",
        " A A "
    ], {
        A: "#forge:plates/aluminum",
        B: "#forge:plates/polyolefin",
        C: Mech.T1,
        D: "#forge:fabric_hemp"
    }).id("ad_astra:space_pants")

    create.mechanical_crafting("ad_astra:space_boots", [
        "ACDCA",
        "AB BA",
    ], {
        A: "#forge:plates/aluminum",
        B: "#forge:plates/polyolefin",
        C: "#forge:fabric_hemp",
        D: Mech.T1
    }).id("ad_astra:space_boots")

    // 航天服T2
    create.mechanical_crafting("ad_astra:netherite_space_helmet", [
        " AEA ",
        "ABCBA",
        "ABDBA"
    ], {
        A: "#forge:plates/ostrum",
        B: "#forge:plates/hdpe",
        C: "create:netherite_diving_helmet",
        D: Mech.AIR,
        E: Mech.T3
    }).id("ad_astra:netherite_space_helmet")

    create.mechanical_crafting("ad_astra:netherite_space_helmet", [
        " D ",
        "BEB",
        "ACA"
    ], {
        A: "#forge:plates/ostrum",
        B: "#forge:plates/hdpe",
        C: "ad_astra:space_helmet",
        D: "minecraft:netherite_helmet",
        E: Mech.T3
    })

    create.mechanical_crafting("ad_astra:netherite_space_suit", [
        " ABA ",
        "ACDCA",
        "AEFEA",
        "ACGCA"
    ], {
        A: "#forge:plates/ostrum",
        B: Mech.AIR,
        C: "#forge:plates/hdpe",
        D: "ad_astra:oxygen_gear",
        E: "#forge:fabric_hemp",
        F: "create_jetpack:netherite_jetpack",
        G: Mech.T3
    }).id("ad_astra:netherite_space_suit")

    create.mechanical_crafting("ad_astra:netherite_space_suit", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "#forge:plates/ostrum",
        B: "minecraft:netherite_chestplate",
        C: "#forge:plates/hdpe",
        D: Mech.T3,
        E: "ad_astra:space_suit"
    })

    create.mechanical_crafting("ad_astra:netherite_space_pants", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "#forge:plates/ostrum",
        B: "minecraft:netherite_leggings",
        C: "#forge:plates/hdpe",
        D: Mech.T3,
        E: "ad_astra:space_pants"
    }).id("ad_astra:netherite_space_pants")

    create.mechanical_crafting("ad_astra:netherite_space_boots", [
        " B ",
        "CDC",
        "AEA"
    ], {
        A: "#forge:plates/ostrum",
        B: "minecraft:netherite_boots",
        C: "#forge:plates/hdpe",
        D: Mech.T3,
        E: "ad_astra:space_boots"
    }).id("ad_astra:netherite_space_boots")

    // 航天服T3
    create.mechanical_crafting("ad_astra:jet_suit_helmet", [
        "A A",
        " C ",
        "ABA"
    ], {
        A: "#forge:plates/calorite",
        B: Mech.T4,
        C: "ad_astra:netherite_space_helmet"
    }).id("ad_astra:jet_suit_helmet")

    create.mechanical_crafting("ad_astra:jet_suit", [
        " A ",
        "ABA",
        "DCD"
    ], {
        A: "#forge:plates/calorite",
        B: "ad_astra:netherite_space_suit",
        C: "ad_astra:calorite_tank",
        D: Mech.T4
    }).id("ad_astra:jet_suit")
    create.mechanical_crafting("ad_astra:jet_suit_pants", [
        "A A",
        " C ",
        "ABA"
    ], {
        A: "#forge:plates/calorite",
        B: Mech.T4,
        C: "ad_astra:netherite_space_pants"
    }).id("ad_astra:jet_suit_pants")

    create.mechanical_crafting("ad_astra:jet_suit_boots", [
        "A A",
        " C ",
        "ABA"
    ], {
        A: "#forge:plates/calorite",
        B: Mech.T4,
        C: "ad_astra:netherite_space_boots"
    }).id("ad_astra:jet_suit_boots")
})
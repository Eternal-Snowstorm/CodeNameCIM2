ServerEvents.recipes((event) => {
    let { kubejs, minecraft } = event.recipes

    // 桶
    kubejs.shaped("minecraft:bucket", [
        "A A",
        " A "
    ], {
        A: "#forge:plates/andesite_alloy"
    })

    // 催生器
    kubejs.shaped("cmi:accelerator", [
        "ABA",
        "CDC",
        "AEA"
    ], {
        A: "#forge:stone",
        B: "#create:mechanisms/gold",
        C: "#create:mechanisms/stone",
        D: "#forge:gems/charged_amethyst",
        E: "#create:mechanisms/iron"
    }).id("cmi:accelerator")

    // 水泵
    kubejs.shaped("cmi:water_pump", [
        "ACA",
        "ABA",
        "AAA"
    ], {
        A: "#forge:treated_wood",
        B: "cmi:copper_mechanism",
        C: "#forge:plates/iron"
    }).id("cmi:water_pump")

    // TNT
    kubejs.shaped("minecraft:tnt", [
        "AA",
        "AA"
    ], {
        A: "cmi:trinitrotoluene"
    }).id("minecraft:tnt")

    // 木龙头
    kubejs.shaped("cmi:wooden_faucet", [
        " A ",
        "BBB",
        "  B"
    ], {
        A: "#forge:rods/wooden",
        B: "#minecraft:planks"
    })

    // 铸铁龙头
    kubejs.shaped("cmi:cast_iron_faucet", [
        " A ",
        "BBB",
        "  B"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/cast_iron"
    })

    // 钢龙头
    kubejs.shaped("cmi:steel_faucet", [
        " A ",
        "BBB",
        "  B"
    ], {
        A: "#minecraft:planks",
        B: "#forge:plates/steel"
    })

    // 橡胶手
    kubejs.shaped("create:brass_hand", [
        " A ",
        "BBB",
        " B "
    ], {
        A: "#forge:ingots/andesite_alloy",
        B: "thermal:cured_rubber"
    }).id("create:crafting/kinetics/brass_hand")

    // 传送带
    kubejs.shaped("4x create:belt_connector", [
        "AAA",
        "AAA"
    ], {
        A: "thermal:cured_rubber"
    })

    // 冲击桩
    kubejs.shaped("cmi:impact_pile", [
        "A",
        "B",
        "B"
    ], {
        A: "#forge:plates/invar",
        B: "#forge:rods/netherite"
    })

    // 群系指南针
    kubejs.shaped("naturescompass:naturescompass", [
        "AAA",
        "ABA",
        "CDC"
    ], {
        A: "#minecraft:leaves",
        B: "minecraft:compass",
        C: "#minecraft:saplings",
        D: "cmi:nature_mechanism"
    }).id("naturescompass:natures_compass")

    // 结构指南针
    kubejs.shaped("explorerscompass:explorerscompass", [
        "AAA",
        "ABA",
        "CDC"
    ], {
        A: "#forge:stone",
        B: "minecraft:compass",
        C: "minecraft:flint",
        D: "cmi:stone_mechanism"
    }).id("explorerscompass:explorers_compass")

    // 泥炭块
    kubejs.shaped("cmi:peat_block", [
        "AA",
        "AA"
    ], {
        A: "cmi:peat"
    })

    kubejs.shapeless("4x cmi:peat", [
        "cmi:peat_block"
    ])

})
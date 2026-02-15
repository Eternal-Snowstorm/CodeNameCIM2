ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    const MECH = Mechanism.STONE.COM
    const BRICK = "tconstruct:seared_brick"
    const PRISM = "cmi:polished_quartz_prism"

    kubejs.shaped("tconstruct:seared_melter", [
        "BXB",
        "BMB"
    ], {
        M: MECH,
        B: BRICK,
        X: "#tconstruct:gauge"
    }).id("tconstruct:smeltery/seared/melter")

    kubejs.shaped("tconstruct:seared_heater", [
        "BBB",
        "BMB",
        "BBB"
    ], {
        M: MECH,
        B: BRICK
    }).id("tconstruct:smeltery/seared/heater")

    kubejs.shaped("tconstruct:seared_fuel_tank", [
        "BBB",
        "BPB",
        "BBB"
    ], {
        P: PRISM,
        B: BRICK
    }).id("tconstruct:smeltery/seared/fuel_tank")

    kubejs.shaped("tconstruct:seared_ingot_tank", [
        "BPB",
        "BPB",
        "BPB"
    ], {
        P: PRISM,
        B: BRICK
    }).id("tconstruct:smeltery/seared/ingot_tank")

    kubejs.shaped("tconstruct:seared_fuel_gauge", [
        "BPB",
        "PPP",
        "BPB"
    ], {
        P: PRISM,
        B: BRICK
    }).id("tconstruct:smeltery/seared/fuel_gauge")

    kubejs.shaped("tconstruct:seared_ingot_gauge", [
        "PBP",
        "BPB",
        "PBP"
    ], {
        P: PRISM,
        B: BRICK
    }).id("tconstruct:smeltery/seared/ingot_gauge")

    kubejs.shaped("tconstruct:seared_glass", [
        "PBP",
        "BPB",
        "PBP"
    ], {
        P: PRISM,
        B: BRICK
    }).id("tconstruct:smeltery/seared/seared_glass")

    kubejs.shaped("tconstruct:cast_chest", [
        "BXB",
        "BYB",
        "BMB"
    ], {
        M: MECH,
        B: BRICK,
        X: "#tconstruct:patterns/reusable",
        Y: "#forge:chests"
    }).id("tconstruct:tables/cast_chest")

    
})
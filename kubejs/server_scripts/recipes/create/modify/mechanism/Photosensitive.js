ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    const MECH = "cmi:photosensitive_mechanism"
    const TUBE = "create:electron_tube"
    const SHARD = "minecraft:amethyst_shard"

    // 辉光管
    kubejs.shaped("create:nixie_tube", [
        "C C",
        "BAB"
    ], {
        A: MECH,
        B: "#forge:plates/iron",
        C: "#forge:glass"
    }).id("create:crafting/kinetics/nixie_tube")

    // 阳光传感器
    kubejs.shaped("minecraft:daylight_detector", [
        "A",
        "B",
        "C"
    ], {
        B: MECH,
        A: "#forge:glass",
        C: "#minecraft:wooden_slabs"
    }).id("minecraft:daylight_detector")

})
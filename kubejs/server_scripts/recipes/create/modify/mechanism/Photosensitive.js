ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes
    let mech = "cmi:photosensitive_mechanism"
    let tube = "create:electron_tube"
    let shard = "minecraft:amethyst_shard"

    // 辉光管
    kubejs.shaped("create:nixie_tube", [
        "C C",
        "BAB"
    ], {
        A: mech,
        B: "#forge:plates/iron",
        C: "#forge:glass"
    }).id("create:crafting/kinetics/nixie_tube")

})
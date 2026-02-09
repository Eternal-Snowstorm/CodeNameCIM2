ServerEvents.recipes((event) => {
    let { kubejs, create, tconstruct } = event.recipes

    // 物品抽屉
    let drawerWoodTypes = [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak",
        "mangrove",
        "crimson",
        "warped",
        "cherry"
    ]
    drawerWoodTypes.forEach((type) => {
        // 物品抽屉1
        kubejs.shaped(`functionalstorage:${type}_1`, [
            "AAA",
            "ABA",
            "AAA"
        ], {
            A: `minecraft:${type}_planks`,
            B: Mechanism.WOODEN.COM
        }).id(`functionalstorage:${type}_1`)

        // 物品抽屉2
        kubejs.shaped(`2x functionalstorage:${type}_2`, [
            "ABA",
            "AAA",
            "ABA"
        ], {
            A: `minecraft:${type}_planks`,
            B: Mechanism.WOODEN.COM
        }).id(`functionalstorage:${type}_2`)

        // 物品抽屉4
        kubejs.shaped(`4x functionalstorage:${type}_4`, [
            "ABA",
            "BAB",
            "ABA"
        ], {
            A: `minecraft:${type}_planks`,
            B: Mechanism.WOODEN.COM
        }).id(`functionalstorage:${type}_4`)
    })

    // 流体抽屉1
    kubejs.shaped("functionalstorage:fluid_1", [
        "AAA",
        "ABA",
        "AAA"
    ], {
        A: "#forge:plates/iron",
        B: Mechanism.COPPER.COM
    }).id("functionalstorage:fluid_1")

    // 流体抽屉2
    kubejs.shaped("functionalstorage:fluid_2", [
        "ABA",
        "AAA",
        "ABA"
    ], {
        A: "#forge:plates/iron",
        B: Mechanism.COPPER.COM
    }).id("functionalstorage:fluid_2")

    // 流体抽屉4
    kubejs.shaped("functionalstorage:fluid_4", [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "#forge:plates/iron",
        B: Mechanism.COPPER.COM
    }).id("functionalstorage:fluid_4")
})
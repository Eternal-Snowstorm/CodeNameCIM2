ServerEvents.recipes((event) => {
    let { create } = event.recipes

    create.mechanical_crafting("4x create:crushing_wheel", [
        " AAA ",
        "AABAA",
        "ABCBA",
        "AABAA",
        " AAA "
    ], {
        A: "create:andesite_alloy",
        B: "thermal:iron_gear",
        C: "cmi:andesite_mechanism"
    })
        .id("create:mechanical_crafting/crushing_wheel")
})
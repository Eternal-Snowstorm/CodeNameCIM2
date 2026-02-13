ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    thermal.press("2x immersiveengineering:empty_casing", [
        "#forge:ingots/brass",
        "cmi:bullet_mold"
    ])

    thermal.press("cmi:wooden_gear", [
        "4x #minecraft:planks",
        "cmi:gear_mold"
    ])
})

ServerEvents.recipes((event) => {
    let { thermal } = event.getRecipes()

    thermal.centrifuge([
        Item.of("minecraft:blaze_powder").withChance(0.5),
        Item.of("thermal:basalz_powder").withChance(0.5),
        Item.of("thermal:blitz_powder").withChance(0.5),
        Item.of("thermal:blizz_powder").withChance(0.5),
    ], [
        "#forge:dusts/void"
    ])
})
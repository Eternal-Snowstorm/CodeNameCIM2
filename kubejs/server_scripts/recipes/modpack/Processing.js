global.metalGroup.forEach((metal) => {


    let dustIds = Ingredient.of(`#forge:dusts/${metal}`).getItemIds()
    let ingotIds = Ingredient.of(`#forge:ingots/${metal}`).getItemIds()

    ServerEvents.recipes((event) => {
        let { thermal } = event.recipes
        if (IngredientUtils.isNotNull(`#forge:dusts/${metal}`)) {
            thermal.pulverizer(
                dustIds[0],
                `#mekanism:clumps/${metal}`
            )
            thermal.crystallizer(
                ingotIds[0],
                [
                    `4x #forge:dusts/${metal}`,
                    Fluid.of("minecraft:lava", 250)
                ]
            )
        }
    })
})
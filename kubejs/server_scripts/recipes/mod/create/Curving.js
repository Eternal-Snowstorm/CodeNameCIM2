ServerEvents.recipes((event) => {
    let { vintageimprovements } = event.getRecipes()
    vintageimprovements.curving("cmi:wooden_gear",
        "#minecraft:logs"
    ).itemAsHead("cmi:gear_mold")
})
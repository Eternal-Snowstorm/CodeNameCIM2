ServerEvents.recipes((event) => {
    let { vintageimprovements } = event.recipes
    vintageimprovements.curving("cmi:wooden_gear",
        "#minecraft:logs"
    ).itemAsHead("cmi:gear_mold")
})
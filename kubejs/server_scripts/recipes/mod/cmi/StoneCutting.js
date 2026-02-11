ServerEvents.recipes((event) => {
    let { kubejs, minecraft } = event.recipes

    // 公仔
    Ingredient.of("#cmi:dev_doll")
        .getItemIds()
        .forEach((id) => {
            minecraft.stonecutting(id, "#minecraft:wool")
            minecraft.stonecutting(id, "#cmi:dev_doll")
        })
})

ServerEvents.recipes((event) => {
    let { create } = event.getRecipes()

    create.sandpaper_polishing(
        "cmi:polished_quartz_prism",
        "minecraft:quartz"
    )
})
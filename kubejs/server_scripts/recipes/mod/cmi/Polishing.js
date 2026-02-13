ServerEvents.recipes((event) => {
    let { create } = event.recipes

    create.sandpaper_polishing(
        "cmi:polished_quartz_prism",
        "minecraft:quartz"
    )
})
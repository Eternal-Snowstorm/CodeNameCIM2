ServerEvents.recipes((event) => {
    let removeRecipeIds = [
        "minecraft:packed_ice",
        "minecraft:blue_ice",
        "alexscaves:gunpowder_from_sulfur",
        "minecraft:sugar_from_sugar_cane",
        "functionalstorage:oak_drawer_alternate_x1",
        "functionalstorage:oak_drawer_alternate_x2",
        "functionalstorage:oak_drawer_alternate_x4",
        "minecraft:glass",
        "mynethersdelight:crafting/tnt_alt"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
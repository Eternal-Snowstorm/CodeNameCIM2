ServerEvents.recipes((event) => {
    let removeRecipeIds = [
        "minecraft:packed_ice",
        "minecraft:blue_ice",
        "alexscaves:gunpowder_from_sulfur"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
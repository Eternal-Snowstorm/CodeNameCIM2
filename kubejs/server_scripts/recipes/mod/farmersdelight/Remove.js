ServerEvents.recipes((event) => {
    let removeRecipeIds = [
        "farmersdelight:cutting/sugar_cane_alt"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
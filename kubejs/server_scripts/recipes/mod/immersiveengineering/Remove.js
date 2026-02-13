ServerEvents.recipes((event) => {
    let removedRecipeIds = [
        "immersiveengineering:metalpress/bullet_casing",
        "immersiveengineering:crafting/empty_casing",
        "immersiveengineering:bottling/empty_shell",
        "immersiveengineering:crafting/empty_shell"
    ]
    removedRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
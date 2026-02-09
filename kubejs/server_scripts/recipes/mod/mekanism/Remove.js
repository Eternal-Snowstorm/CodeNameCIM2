ServerEvents.recipes((event) => {
    let removeRecipeIds = [
		"mekanism:processing/lategame/antimatter/from_pellet",
		"mekanism:evaporating/brine",
		"mekanism:processing/lategame/antimatter_pellet/from_gas",
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})
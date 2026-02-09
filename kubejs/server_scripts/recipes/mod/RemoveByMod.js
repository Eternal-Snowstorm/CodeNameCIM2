ServerEvents.recipes((event) => {

    let removedMods = [
        "steampowered",
        "portality"
    ]

    removedMods.forEach((mod) => {
        event.remove({
            mod: mod
        })
    })
})
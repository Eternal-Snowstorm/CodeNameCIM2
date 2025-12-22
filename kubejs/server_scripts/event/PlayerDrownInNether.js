PlayerEvents.tick((event) => {
    let { player } = event

    if (player.isCreative()) {
        return
    }
    let dimension = event.player.level.getDimension().toString()
    if (dimension == "minecraft:the_nether") {
        player.decreaseAirSupply(2)
    }

})
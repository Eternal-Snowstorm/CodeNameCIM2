PlayerEvents.tick((event) => {
    let { player } = event

    let dimension = event.player.level.getDimension().toString()

    if (player.isCreative()) {
        return
    }

    if (dimension = "minecraft:nether") {
        player.tell("1")
        player.decreaseAirSupply(1)
        if (player.getAirSupply() <= -20) {
            player.getAttachedOrSet("minecraft:drown", 2)
            player.setAirSupply(0)
        }
    }
})
EntityEvents.hurt((event) => {
    let { entity, source } = event
    let { player } = event.source

    const CURIOS = String(player.nbt["ForgeCaps"]["curios:inventory"]["Curios"])

    let playerWithMech = CURIOS.includes("cmi:smart_mechanism") && !CURIOS.includes("display")
    let projectileType = source.type().msgId()
    if (projectileType = "arrow" && playerWithMech) {
        entity.invulnerableTime = 0
        entity.invulnerableDuration = 0
    }
})
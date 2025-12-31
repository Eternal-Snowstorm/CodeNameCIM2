ServerEvents.genericLootTables((event) => {
    event.addGeneric("cmi:gameplay/torn_parchment_a", (loot) => {
        loot.addPool((pool) => {
            pool.addItem("cmi:torn_parchment_a")
                .randomChance(1)
            pool.setUniformRolls(1, 1)
        })
    })
    event.addGeneric("cmi:gameplay/torn_parchment_b", (loot) => {
        loot.addPool((pool) => {
            pool.addItem("cmi:torn_parchment_b")
                .randomChance(1)
            pool.setUniformRolls(1, 1)
        })
    })
})
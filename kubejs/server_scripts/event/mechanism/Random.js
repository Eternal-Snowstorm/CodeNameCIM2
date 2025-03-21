randomMechanisms=[
    "basic",
    "mechanical",
    "engineering",
    "flux",
    "magical",
    "quantum",
    "mekanism"
]
randomMechanisms.forEach((material) => {
    ItemEvents.rightClicked(`ue_addons:${material}_random_mechanism`, (event) => {
        if(event.player == null) return
        if(event.hand == "MAIN_HAND")
        {
            let lootTable = `ue_addons:gameplay/random_mechanisms/${material}`
            let { x, y, z }=event.player.pos
            event.server.runCommandSilent("/loot give " + event.player.username + " loot " + lootTable)
            event.player.swing()
            event.player.playNotifySound('create:crafter_craft', 'voice', 2, 1)
            let R=Math.random()
            let G=Math.random()
            let B=Math.random()
            event.server.runCommandSilent(
                `particle minecraft:dust ${R} ${G} ${B} 1 ${x} ${y + 1.5} ${z} 0.5 0.5 0.5 0.1 30`
            )
            if(!event.player.isCreative()){
                event.item.shrink(1)
            }
        }
    })
})
BlockEvents.rightClicked("minecraft:cobblestone", (event) => {
    let { level, player, item, block } = event
    const MECH = "cmi:stone_mechanism"
    // 判定是否主手手持构件
    if (event.hand !== "MAIN_HAND" || !player || !item || item.isEmpty()) {
        return false
    }
    if (item.getId() !== MECH) {
        return false
    }
    if (item.is(MECH)) {
        let pos = block.pos
        level.getBlock(pos).set("minecraft:stone")
        player.swing()
    }
})
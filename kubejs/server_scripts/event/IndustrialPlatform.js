BlockEvents.rightClicked("cmi:industrial_platform", (event) => {
    let { block, level, item, player } = event

    const POSX = block.pos.x
    const POSY = block.pos.y
    const POSZ = block.pos.z
    const FINX = Math.floor(POSX / 16) * 16
    const FINZ = Math.floor(POSZ / 16) * 16

    if (item.is("minecraft:cobblestone")) {
        level.runCommandSilent(`/fill ${FINX} ${POSY + 1} ${FINZ} ${FINX + 15} ${POSY + 11} ${FINZ + 15} air`)
        level.runCommandSilent(`/fill ${FINX} ${POSY - 1} ${FINZ} ${FINX + 15} ${POSY - 6} ${FINZ + 15} minecraft:stone keep`)
        level.runCommandSilent(`/place template cmi:industrial_platform/light ${FINX} ${POSY} ${FINZ}`)
        player.swing()
        item.shrink(1)
        event.cancel()
    }

    else if (item.is("minecraft:cobbled_deepslate")) {
        level.runCommandSilent(`/fill ${FINX - 16} ${POSY + 1} ${FINZ - 16} ${FINX + 31} ${POSY + 11} ${FINZ + 31} air`)
        level.runCommandSilent(`/fill ${FINX - 16} ${POSY - 1} ${FINZ - 16} ${FINX + 31} ${POSY - 6} ${FINZ + 31} minecraft:stone keep`)
        level.runCommandSilent(`/place template cmi:industrial_platform/heavy ${FINX - 16} ${POSY} ${FINZ - 16}`)
        player.swing()
        item.shrink(1)
        event.cancel()
    }

    else if (item.is("minecraft:andesite")) {
        level.runCommandSilent(`/place template cmi:industrial_platform/levitational ${FINX} ${POSY - 2} ${FINZ}`)
        level.getBlock(block.pos).set("air")
        player.swing()
        item.shrink(1)
        event.cancel()
    }

})
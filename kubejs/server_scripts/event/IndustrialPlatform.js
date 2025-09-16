BlockEvents.rightClicked("cmi:industrial_platform", (event) => {
    let { block, level, item, player } = event

    const POSX = block.pos.x
    const POSY = block.pos.y
    const POSZ = block.pos.z
    const FINX = Math.floor(POSX / 16) * 16
    const FINY = POSY + 5
    const FINZ = Math.floor(POSZ / 16) * 16

    if (item.is("minecraft:cobblestone")) {
        level.runCommandSilent(`/fill ${FINX} ${POSY - 1} ${FINZ} ${FINX + 15} ${POSY + 11} ${FINZ + 15} air`)
        level.runCommandSilent(`/place template cmi:industrial_platform/light ${FINX} ${POSY - 1} ${FINZ}`)
        event.cancel()
        player.swing()
    }

    else if (item.is("minecraft:cobbled_deepslate")) {
        level.runCommandSilent(`/fill ${FINX} ${POSY - 1} ${FINZ} ${FINX + 31} ${POSY + 11} ${FINZ + 31} air`)
        level.runCommandSilent(`/place template cmi:industrial_platform/heavy ${FINX} ${POSY - 1} ${FINZ}`)
        event.cancel()
        player.swing()
    }

    else if (item.is("minecraft:andesite")) {
        level.runCommandSilent(`/place template cmi:industrial_platform/levitational ${FINX} ${FINY} ${FINZ}`)
        level.getBlock(block.pos).set("air")
        event.cancel()
        player.swing()
    }

})
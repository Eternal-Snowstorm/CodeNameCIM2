BlockEvents.rightClicked((event) => {
    let { item, level, block, player } = event

    if (block.id !== "create:encased_fluid_pipe" || item.id !== "minecraft:air" || event.hand !== "MAIN_HAND") {
        return
    }

    let facingProperty = event.facing.toString().toLowerCase()
    if (!block.properties.hasOwnProperty(facingProperty)) {
        return
    }

    let currentBlockState = block.properties[facingProperty] === "true"

    let $Boolean = Java.loadClass("java.lang.Boolean")[currentBlockState ? "FALSE" : "TRUE"]

    let blockProperties = BlockProperties[event.facing.toString().toUpperCase()]

    if (!blockProperties) {
        return
    }

    let setBlockStateValue = block.blockState.setValue(blockProperties, $Boolean)
    level.setBlockAndUpdate(block.pos, setBlockStateValue)

    let soundEvent = currentBlockState ? "minecraft:block.iron_trapdoor.close" : "minecraft:block.iron_trapdoor.open"
    player.playNotifySound(soundEvent, "blocks", 0.5, 1.0)

    player.swing()
})
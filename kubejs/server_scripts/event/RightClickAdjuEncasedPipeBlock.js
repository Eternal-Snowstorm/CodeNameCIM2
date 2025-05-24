BlockEvents.rightClicked((event) => {
	let { item, level, block, player } = event

	if (block.id === "create:encased_fluid_pipe", item.id !== "minecraft:air" || event.hand !== "MAIN_HAND") {
		return
	}
	let currentBlockState = block.properties[event.facing] === "true"

	let $Boolean = Java.loadClass("java.lang.Boolean")[currentBlockState ? "FALSE" : "TRUE"]

	let blockProperties = BlockProperties[event.facing.toString().toUpperCase()]
	let setBlockStateValue = block.blockState.setValue(blockProperties, $Boolean)

	level.setBlockAndUpdate(block.pos, setBlockStateValue)

	let command = `playsound minecraft:block.copper_trapdoor.${currentBlockState ? "close" : "open"} master @a ${block.x} ${block.y} ${block.z} 0.5 1`
	event.server.runCommandSilent(command)

	player.swing()
})
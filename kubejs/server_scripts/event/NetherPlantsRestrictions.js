BlockEvents.rightClicked((event) => {
	let { item, block, player } = event

	if (event.hand !== "MAIN_HAND") {
		return
	}

	if (!item.hasTag(`${global.namespace}:nether_crops`)) {
		return
	}

	let getDimension = block.level.getDimension().toString()

	if (getDimension !== "minecraft:the_nether" || !block.hasTag(`${global.namespace}:nether_farmland`)) {
		player.displayClientMessage(Component.translate(`display.${global.namespace}.nether_crops`), true)
		event.cancel()
		return
	}
})
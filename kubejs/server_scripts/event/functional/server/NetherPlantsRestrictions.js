BlockEvents.rightClicked((event) => {
	let { item, block, player } = event

	if (!CmiGlobal.isDebug) {
		return
	}

	if (event.getHand() !== InteractionHand.MAIN_HAND) {
		return
	}

	if (block.level.getDimension() === "minecraft:the_nether") {
		return
	}

	if (!item.hasTag(`${Cmi.MODID}:nether_crops`)) {
		return
	}

	if (!block.hasTag(`${Cmi.MODID}:nether_farmland`)) {
		return
	}

	let tranKey = `display.${Cmi.MODID}.nether_crops`
	player.displayClientMessage(Component.translatable(tranKey), true)
	event.cancel()
})
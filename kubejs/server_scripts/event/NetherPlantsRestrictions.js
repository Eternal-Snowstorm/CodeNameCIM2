BlockEvents.rightClicked((event) => {
	let { item, block, player } = event

	if (event.hand !== "MAIN_HAND") {
		return
	}

	if (!item.hasTag(`${global.namespace}:nether_crops`)) {
		return
	}

	let getDimension = block.level.getDimension().toString()
	let isNetherFarmlandBlockTag = block.hasTag(`${global.namespace}:nether_farmland`)

	if (getDimension !== "minecraft:the_nether" || !isNetherFarmlandBlockTag) {
		let translate = Component.translate(`display.${global.namespace}.nether_crops`)
		player.displayClientMessage(translate, true)
		event.cancel()
		return
	}
})
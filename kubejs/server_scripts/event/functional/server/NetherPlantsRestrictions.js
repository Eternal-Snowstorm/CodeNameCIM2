BlockEvents.rightClicked((event) => {
	let { item, block, player } = event

	if (event.hand !== "MAIN_HAND") {
		return
	}

	if (!item.hasTag(`${Cmi.MODID}:nether_crops`)) {
		return
	}

	let getDimension = block.level.getDimension().toString()
	let isNetherFarmlandBlockTag = block.hasTag(`${Cmi.MODID}:nether_farmland`)

	if (getDimension === "minecraft:the_nether") {
		if (item.id === "minecraft:twisting_vines" || item.id === "minecraft:weeping_vines") {
			return
		}
	}

	if (getDimension !== "minecraft:the_nether" || !isNetherFarmlandBlockTag) {
		let tranKey = `display.${Cmi.MODID}.nether_crops`
		player.displayClientMessage(Component.translatable(tranKey), true)
		event.cancel()
		return
	}
})
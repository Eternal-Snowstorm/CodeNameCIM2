BlockEvents.rightClicked("minecraft:lightning_rod", (event) => {
	if (event.player === null) {
		return
	}
	let player = event.getPlayer()
	let level = event.getLevel()
	let pos = event.block.pos
	let itemInHand = player.getItemInHand(InteractionHand.MAIN_HAND)
	if (itemInHand.is("cmi:charged_amethyst")) {
		player.swing()
		let lightning = level.createEntity("minecraft:lightning_bolt")
		lightning.setPos(pos.getX() + 0.5, pos.getY() + 1, pos.getZ() + 0.5)
		lightning.spawn()
		if (player.isCreative()) {
			return
		}
		itemInHand.shrink(1)
		player.give("minecraft:amethyst_shard")
	}
})
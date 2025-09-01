BlockEvents.rightClicked((event) => {
	let { block, level, player, item } = event

	const GRASS_TAG = block.hasTag("cmi:get_grass_fiber")
	const KNIVE_TAG = player.mainHandItem.hasTag("forge:tools/knives")

	if (GRASS_TAG && KNIVE_TAG) {
		player.swing()

		if (item.getDamageValue() >= item.getMaxDamage()) {
			player.setItemInHand(event.hand, "minecraft:air")
			level.playSound(
				null,
				player.x,
				player.y,
				player.z,
				"minecraft:entity.item.break",
				"players",
				1.0,
				1.0
			)
			return
		}
		item.hurtAndBreak(1, player, (entity) => {
			return entity.broadcastBreakEvent(entity.getUsedItemHand())
		})

		level.destroyBlock(block.pos, true, player, 1)

		let entityItem = block.createEntity("item")

		entityItem.item = "cmi:grass_fiber"
		entityItem.x += 0.5
		entityItem.y += 0.5
		entityItem.z += 0.5
		entityItem.spawn()
	}
})
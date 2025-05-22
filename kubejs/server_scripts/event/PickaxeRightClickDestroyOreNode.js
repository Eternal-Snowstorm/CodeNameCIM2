BlockEvents.rightClicked((event) => {
	let { level, player, block, item } = event

	let handHeldPickaxe = player.mainHandItem.hasTag("minecraft:pickaxes")
	let isOreNode = block.hasTag("deepdrilling:ore_nodes")

	if (handHeldPickaxe && isOreNode) {
		player.swing()

		if (!player.isCreative()) {
			item.setDamageValue(item.damageValue + 1)
		}

		level.destroyBlock(block.pos, false, player, 1)
	}
})
BlockEvents.rightClicked((event) => {
	let { level, player, block, item } = event

	const PICKAXE = player.offHandItem.hasTag("minecraft:pickaxes")
	const SNEAK = player.isCrouching()
	const ORE_NODE = block.hasTag("deepdrilling:ore_nodes")

	if (PICKAXE && SNEAK && ORE_NODE) {
		player.swing()

		if (!player.isCreative()) {
			item.setDamageValue(item.damageValue + 1)
		}

		level.destroyBlock(block.pos, false, player, 1)
	}
})
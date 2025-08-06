BlockEvents.rightClicked((event) => {
	let { level, player: { mainHandItem }, block, item } = event

	let handHeldPickaxe = mainHandItem.hasTag("minecraft:pickaxes")
	let isOreNode = block.hasTag("deepdrilling:ore_nodes")

	if (handHeldPickaxe && isOreNode) {
		player.swing()

		if (!player.isCreative()) {
			item.setDamageValue(item.damageValue + 1)
		}

		level.destroyBlock(block.pos, false, player, 1)
	}
})
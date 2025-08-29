BlockEvents.rightClicked((event) => {
	let { level, player: { mainHandItem }, block, item } = event

	const PICKAXE = mainHandItem.hasTag("minecraft:pickaxes")
	const ORE_NODE = block.hasTag("deepdrilling:ore_nodes")

	if (PICKAXE && ORE_NODE) {
		player.swing()

		if (!player.isCreative()) {
			item.setDamageValue(item.damageValue + 1)
		}

		level.destroyBlock(block.pos, false, player, 1)
	}
})
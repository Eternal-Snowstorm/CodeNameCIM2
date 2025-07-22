BlockEvents.rightClicked((event) => {
	let { block, item, player } = event
	const WOODEN_FAUCET = "cmi:wooden_faucet"

	if (block.id === "thermal:rubberwood_log" && item.id === WOODEN_FAUCET) {
		player.swing()
		if (item.getDamageValue() >= item.getMaxDamage()) {
			player.setItemInHand(event.hand, "minecraft:air")
			player.playSound("minecraft:entity.item.break")
			return
		}
		item.hurtAndBreak(1, player, (entity) => {
			return entity.broadcastBreakEvent(event.hand)
		})
		if (Math.random() < 0.25 && !player.isCreative()) {
			player.give("thermal:rubber")
		}
		if (Math.random() < 0.1 && !player.isCreative()) {
			block.set("thermal:stripped_rubberwood_log")
		}
	}
})
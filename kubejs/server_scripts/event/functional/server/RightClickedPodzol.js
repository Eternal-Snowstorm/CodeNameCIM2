BlockEvents.rightClicked((event) => {
	let { block, item, player, level } = event
	const PODZOL = "minecraft:podzol"

	if (block.id === PODZOL && player.mainHandItem.hasTag("minecraft:hoes")) {
		player.swing()

		if (!player.isCreative()) {
			item.setDamageValue(item.damageValue + 1)
		}

		level.playSound(
			null,
			player.x,
			player.y,
			player.z,
			"minecraft:item.hoe.till",
			"blocks",
			1.0,
			1.0
		)

		block.set("minecraft:farmland")
	}
})
BlockEvents.rightClicked((event) => {
	let { block, item, player, level } = event

	if (block.getId() === "farmersdelight:rich_soil"
		|| block.getId() === "mynethersdelight:resurgent_soil") {
		return
	}

	if (!block.hasTag("minecraft:dirt")) {
		return
	}

	if (!player.getMainHandItem().hasTag("minecraft:hoes")) {
		return
	}

	player.swing()

	if (!player.isCreative()) {
		item.setDamageValue(item.setDamageValue(item.getDamageValue() + 1))
	}

	level.playSound(
		null,
		block.getX(),
		block.getY(),
		block.getZ(),
		"minecraft:item.hoe.till",
		"blocks",
		1.0,
		1.0
	)

	block.set("minecraft:farmland")
})
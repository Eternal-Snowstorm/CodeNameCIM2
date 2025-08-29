BlockEvents.rightClicked((event) => {
	let { block, level, player } = event
	const GRASS_TAG =
		block.hasTag("cmi:get_grass_fiber")
	const KNIVE_TAG =
		player.mainHandItem.hasTag("forge:tools/knives")

	if (GRASS_TAG && KNIVE_TAG) {
		player.swing()
		level.destroyBlock(block.pos, true, player, 1)

		let entityItem = block.createEntity("item")

		entityItem.item = "cmi:grass_fiber"
		entityItem.x += 0.5
		entityItem.y += 0.5
		entityItem.z += 0.5
		entityItem.spawn()
	}
})
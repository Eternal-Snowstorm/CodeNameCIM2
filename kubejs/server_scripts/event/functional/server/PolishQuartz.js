BlockEvents.rightClicked((event) => {
	let { block, item, player, level } = event

	if (isTargetBlock() && item.getId() === "minecraft:quartz") {
		player.swing()
		if (!player.isCreative()) {
			item.shrink(1)
		}
		let rand = Math.random()
		if (rand <= 0.1) {
			player.give("cmi:polished_quartz_prism")
			level.playSound(
				null,
				block.pos.x,
				block.pos.y,
				block.pos.z,
				"minecraft:block.grindstone.use",
				"blocks",
				1.0,
				1.0
			)
		} else {
			player.give("thermal:quartz_dust")
			level.playSound(
				null,
				block.pos.x,
				block.pos.y,
				block.pos.z,
				"minecraft:block.gravel.step",
				"blocks",
				1.0,
				1.0
			)
		}
	}

	function isTargetBlock() {
		return block.hasTag("forge:deepslate")
	}
})
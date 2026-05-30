BlockEvents.rightClicked((event) => {
	let { block, item, player, level } = event
	let pos = block.getPos()

	if (isTargetBlock() && isTriggerItem()) {
		player.swing()
		if (!player.isCreative()) {
			item.shrink(1)
		}
		let rand = Math.random()
		if (rand <= 0.1) {
			player.give("cmi:polished_quartz_prism")
			level.playSound(
				null,
				pos.x,
				pos.y,
				pos.z,
				"minecraft:block.grindstone.use",
				"blocks",
				1.0,
				1.0
			)
		} else {
			player.give("thermal:quartz_dust")
			level.playSound(
				null,
				pos.x,
				pos.y,
				pos.z,
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

	function isTriggerItem() {
		return item.hasTag("forge:gems/quartz")
	}
})
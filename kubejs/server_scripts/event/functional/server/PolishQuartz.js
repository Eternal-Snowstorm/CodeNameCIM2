ItemEvents.rightClicked("minecraft:quartz", (event) => {
	let target = event.getTarget().block
	if (target == null) {
		return
	}
	if (!target.getId() === "minecraft:cobbled_deepslate" && !target.getId() === "minecraft:deepslate") {
		return
	}

	event.player.swing()
	event.item.shrink(1)
	let rand = Math.random()
	if (rand <= 0.1) {
		event.getPlayer().give("cmi:polished_quartz_prism")
		event.level.playSound(
			null,
			target.pos.x,
			target.pos.y,
			target.pos.z,
			"minecraft:block.grindstone.use",
			"blocks",
			1.0,
			1.0
		)
	} else {
		event.getPlayer().give("thermal:quartz_dust")
		event.level.playSound(
			null,
			target.pos.x,
			target.pos.y,
			target.pos.z,
			"minecraft:block.gravel.step",
			"blocks",
			1.0,
			1.0
		)
	}
})
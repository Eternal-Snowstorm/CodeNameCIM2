PlayerEvents.tick((event) => {
	let player = event.player

	if (player.level.dimension.toString() === "minecraft:the_nether") {
		let air = player.getAirSupply()

		// 模拟水下：每 tick 减 1
		player.setAirSupply(air - 1)
	}
})
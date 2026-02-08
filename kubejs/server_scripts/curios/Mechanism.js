PlayerEvents.tick((event) => {
	let { player } = event

	// 15秒重复一次
	if (player.age % 20 * 15 !== 0) {
		return
	}

	if (CuriosUtils.hasItem(player, "cmi:cobalt_mechanism")) {
		player.potionEffects.add(
			"minecraft:haste",
			20 * 20,
			1,
			false,
			false
		)
		player.potionEffects.add(
			"minecraft:speed",
			20 * 20,
			1,
			false,
			false
		)
	}
	if (CuriosUtils.hasItem(player, "cmi:photosensitive_mechanism")) {
		player.potionEffects.add(
			"minecraft:night_vision",
			30 * 20,
			0,
			false,
			false
		)
	}
	if (CuriosUtils.hasItem(player, "cmi:nether_mechanism")) {
		player.potionEffects.add(
			"minecraft:fire_resistance",
			20 * 20,
			0,
			false,
			false
		)
	}
})
ItemEvents.rightClicked("cmi:potion_mechanism", (event) => {
	let { player } = event
	let potion = [
		"saturation",
		"luck",
		"dolphins_grace",
		"conduit_power",
		"fire_resistance",
		"slow_falling",
		"haste",
		"resistance",
		"strength",
		"absorption",
		"regeneration",
		"water_breathing",
		"speed",
		"jump_boost",
		"night_vision",
		// "invisibility",
	]
	potion.forEach((buff) => {
		player.potionEffects.add(`minecraft:${buff}`, 300, 2)
	})
	player.playNotifySound("create:crafter_craft", "voice", 2, 1)
})
ItemEvents.rightClicked((event) => {
	let { player, level } = event
	let canTriggerItem = "minecraft:stick"

	if (player.mainHandItem === canTriggerItem && player.inWater) {
		player.tell(Component.translatable(`sea.${global.namespace}.search`))
		player.potionEffects.add(
			"minecraft:glowing",
			30,
			255,
			false,
			false
		)
		player.potionEffects.clear()
		level.playSound(
			null,
			player.x,
			player.y,
			player.z,
			"cmi:for_sea",
			"players",
			1.0,
			1.0
		)
		player.cooldowns.addCooldown(canTriggerItem, 100)
	}
})
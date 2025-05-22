ItemEvents.rightClicked((event) => {
	let { player } = event
	let canTriggerItem = "minecraft:stick"

	if (player.mainHandItem === canTriggerItem && player.inWater) {
		player.tell(Component.translate(`sea.${global.namespace}.search`))
		player.runCommandSilent(`effect give @e minecraft:glowing 30 255 false`)
		player.runCommandSilent(`effect clear ${player.username} minecraft:glowing`)
		player.runCommandSilent(`playsound cmi:for_sea player ${player.username} ~ ~ ~`)
		player.cooldowns.addCooldown(canTriggerItem, 100)
	}
})
ItemEvents.rightClicked((event) => {
	let { player } = event

	if (player.mainHandItem === "minecraft:stick" && player.inWater) {
		player.tell(Component.literal("§b正在使用对海搜索!"))
		player.runCommandSilent(`effect give @e minecraft:glowing 30 255 false`)
		player.runCommandSilent(`effect clear ${player.username} minecraft:glowing`)
		player.runCommandSilent(`playsound ue_addons:for_sea player ${player.username} ~ ~ ~`)
		player.cooldowns.addCooldown("minecraft:stick", 100)
	}
})
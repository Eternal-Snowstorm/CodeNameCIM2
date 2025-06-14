ItemEvents.rightClicked('cmi:potion_mechanism', (event) => {
	let { player } = event
    let potion = [
        "effect give @p minecraft:saturation",
        "effect give @p minecraft:luck",
        "effect give @p minecraft:dolphins_grace",
        "effect give @p minecraft:conduit_power",
        "effect give @p minecraft:fire_resistance",
        "effect give @p minecraft:slow_falling",
        "effect give @p minecraft:haste",
        "effect give @p minecraft:resistance",
        "effect give @p minecraft:strength",
        "effect give @p minecraft:absorption",
        "effect give @p minecraft:regeneration",
        "effect give @p minecraft:water_breathing",
        "effect give @p minecraft:speed",
        "effect give @p minecraft:jump_boost",
        "effect give @p minecraft:night_vision",
        //"effect give @p minecraft:invisibility",
        //隐身有争议（）
    ]
	potion.forEach((command) => {
		player.runCommandSilent(`${command} 1145 4 true`)
	})
	player.playNotifySound("create:crafter_craft", "voice", 2, 1)
})
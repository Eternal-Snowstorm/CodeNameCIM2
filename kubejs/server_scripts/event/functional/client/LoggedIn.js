let $GameRules =
    Java.loadClass("net.minecraft.world.level.GameRules")

ServerEvents.loaded((event) => {
    let { server } = event

    let rule = server.getGameRules()
    let lavaRule = rule.getRule($GameRules.RULE_LAVA_SOURCE_CONVERSION)

    if (!lavaRule.get()) {
        lavaRule.set(true, server)
    }
})

PlayerEvents.loggedIn((event) => {
	let { player, level } = event

	let tranKey = `message.${Cmi.MODID}.welcome`
	level.tell(Component.translatable(tranKey, player.getUsername()))
})
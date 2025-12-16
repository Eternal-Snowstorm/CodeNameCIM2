ServerEvents.loaded((event) => {
	let { server } = event

	server.runCommandSilent("reload")
})

PlayerEvents.loggedIn((event) => {
	let { player } = event

	let tranKey = `message.${global.namespace}.welcome`
	player.tell(Component.translatable(tranKey, player.username))
})
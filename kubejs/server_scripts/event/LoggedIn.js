ServerEvents.loaded((event) => {
	let { server } = event

	server.runCommandSilent("reload")
})

PlayerEvents.loggedIn((event) => {
	let { player } = event

	let message = `message.${global.namespace}.welcome`
	player.tell(Component.translatable(message, player.username))
})
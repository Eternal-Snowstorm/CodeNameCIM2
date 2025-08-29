ServerEvents.loaded((event) => {
	let { server } = event

	server.runCommandSilent("reload")
})

PlayerEvents.loggedIn((event) => {
	let { player } = event

	let message =
		Component.translatable(`message.${global.namespace}.welcome`, player.username)
	player.tell(message)
})
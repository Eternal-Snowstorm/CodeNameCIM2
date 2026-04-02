ServerEvents.loaded((event) => {
	let { server } = event

	server.scheduleInTicks(2, () => {
		server.runCommandSilent("reload")
	})
})

PlayerEvents.loggedIn((event) => {
	let { player } = event

	let tranKey = `message.${CmiCore.MODID}.welcome`
	player.tell(Component.translatable(tranKey, player.username))
})
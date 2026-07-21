// ServerEvents.loaded((event) => {
// 	let { server } = event

// 	server.scheduleInTicks(2, () => {
// 		server.runCommandSilent("reload")
// 	})
// })

PlayerEvents.loggedIn((event) => {
	let { player, level } = event

	let tranKey = `message.${Cmi.MODID}.welcome`
	level.tell(Component.translatable(tranKey, player.getUsername()))
})
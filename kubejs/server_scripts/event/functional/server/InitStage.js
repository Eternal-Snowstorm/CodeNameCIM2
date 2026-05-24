BlockEvents.broken((event) => {
	let { player } = event
	let initStageName = "init"

	if (!player.getStages().has(initStageName) && !DebugUserManager.isDebugger(player)) {
		let tranKey = Component.translatable("message.cmi.stage.init").red()
		player.displayClientMessage(tranKey, true)
		event.cancel()
	}
})
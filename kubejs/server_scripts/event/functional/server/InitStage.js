BlockEvents.broken((event) => {
	let { player } = event

	if (!player.getStages().has("init") && !DebugUserManager.isDebugger(player)) {
		let tranKey = Component.translatable("message.cmi.stage.init").red()
		player.displayClientMessage(tranKey, true)
		event.cancel()
	}
})
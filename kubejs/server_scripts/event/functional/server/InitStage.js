BlockEvents.broken((event) => {
	let { player } = event

	if (!player.getStages().has("init") && !DebugUserManager.isDebugger(player)) {
		player.tell(Component.literal("NOT!"))
		event.cancel()
	}
})
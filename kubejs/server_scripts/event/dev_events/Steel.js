ItemEvents.rightClicked((event) => {
	let { player, level } = event

	if (event.getItem() === "cmi:togni_leets" && event.hand === InteractionHand.MAIN_HAND) {
		player.swing()

		let tranKey = "message.cmi.togni_leets"
		player.tell(Component.translatable(tranKey).red())

		// level.runCommandSilent(`playsound cmi:meme.bruh player ${player} ~ ~ ~`)
		level.playSound(
			null,
			player.x,
			player.y,
			player.z,
			"cmi:meme.bruh",
			"players",
			1.0,
			1.0
		)
		if (!player.isCreative()) {
			event.getItem().shrink(1)
		}
	}
})
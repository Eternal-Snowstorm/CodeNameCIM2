BlockEvents.rightClicked(["cmi:rocket_controller_successful", "cmi:rocket_controller_faild"], (event) => {
	let { player, block, item, level, server } = event

	if (event.getHand() === InteractionHand.MAIN_HAND) {
		return
	}
	if (item.id === "cmi:rocket_launcher") {
		return
	}
	player.swing()
	block.offset(0, 0, 0).set("cmi:rocket_controller")
	block.offset(1, 0, 0).set("cmi:rocket_display_shutdown")
	block.offset(2, 0, 0).set("cmi:rocket_display_shutdown")
	// level.playSound(
	// 	null,
	// 	player.x,
	// 	player.y,
	// 	player.z,
	// 	"cmi:rocket.shutdown",
	// 	"players",
	// 	1.0,
	// 	1.0
	// )
	level.runCommandSilent(`playsound cmi:rocket.shutdown player ${player} ~ ~ ~`)
	server.scheduleInTicks(20 * 3, () => {
	block.offset(1, 0, 0).set("cmi:rocket_display")
	block.offset(2, 0, 0).set("cmi:rocket_display")
	})
})
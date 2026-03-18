FTBQuestsEvents.completed("09E1B57B8D35ED4E", (event) => {
	let { player } = event

	player.getLevel().playSound(
			null,
			player.x,
			player.y,
			player.z,
			"cmi:final_quest_complete",
			"players",
			0.5,
			1.0
		)
})
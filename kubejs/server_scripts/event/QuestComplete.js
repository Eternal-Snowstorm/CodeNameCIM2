FTBQuestsEvents.completed("09E1B57B8D35ED4E", (event) => {
	let { player } = event

	player.playNotifySound(
		"cmi:final_quest_complete",
		"players",
		0.25,
		1.0
	)
})
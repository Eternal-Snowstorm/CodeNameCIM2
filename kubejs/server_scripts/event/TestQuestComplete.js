FTBQuestsEvents.customReward((event) => {
	let { player, level, reward } = event

	if (reward.hasTag("final_quest")) {
		level.playSound(
			null,
			player.x,
			player.y,
			player.z,
			"cmi:final_quest_complete",
			"players",
			0.5,
			1.0
		)
	}
})
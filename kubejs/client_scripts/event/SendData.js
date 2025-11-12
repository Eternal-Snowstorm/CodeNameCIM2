let playerAltDown = false
let playerAltDown1 = false

PlayerEvents.tick((event) => {
	playerAltDown = Client.isAltDown()

	if (playerAltDown1 !== playerAltDown) {
		event.player.sendData("isPlayerAltDown", {
			"Alt": playerAltDown
		})
		playerAltDown1 = playerAltDown
	}
})
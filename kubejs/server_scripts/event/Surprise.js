PlayerEvents.loggedIn(event => {
	let { player, server } = event
	let time = new Date()
	if (((time.getMonth() + 1) == 4) && (time.getDate() == 1)) {
		server.scheduleInTicks(5, () => {
			player.tell(Component.translate(`message.${global.namespace}.41msg`).clickOpenUrl("https://www.bilibili.com/video/BV1UT42167xb"))
		})
	}
})
PlayerEvents.loggedIn(event => {
	let time = new Date()
	if (((time.getMonth() + 1) == 4) && (time.getDate() == 1)) {
		event.server.scheduleInTicks(5, () => {
			event.player.tell(Component.translate(`message.${global.namespace}.41msg`))
		})
	}
})
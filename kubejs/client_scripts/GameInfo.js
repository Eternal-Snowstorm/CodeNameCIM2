ClientEvents.loggedIn((event) => {
	let { player } = event

	// 初始化isDeveloper的boolean
	global.isDeveloper = false

	global.debugUserName.forEach((debugUser) => {
		//设置isDeveloper的boolean
		if (player.username === debugUser) {
			global.isDeveloper = true
		}

		if (player.username === debugUser) {
			let devInfo = Component.translate(`text.${global.namespace}.dev`).getString()
			player.paint({
				devTip: {
					type: "text",
					x: 10,
					y: "$screenH - 40",
					alignX: "left",
					text: devInfo,
					scale: 1.0,
				}
			})
			let playerInfo = Component.translate(`text.${global.namespace}.player`).getString()
			player.paint({
				playerTip: {
					type: "text",
					x: 10,
					y: "$screenH - 30",
					alignX: "left",
					text: playerInfo,
					scale: 1.0,
				}
			})
		} else if (player.username !== debugUser) {
			player.paint({
				versionTip: {
					type: "text",
					x: 10,
					y: "$screenH - 20",
					alignX: "left",
					text: global.modPackVersion,
					scale: 1.0
				}
			})
		}
	})
})
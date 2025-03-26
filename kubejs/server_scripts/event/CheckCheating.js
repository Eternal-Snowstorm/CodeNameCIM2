PlayerEvents.loggedIn((event) => {
	let { player } = event

	if (player.stages.has("first_login")) {
		return
	}

	let modGroup = [
		"ftbultimine",
		"oreexcavation",
		"veinmining"
	]

	let detectedMods = []

	modGroup.forEach((modID) => {
		if (Platform.isLoaded(modID)) {
			detectedMods.push(modID)
		}
	})

	if (detectedMods.length > 0) {
		let getMod = detectedMods.join(", ")
		let messageKey = detectedMods.length > 1 ?
			`message.${global.namespace}.checkMultipleCheating` :
			`message.${global.namespace}.checkCheating`
		player.tell(Component.translate(messageKey, [getMod]))

		player.stages.add("first_login")
	}
})
StartupEvents.registry("sound_event", (event) => {
	function addSoundEvent(name) {
		return event.create(`${global.namespace}:${name}`)
	}

	addSoundEvent("mechanism")
})

StartupEvents.registry("item", (event) => {
	function addMusicDiscItem(name, time) {
		return event.create(`${global.namespace}:${name}`, "music_disc")
			.texture(`${global.namespace}:item/discs/${name}`)
			.song(`${global.namespace}:${name}`, time)
			.tag("minecraft:music_discs")
	}

	addMusicDiscItem("mechanism", 120 + 34)
})
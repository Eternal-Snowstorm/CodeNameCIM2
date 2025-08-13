StartupEvents.registry("sound_event", (event) => {
	function addRecordSoundEvent(name) {
		return event.create(`${global.namespace}:record.${name}`)
	}

	addRecordSoundEvent("mechanism")
})

StartupEvents.registry("item", (event) => {
	function addMusicDiscItem(name, time) {
		return event.create(`${global.namespace}:${name}`, "music_disc")
			.song(`${global.namespace}:record.${name}`, time)
			.texture(`${global.namespace}:item/discs/${name}`)
			.tag("minecraft:music_discs")
	}

	addMusicDiscItem("mechanism", 120 + 34)
})
StartupEvents.registry("sound_event", (event) => {
	function addRecordSoundEvent(name) {
		return event.create(`${global.namespace}:record.${name}`)
	}

	addRecordSoundEvent("mechanism")
	addRecordSoundEvent("togni_leets")
})

StartupEvents.registry("item", (event) => {
	function addMusicDiscItem(name, time) {
		let builder =
			event.create(`${global.namespace}:${name}`, "music_disc")

		builder.song(`${global.namespace}:record.${name}`, time)
		builder.texture(`${global.namespace}:item/discs/${name}`)
		builder.tag("minecraft:music_discs")

		return builder
	}

	addMusicDiscItem("mechanism", 120 + 34)
	addMusicDiscItem("togni_leets", 180 + 32)
		.rarity(Rarity.COMMON)
		.tag("forge:ingots")
})
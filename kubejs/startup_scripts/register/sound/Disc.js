StartupEvents.registry("sound_event", (event) => {
	event.create(`${global.namespace}:lan_huo`)
})

StartupEvents.registry("item", (event) => {
	event.create(`${global.namespace}:lan_huo`, "music_disc")
		.song(`${global.namespace}:lan_huo`, 157)
		.tag("minecraft:music_discs")
})
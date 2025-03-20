let addMusicDisc = [
	["lan_huo", 157],
	["monody", 290],
	["life", 215]
]
StartupEvents.registry("sound_event", (event) => {
	addMusicDisc.forEach(([name]) => {
		event.create(`${global.namespace}:${name}`)
	})
})

StartupEvents.registry("item", (event) => {
	addMusicDisc.forEach(([name, seconds]) => {
		event.create(`${global.namespace}:${name}`, "music_disc")
			.texture(`${global.namespace}:item/discs/${name}`)
			.song(`${global.namespace}:${name}`, seconds)
			.tag("minecraft:music_discs")
	})
})
BlockEvents.modification((event) => {
	event.modify("mekanism:cardboard_box", (modify) => {
		modify.soundType = SoundType.NETHERITE_BLOCK
	})

	event.modify("cmi:water_pump", (modify) => {
		modify.soundType = SoundType.WOOD
	})

	let materialSoundType = [
        "bronze",
        "cast_iron",
        "steel"
    ]
    materialSoundType.forEach((materials) => {
		event.modify(`steampowered:${materials}_cogwheel`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
        event.modify(`steampowered:${materials}_large_cogwheel`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
		event.modify(`steampowered:${materials}_boiler`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
		event.modify(`steampowered:${materials}_steam_engine`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
		event.modify(`steampowered:${materials}_flywheel`, (modify) => {
            modify.soundType = SoundType.LANTERN
        })
    })
})
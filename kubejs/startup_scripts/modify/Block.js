BlockEvents.modification((event) => {
	event.modify("mekanism:cardboard_box", (modify) => {
		modify.soundType = SoundType.NETHERITE_BLOCK
	})

	event.modify("cmi:water_pump", (modify) => {
		modify.soundType = SoundType.WOOD
	})
})
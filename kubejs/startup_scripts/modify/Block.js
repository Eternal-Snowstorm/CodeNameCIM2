BlockEvents.modification((event) => {
	event.modify("mekanism:cardboard_box", (modify) => {
		modify.soundType = SoundType.NETHERITE_BLOCK
	})
})
BlockEvents.modification((event) => {
	event.modify("mekanism:cardboard_box", (modify) => {
		modify.setSoundType(SoundType.NETHERITE_BLOCK)
	})

	event.modify("cmi:water_well", (modify) => {
		modify.setSoundType(SoundType.WOOD)
	})

	event.modify("immersiveengineering:coke_oven", (modify) => {
		modify.setSoundType(SoundType.DEEPSLATE_BRICKS)
	})

	event.modify("immersiveengineering:blast_furnace", (modify) => {
		modify.setSoundType(SoundType.DEEPSLATE_BRICKS)
	})

	event.modify("treetap:tap", (modify) => {
		modify.setSoundType(SoundType.WOOD)
	})

	let materialSoundType = [
		"bronze",
		"cast_iron",
		"steel"
	]
	materialSoundType.forEach((materials) => {
		event.modify(`steampowered:${materials}_cogwheel`, (modify) => {
			modify.setSoundType(SoundType.LANTERN)
		})
		event.modify(`steampowered:${materials}_large_cogwheel`, (modify) => {
			modify.setSoundType(SoundType.LANTERN)
		})
		event.modify(`steampowered:${materials}_burner`, (modify) => {
			modify.setSoundType(SoundType.LANTERN)
		})
		event.modify(`steampowered:${materials}_boiler`, (modify) => {
			modify.setSoundType(SoundType.LANTERN)
		})
		event.modify(`steampowered:${materials}_steam_engine`, (modify) => {
			modify.setSoundType(SoundType.LANTERN)
		})
		event.modify(`steampowered:${materials}_flywheel`, (modify) => {
			modify.setSoundType(SoundType.LANTERN)
		})
	})
})
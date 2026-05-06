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

	// 矿藏
	let depositBlocks = [
		"create_rns:gold_deposit_block",
		"create_rns:zinc_deposit_block",
		"create_rns:copper_deposit_block",
		"create_rns:iron_deposit_block",
		"cmi:oil_shale_deposit_block",
		"cmi:coal_deposit_block",
		"cmi:cheese_deposit_block",
		"cmi:platinum_deposit_block",
		"cmi:vanadium_deposit_block",
		"create_rns:depleted_deposit_block",
		"create_rns:cobalt_deposit_block",
		"create_rns:quartz_deposit_block",
		"create_rns:uranium_deposit_block",
		"create_rns:silver_deposit_block",
		"create_rns:nickel_deposit_block",
		"create_rns:lead_deposit_block",
		"create_rns:tin_deposit_block",
		"create_rns:redstone_deposit_block"
	]
	depositBlocks.forEach((block) => {
		event.modify(block, (modify) => {
			modify.setDestroySpeed(-1)
			modify.setExplosionResistance(3600000)
		})
	})
})
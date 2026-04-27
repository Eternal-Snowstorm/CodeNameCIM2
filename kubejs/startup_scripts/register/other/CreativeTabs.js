StartupEvents.registry("creative_mode_tab", (event) => {
	function addCreativeTab(name) {
		return event.create(`${Cmi.MODID}:${name}`)
	}

	addCreativeTab("io_block")
		.icon(() => Item.of("cmi:ponder_thermal_input"))
		.content(() => Ingredient.of("#cmi:io_debug_block").itemIds)
		.displayName(Component.translatable(`itemGroup.${Cmi.MODID}.io_block`))

	addCreativeTab("materials")
		.icon(() => Item.of("cmi:cast_iron_ingot"))
		.content(() => Ingredient.of("#cmi:metals").itemIds
			.concat(Ingredient.of("#cmi:ores").itemIds)
			.concat(Ingredient.of("#cmi:raw_metals").itemIds)
			.concat(Ingredient.of("#cmi:ore_nodes").itemIds)
		)
		.displayName(Component.translatable(`itemGroup.${Cmi.MODID}.materials`))

	addCreativeTab("developers")
		.icon(() => Item.of("cmi:re_construction"))
		.content(() => Ingredient.of("#cmi:dev_doll").itemIds)
		.displayName(Component.translatable(`itemGroup.${Cmi.MODID}.developers`))
})
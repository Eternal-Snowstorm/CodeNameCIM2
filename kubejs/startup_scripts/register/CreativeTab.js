StartupEvents.registry("creative_mode_tab", (event) => {
	function addCreativeTab(name) {
		return event.create(`${global.namespace}:${name}`)
	}
	addCreativeTab("io_block")
		.icon(() => Item.of("cmi:ponder_thermal_input"))
		.content(() => Ingredient.of("#cmi:io_debug_block").itemIds)
		.displayName(Component.translatable(`itemGroup.${global.namespace}.io_block`))

	addCreativeTab("salts_and_solutions")
		.icon(() => Item.of("cmi:feso4"))
		.content(() => Ingredient.of("#forge:chem_salts").itemIds)
		.displayName(Component.translatable(`itemGroup.${global.namespace}.salts_and_solutions`))

	addCreativeTab("mechanisms")
		.icon(() => Item.of("cmi:creative_mechanism"))
		.content(() => Ingredient.of("#create:mechanisms").itemIds
			.concat(Ingredient.of("#create:incomplete_mechanisms").itemIds)
			.concat(Ingredient.of("#cmi:mechanism_parts").itemIds)
			.concat(Ingredient.of("#cmi:mechanism_flash_drives").itemIds)
			.concat(Ingredient.of("#cmi:machine_block").itemIds)
			.concat("cmi:crafting_incomplete_iron_mechanism")
			.concat("cmi:crafting_incomplete_copper_mechanism")
		)
		.displayName(Component.translatable(`itemGroup.${global.namespace}.mechanisms`))

	addCreativeTab("metals")
		.icon(() => Item.of("cmi:platinum_ingot"))
		.content(() => Ingredient.of("#cmi:metals").itemIds
			.concat(Ingredient.of("#cmi:ores").itemIds)
			.concat(Ingredient.of("#cmi:raw_metals").itemIds)
			.concat(Ingredient.of("#cmi:ore_nodes").itemIds)
		)
		.displayName(Component.translatable(`itemGroup.${global.namespace}.metals`))

	addCreativeTab("developers")
		.icon(() => Item.of("cmi:unknown_entity_"))
		.content(() => Ingredient.of("#cmi:dev_doll").itemIds)
		.displayName(Component.translatable(`itemGroup.${global.namespace}.developers`))
})
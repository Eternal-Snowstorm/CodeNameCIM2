StartupEvents.registry("creative_mode_tab", (event) => {
	event.create(`${global.namespace}:io_block`)
		.icon(() => Item.of("cmi:ponder_thermal_input"))
		.content(() => Ingredient.of("#cmi:io_debug_block").itemIds)
		.displayName(Component.translate(`itemGroup.${global.namespace}.io_block`))

	event.create(`${global.namespace}:salts_and_solutions`)
		.icon(() => Item.of("cmi:feso4"))
		.content(() => Ingredient.of("#forge:chem_salts").itemIds)
		.displayName(Component.translate(`itemGroup.${global.namespace}.salts_and_solutions`))

	event.create(`${global.namespace}:mechanisms`)
		.icon(() => Item.of("cmi:creative_mechanism"))
		.content(() => Ingredient.of("#create:mechanisms").itemIds
			.concat(Ingredient.of("#create:incomplete_mechanisms").itemIds)
			.concat(Ingredient.of("#cmi:mechanism_parts").itemIds)
			.concat(Ingredient.of("#cmi:mechanism_flash_drives").itemIds)
		)
		.displayName(Component.translate(`itemGroup.${global.namespace}.mechanisms`))

	event.create(`${global.namespace}:metals`)
		.icon(() => Item.of("cmi:platinum_ingot"))
		.content(() => Ingredient.of("#cmi:metals").itemIds
			.concat(Ingredient.of("#cmi:ores").itemIds)
			.concat(Ingredient.of("#cmi:raw_metals").itemIds)
			.concat(Ingredient.of("#cmi:ore_nodes").itemIds)
		)
		.displayName(Component.translate(`itemGroup.${global.namespace}.metals`))
})
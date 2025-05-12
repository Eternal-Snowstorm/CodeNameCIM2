StartupEvents.registry("creative_mode_tab", (event) => {
	event.create(`${global.namespace}:io_block`)
		.icon(() => "ue_addons:ponder_thermal_input")
		.content(() => Ingredient.of("#ue_addons:io_debug_block").itemIds)
		.displayName(Component.translate(`itemGroup.${global.namespace}.io_block`))

	event.create(`${global.namespace}:salts_and_solutions`)
		.icon(() => "ue_addons:feso4")
		.content(() => Ingredient.of("#forge:chem_salts").itemIds)
		.displayName(Component.translate(`itemGroup.${global.namespace}.salts_and_solutions`))

	event.create(`${global.namespace}:mechanisms`)
		.icon(() => "ue_addons:creative_mechanism")
		.content(() => Ingredient.of("#create:mechanisms").itemIds
			.concat(Ingredient.of("#create:incomplete_mechanisms").itemIds)
			.concat(Ingredient.of("#ue_addons:mechanism_parts").itemIds)
			.concat(Ingredient.of("#ue_addons:mechanism_flash_drives").itemIds)
		)
		.displayName(Component.translate(`itemGroup.${global.namespace}.mechanisms`))
})
StartupEvents.registry("creative_mode_tab", (event) => {
	function addCreativeTab(name) {
		return event.create(`${global.namespace}:${name}`)
	}

	addCreativeTab("io_block")
		.icon(() => Item.of("cmi:ponder_thermal_input"))
		.content(() => Ingredient.of("#cmi:io_debug_block").itemIds)
		.displayName(Component.translatable(`itemGroup.${global.namespace}.io_block`))

	let solutionBuckets = [
		"cmi:feso4_solution_bucket",
		"cmi:fecl2_solution_bucket",
		"cmi:cuso4_solution_bucket",
		"cmi:cucl2_solution_bucket",
		"cmi:al2so43_solution_bucket",
		"cmi:alcl3_solution_bucket",
		"cmi:pbcl2_solution_bucket",
		"cmi:pbso4_solution_bucket",
		"cmi:sncl2_solution_bucket",
		"cmi:snso4_solution_bucket",
		"cmi:zncl2_solution_bucket",
		"cmi:znso4_solution_bucket",
		"cmi:aucl3_solution_bucket",
		"cmi:au2so43_solution_bucket",
		"cmi:agcl_solution_bucket",
		"cmi:ag2so4_solution_bucket",
		"cmi:crcl3_solution_bucket",
		"cmi:cr2so43_solution_bucket",
		"cmi:vocl2_solution_bucket",
		"cmi:voso4_solution_bucket",
		"cmi:uo2cl2_solution_bucket",
		"cmi:uo2so4_solution_bucket",
		"cmi:nicl2_solution_bucket",
		"cmi:niso4_solution_bucket",
		"cmi:cocl2_solution_bucket",
		"cmi:coso4_solution_bucket",
		"cmi:oscl3_solution_bucket",
		"cmi:os2so43_solution_bucket",
		"cmi:ptcl4_solution_bucket",
		"cmi:ptso42_solution_bucket",
		"cmi:mgcl2_solution_bucket",
		"cmi:mgso4_solution_bucket",
		"cmi:kcl_solution_bucket",
		"cmi:k2so4_solution_bucket",
		"cmi:cacl2_solution_bucket",
		"cmi:caso4_solution_bucket",
		"cmi:nacl_solution_bucket",
		"cmi:na2so4_solution_bucket"
	]
	addCreativeTab("salts_and_solutions")
		.icon(() => Item.of("cmi:feso4"))
		.content(() => Ingredient.of("#forge:chem_salts").itemIds
			.concat(solutionBuckets)
		)
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

	addCreativeTab("random_mechanisms")
		.icon(() => Item.of("cmi:mechanical_random_mechanism"))
		.content(() => Ingredient.of("#cmi:random_mechanisms").itemIds)
		.displayName(Component.translatable(`itemGroup.${global.namespace}.random_mechanisms`))
})
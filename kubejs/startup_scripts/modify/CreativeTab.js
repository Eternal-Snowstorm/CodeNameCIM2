StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setDisplayName(Component.translatable(`itemGroup.${global.namespace}.all`))

	event.addAfter("cmi:radsand", [
		"cmi:water_pump",
		"cmi:mars_geothermal_vent",
		"cmi:mercury_geothermal_vent"
	])

	event.remove([
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
		"cmi:na2so4_solution_bucket",
		"minecraft:milk_bucket"
	])

	let removeItemFromCreativeTab = [
		`#${global.namespace}:io_debug_block`,
		"#forge:chem_salts",
		"#create:mechanisms",
		"#create:incomplete_mechanisms",
		`#${global.namespace}:mechanism_parts`,
		`#${global.namespace}:mechanism_flash_drives`,
		"#tconstruct:casts/multi_use/mechanism",
		"#tconstruct:casts/single_use/mechanism",
		"#tconstruct:casts/multi_use/nugget",
		`#${global.namespace}:metals`,
		`#${global.namespace}:ores`,
		`#${global.namespace}:raw_metals`,
		`#${global.namespace}:ore_nodes`,
		`#${global.namespace}:dev_doll`,
		`#${global.namespace}:machine_block`,
	]
	removeItemFromCreativeTab.forEach((item) => {
		event.remove(item)
	})
})

StartupEvents.modifyCreativeTab("create:base", (event) => {
	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])
})

StartupEvents.modifyCreativeTab("thermal_extra:resources", (event) => {
	event.add([
		"thermal_extra:polyolefin_plate"
	])
})

StartupEvents.modifyCreativeTab("tconstruct:smeltery", (event) => {
	event.add([
		"cmi:mechanism_cast",
		"cmi:mechanism_sand_cast",
		"cmi:mechanism_red_sand_cast"
	])
})

StartupEvents.modifyCreativeTab("thermalconstruct:thermal_construct_tab", (event) => {
	event.add([
		"cmi:bronze_mechanism_cast",
		"cmi:bronze_nugget_cast"
	])
})

StartupEvents.modifyCreativeTab("functionalstorage:main", (event) => {
	event.setIcon("functionalstorage:cherry_1")
})

StartupEvents.modifyCreativeTab("immersiveengineering:main", (event) => {
	event.addAfter(
		Item.of("immersiveengineering:blueprint")
			.withNBT({
				blueprint: "molds"
			}),
		Item.of("immersiveengineering:blueprint")
			.withNBT({
				blueprint: "mechanism_basements"
			}),
		Item.of("immersiveengineering:blueprint")
			.withNBT({
				blueprint: "mechanism_augments"
			})
	)
})
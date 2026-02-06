StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setDisplayName(Component.translatable(`itemGroup.${global.namespace}.all`))

	// event.addBefore([
	// 	"cmi:water_pump",
	// 	"cmi:mars_geothermal_vent",
	// 	"cmi:mercury_geothermal_vent",
	// 	"cmi:hydraulic_press",
	// 	"cmi:accelerator_motor"
	// ])

	event.remove([
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
	event.addAfter(Item.of("immersiveengineering:blueprint", {
		blueprint: "molds"
	}), [
		Item.of("immersiveengineering:blueprint", {
			blueprint: "mechanism_basements"
		}),
		Item.of("immersiveengineering:blueprint", {
			blueprint: "mechanism_augments"
		})
	])
})
StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setIcon("ue_addons:charged_amethyst")
	event.setDisplayName(Component.translate(`itemGroup.${global.namespace}.all`))

	event.remove(`#${global.namespace}:io_debug_block`)
	event.remove("#forge:chem_salts")
	event.remove("#create:mechanisms")
	event.remove("#create:incomplete_mechanisms")
	event.remove(`#${global.namespace}:mechanism_parts`)
	event.remove(`#${global.namespace}:mechanism_flash_drives`)
	event.remove("#tconstruct:casts")
	event.remove("#forge:plates")
	event.remove("#forge:nuggets")
	event.remove("#forge:ingots")
	event.remove("#forge:dusts")
	event.remove("#forge:rods")
	event.remove("#forge:gear")
	event.remove("#forge:storage_blocks")
	event.remove("#forge:molten_materials")
	event.remove("#forge:ores")
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
		"ue_addons:mechanism_cast",
		"ue_addons:mechanism_sand_cast",
		"ue_addons:mechanism_red_sand_cast"
	])
})
StartupEvents.registry("item", (event) => {
	// 空白闪存盘
	event.create(`${global.namespace}:empty_flash_drive`)
		.texture(`${global.namespace}:item/mechanism/flash_drive/empty`)
		.tag(`${global.namespace}:mechanism_flash_drives`)

	// 已编程闪存盘
	event.create(`${global.namespace}:programmed_flash_drive`)
		.texture(`${global.namespace}:item/mechanism/flash_drive/programmed`)
		.tag(`${global.namespace}:mechanism_flash_drives`)

	// 精密
	event.create(`${global.namespace}:precision_mechanism_flash_drive`)
		.texture(`${global.namespace}:item/mechanism/flash_drive/precision`)
		.tag(`${global.namespace}:mechanism_flash_drives`)

	// 红石
	event.create(`${global.namespace}:redstone_mechanism_flash_drive`)
		.texture(`${global.namespace}:item/mechanism/flash_drive/redstone`)
		.tag(`${global.namespace}:mechanism_flash_drives`)

	let mechanismRegister = [
		"nature",
		"wooden",
		"stone",
		"iron",
		"copper",
		"andesite",
		"photosensitive",
		"gold",
		"cobalt",
		"nether",
		"thermal",
		"feinforced",
		"resonant",
		"railway",
		"ender",
		"light_engineering",
		"heavy_engineering",
		"enchanted",
		"smart",
		"computing",
		"tier_1_aviation",
		"tier_2_aviation",
		"tier_3_aviation",
		"tier_4_aviation",
		"basic_mekanism",
		"advanced_mekanism",
		"elite_mekanism",
		"ultimate_mekanism",
		"structure",
		"nuclear",
		"antimatter",
		"coil",
		"sculk",
		"colorful",
		"creative",
		"pigiron"
	]
	mechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism_flash_drive`)
			.texture(`${global.namespace}:item/mechanism/flash_drive/${material}`)
			.tag(`${global.namespace}:mechanism_flash_drives`)
	})
})
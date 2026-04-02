StartupEvents.registry("item", (event) => {
	// 已编程闪存盘
	event.create(`${CmiCore.MODID}:programmed_flash_drive`)
		.texture(`${CmiCore.MODID}:item/mechanism/flash_drive/programmed`)
		.tag(`${CmiCore.MODID}:mechanism_flash_drives`)
		.tag(`${CmiCore.MODID}:mechanism_flash_drives/blank`)

	// 精密
	event.create(`${CmiCore.MODID}:precision_mechanism_flash_drive`)
		.texture(`${CmiCore.MODID}:item/mechanism/flash_drive/precision`)
		.tag(`${CmiCore.MODID}:mechanism_flash_drives`)
		.tag(`${CmiCore.MODID}:mechanism_flash_drives/precision`)

	// 红石
	event.create(`${CmiCore.MODID}:redstone_mechanism_flash_drive`)
		.texture(`${CmiCore.MODID}:item/mechanism/flash_drive/redstone`)
		.tag(`${CmiCore.MODID}:mechanism_flash_drives`)
		.tag(`${CmiCore.MODID}:mechanism_flash_drives/redstone`)

	let mechanismRegister = [
		"nature",
		"wooden",
		"stone",
		"iron",
		"copper",
		"andesite",
		"bronze",
		"photosensitive",
		"gold",
		"cobalt",
		"nether",
		"thermal",
		"reinforced",
		// "resonant",
		"railway",
		"ender",
		"light_engineering",
		"heavy_engineering",
		"enchanted",
		"smart",
		"computing",
		"air_tight",
		"tier_1_aviation",
		"tier_2_aviation",
		"tier_3_aviation",
		"tier_4_aviation",
		"basic_mekanism",
		"advanced_mekanism",
		"elite_mekanism",
		"ultimate_mekanism",
		"nuclear",
		"antimatter",
		"coil",
		"sculk",
		"colorful",
		"creative",
		"pig_iron",
		"potion",
	]
	mechanismRegister.forEach((material) => {
		event.create(`${CmiCore.MODID}:${material}_mechanism_flash_drive`)
			.texture(`${CmiCore.MODID}:item/mechanism/flash_drive/${material}`)
			.tag(`${CmiCore.MODID}:mechanism_flash_drives`)
			.tag(`${CmiCore.MODID}:mechanism_flash_drives/${material}`)
	})
})
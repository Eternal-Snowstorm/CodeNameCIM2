StartupEvents.registry("item", (event) => {
	// 批量注册构件类型
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
		"feinforced",
		"resonant",
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
		"antimatter",
		"coil",
		"sculk",
		"colorful",
		"creative",
		"potion"
	]
	mechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}`)
			.tag("create:mechanisms")
			.tag(`create:mechanisms/${material}`)

		event.create(`${global.namespace}:incomplete_${material}_mechanism`, "create:sequenced_assembly")
			.texture(`${global.namespace}:item/mechanism/incomplete/${material}`)
			.tag("create:incomplete_mechanisms")
	})
})
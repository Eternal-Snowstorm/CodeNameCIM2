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
	
	global.mechanismList = mechanismRegister.concat("pigiron")
	
	//仅注册完成状态的构件 没有驱动
	let completeMechanismRegister = [
		"basic_random",
		"mechanical_random",
		"engineering_random",
		"flux_random",
		"magical_random",
		"quantum_random",
		"mekanism_random"
	]
	mechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}`)
			.tag("create:mechanisms")
			.displayName(Component.translatable(`${global.namespace}:${material}_mechanism`))
		event.create(`${global.namespace}:incomplete_${material}_mechanism`, "create:sequenced_assembly")
			.texture(`${global.namespace}:item/mechanism/incomplete/${material}`)
			.tag("create:incomplete_mechanisms")
	})
	completeMechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}`)
			.tag("create:mechanisms")
			.displayName(Component.translatable(`${global.namespace}:${material}_mechanism`))
	})
})
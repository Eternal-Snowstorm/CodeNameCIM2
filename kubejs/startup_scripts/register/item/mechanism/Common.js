StartupEvents.registry("item", (event) => {
	// 批量注册构件类型
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
		"desh",
		"ostrum",
		"calorite",
		"basic_mekanism",
		"advanced_mekanism",
		"elite_mekanism",
		"ultimate_mekanism",
		"structure",
		"nuclear",
		"antimatter",
		"coil",
		"sculk",
		"colorful"
	]
	//仅注册完成状态的构件 没有驱动
	global.mechanismList = mechanismRegister.concat("pigiron")
	let completeMechanismRegister = [
		"basic_random",
		"mechanical_random",
		"engineering_random",
		"flux_random",
		"magical_random",
		"quantum_random",
		"mekanism_random",
		"final_random"
	]
	mechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}_mechanism`)
			.tag("create:mechanisms")
		event.create(`${global.namespace}:incomplete_${material}_mechanism`, "create:sequenced_assembly")
			.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_${material}_mechanism`)
			.tag("create:incomplete_mechanisms")
		event.create(`${global.namespace}:${material}_force_exe`)
			.modelJson({
				"parent": "minecraft:item/generated",
				"textures": {
					"layer0": `${global.namespace}:item/mechanism_force_base`,
					"layer1": `${global.namespace}:item/mechanism/complete/${material}_mechanism`,
					"layer2": `${global.namespace}:item/mechanism_force_overlay`
				}
			})
		event.create(`${global.namespace}:beta_${material}_force_exe`)
		.modelJson({
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": `${global.namespace}:item/beta_mechanism_force_base`,
				"layer1": `${global.namespace}:item/mechanism/incomplete/incomplete_${material}_mechanism`,
				"layer2": `${global.namespace}:item/beta_mechanism_force_overlay`
			}
		})
	})
	completeMechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}_mechanism`)
			.tag("create:mechanisms")
	})
})
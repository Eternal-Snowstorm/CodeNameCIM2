StartupEvents.registry("item", (event) => {
	let mechanismRegister = [
		"nature",
		"wooden",
		"stone",
		"iron",
		"copper",
		"andesite",
		"photosensitive",
		"gold",
		"thermal",
		"feinforced",
		"resonant",
		"railway",
		"ender",
		"light_engineering",
		"heavy_engineering",
		"enchanted",
		"smart",
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
	]
	mechanismRegister.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism`)
			.texture(`${global.namespace}:item/mechanism/complete/${material}_mechanism`)
			.tag("create:mechanisms")
		event.create(`${global.namespace}:incomplete_${material}_mechanism`, "create:sequenced_assembly")
			.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_${material}_mechanism`)
			.tag("create:incomplete_mechanisms")
	})

	let partsRegisters = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism",
		"final"
	]
	partsRegisters.forEach((material) => {
		event.create(`${global.namespace}:${material}_mechanism_part`)
			.texture(`${global.namespace}:item/mechanism/part/${material}_mechanism_part`)
			.tag(`${global.namespace}:mechanism_parts`)
	})
})
StartupEvents.registry("item", (event) => {
	// 批量注册构件零件类型
	let partsRegisters = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism",
		"final",
		"space"
	]
	partsRegisters.forEach((name) => {
		event.create(`${Cmi.MODID}:${name}_mechanism_part`)
			.texture(`${Cmi.MODID}:item/mechanism/part/${name}`)
			.tag(`${Cmi.MODID}:mechanism_parts`)
	})
})
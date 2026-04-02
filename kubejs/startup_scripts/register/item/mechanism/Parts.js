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
		event.create(`${CmiCore.MODID}:${name}_mechanism_part`)
			.texture(`${CmiCore.MODID}:item/mechanism/part/${name}`)
			.tag(`${CmiCore.MODID}:mechanism_parts`)
	})
})
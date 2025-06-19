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
		event.create(`${global.namespace}:${name}_mechanism_part`)
			.texture(`${global.namespace}:item/mechanism/part/${name}`)
			.tag(`${global.namespace}:mechanism_parts`)
	})
})
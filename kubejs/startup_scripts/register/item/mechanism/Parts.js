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
		"final"
	]
	partsRegisters.forEach((name) => {
		event.create(`${global.namespace}:${name}_mechanism_part`)
			.texture(`${global.namespace}:item/mechanism/part/${name}_mechanism_part`)
			.tag(`${global.namespace}:mechanism_parts`)
	})
})
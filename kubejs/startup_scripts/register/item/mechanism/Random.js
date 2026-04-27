StartupEvents.registry("item", (event) => {
	// 批量注册随机构件
	let randomMechanismRegister = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism",
		"space",
		"random"
	]
	randomMechanismRegister.forEach((material) => {
		event.create(`${Cmi.MODID}:${material}_random_mechanism`)
			.texture(`${Cmi.MODID}:item/mechanism/random/${material}`)
			.tag("cmi:random_mechanisms")
	})
})
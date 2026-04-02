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
		event.create(`${CmiCore.MODID}:${material}_random_mechanism`)
			.texture(`${CmiCore.MODID}:item/mechanism/random/${material}`)
			.tag("cmi:random_mechanisms")
	})
})
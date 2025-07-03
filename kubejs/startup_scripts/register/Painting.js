StartupEvents.registry("painting_variant", (event) => {
	// Aleegos
	addPainting("rr1", 16, 16)
	addPainting("rr2", 16, 16)
	addPainting("rr3", 16, 16)
	addPainting("rr4", 16, 16)
	addPainting("rr5", 16, 16)
	addPainting("rr6", 16, 16)
	addPainting("rr7", 16, 16)
	addPainting("rr8", 16, 16)
	addPainting("rr9", 16, 16)
	addPainting("rr10", 16, 16)
	addPainting("rr11", 16, 16)
	addPainting("rr12", 16, 16)
	addPainting("rr13", 16, 16)
	addPainting("rr14", 16, 16)

	// Vechni_Metel
	addPainting("bug_is_right", 32, 16)
	addPainting("it_must_be_optifine", 16, 32)

	// RandomMechanism(随机构件)
	addPainting("random_mechanism", 32, 32)

	// 柒
	addPainting("qi_month", 64, 64)

	// ⑨Dropper_QWQ⑨
	addPainting("sacabambaspis", 16, 16)

	function addPainting(name, width, height) {
		event.create(`${global.namespace}:${name}`)
			.width(width)
			.height(height)
			.tag("minecraft:placeable")
	}
})
StartupEvents.registry("painting_variant", (event) => {

	// Unknown_Entity_
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
	addPainting("rr14", 16, 16)
	addPainting("rr15", 16, 16)

	// Vechni_Metel
	addPainting("bug_is_right", 32, 16)
	addPainting("it_must_be_optifine", 16, 32)

	function addPainting(name, width, height) {
		event.create(`${global.namespace}:${name}`)
			.width(width)
			.height(height)
			.tag("minecraft:placeable")
	}
})
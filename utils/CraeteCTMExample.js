StartupEvents.registry("block", (event) => {
	event.create("desh_casing")
		.displayName("Desh Casing")
		.material("wood")
		.hardness(1.0)
		.resistance(1.0)
		.opaque(true)
		.renderType("solid")
		.textureAll("tothemoon:block/desh_casing")
		.tagBoth("create:casing")
		.tagBlock("mineable/axe")
		.tagBlock("mineable/pickaxe")
		.blockstateJson = ({
			"athena:loader": "athena:ctm",
			"ctm_textures": {
				"center": "tothemoon:block/desh_casing/ctm/desh_casing_center",
				"empty": "tothemoon:block/desh_casing/ctm/desh_casing_empty",
				"horizontal": "tothemoon:block/desh_casing/ctm/desh_casing_horizontal",
				"particle": "tothemoon:block/desh_casing/ctm/desh_casing_particle",
				"vertical": "tothemoon:block/desh_casing/ctm/desh_casing_vertical"
			}
		})
})
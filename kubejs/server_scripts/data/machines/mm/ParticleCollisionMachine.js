MMEvents.createStructures((event) => {
	event.create("cmi:particle_collision_machine_structure")
		.controllerId("mm:particle_collision_machine")
		.name("")
		.layout((builder) => {
			builder.layer([
				"ABBBABBBA",
				"ABBBABBBA",
				"ABBBABBBA"
			])
			builder.layer([
				"ABBBGBBBA",
				"F       E",
				"ABBBCBBBA"
			])
			builder.layer([
				"AAAAAAAAA",
				"AAAAAAAAA",
				"AAAAAAAAA"
			])
			builder.key("E", {
				block: "mm:particle_collision_machine_item_output"
			})
			builder.key("B", {
				block: "mekanism:structural_glass"
			})
			builder.key("G", {
				block: "mm:particle_collision_machine_energy_input"
			})
			builder.key("A", {
				block: "mekanism:sps_casing"
			})
			builder.key("F", {
				block: "mm:particle_collision_machine_item_input"
			})
		})
})
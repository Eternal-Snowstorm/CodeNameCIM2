MMEvents.createStructures((event) => {
	event.create("cmi:cracker_structure")
		.controllerId("mm:cracker")
		.name("")
		.layout((builder) => {
			builder.layer([
				"FFFFF",
				"FFFFF",
				"FFFFF",
				"FFFFF",
				"FFFFF"
			])
			builder.layer([
				"FFFFF",
				"FBBBF",
				"FBDBF",
				"FBBBF",
				"FFFFF"
			])
			builder.layer([
				"FFFFF",
				"F   F",
				"I B F",
				"F   F",
				"FFFFF"
			])
			builder.layer([
				"FFFFF",
				"F   F",
				"I B H",
				"F   F",
				"FFCFF"
			])
			builder.layer([
				"AAEAA",
				"ABBBA",
				"ABDBA",
				"ABBBA",
				"AAAAA"
			])
			builder.key("A", {
				block: "create:industrial_iron_block"
			})
			builder.key("D", {
				block: "immersiveengineering:heavy_engineering"
			})
			builder.key("F", {
				block: "cmi:pressure_resistance_casing"
			})
			builder.key("B", {
				block: "immersiveengineering:light_engineering"
			})
			builder.key("E", {
				block: "mm:cracker_energy_input"
			})
			builder.key("H", {
				block: "mm:cracker_fluid_output"
			})
			builder.key("I", {
				block: "mm:cracker_fluid_input"
			})
		})
})
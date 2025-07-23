MMEvents.createStructures((event) => {
	event.create("cmi:steam_ore_processor_structure")
		.controllerId("mm:steam_ore_processor")
		.name("")
		.layout((builder) => {
			builder.layer([
				"BBB",
				"BJB",
				"BBB"
			])
			builder.layer([
				"BIB",
				"I I",
				"BIB"
			])
			builder.layer([
				"BHB",
				"G E",
				"BCB"
			])
			builder.layer([
				"AAA",
				"AAA",
				"AAA"
			])
			builder.key("E", {
				block: "mm:steam_ore_processor_item_output"
			})
			builder.key("H", {
				block: "mm:steam_ore_processor_fluid_output"
			})
			builder.key("I", {
				tag: "forge:glass"
			})
			builder.key("A", {
				block: "immersiveengineering:treated_wood_horizontal"
			})
			builder.key("B", {
				block: "cmi:bronze_casing"
			})
			builder.key("G", {
				block: "mm:steam_ore_processor_item_input"
			})
			builder.key("J", {
				block: "mm:steam_ore_processor_fluid_input"
			})
		})
})